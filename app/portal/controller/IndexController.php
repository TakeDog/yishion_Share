<?php

namespace app\portal\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;
use app\common\Category;
use app\common\OperateConfig;
use app\common\AppLog;

class IndexController extends HomeBaseController
{
    
    public function online(){
        $id = getUser('id');
        $login_id = (int)getUser("login_id");

        $operateConfig = new OperateConfig();
        $config = $operateConfig -> getConfig();
        
        $protalOnline = null;
        try {
            $protalOnline = $config -> protalOnline;
        } finally{
            if($protalOnline == null){
                $protalOnline = [array('id'=>$id,'login_id'=>$login_id)];
            }else{
                $status = true;
                foreach ($protalOnline as $k => $v) {
                    if($v -> id == $id){
                        $status = false;
                    }
                }
                if($status){
                    $protalOnline[] = array('id'=>$id,'login_id'=>$login_id);
                }
            }
            $config -> protalOnline = $protalOnline;
            $operateConfig -> setConfig($config);
            return count($protalOnline);
        }
    }
    
    public function outline(){
        $operateConfig = new OperateConfig();
        $config = $operateConfig -> getConfig();
        $id = getUser('id');

        $protalOnline = null;
        try {
            $protalOnline = $config -> protalOnline;
        } finally{
            if($protalOnline != null){
                foreach ($protalOnline as $k => $v) {
                    if($v -> id == $id){
                        Db::name("c_user_login_total")->where('id',$v -> login_id)->update(['last_logout_time'=>time()]);
                        array_splice($protalOnline, $k, 1);
                    }
                }
            }else{
                $protalOnline = [];
            }
            $config -> protalOnline = $protalOnline;
            $operateConfig -> setConfig($config);
            return count($protalOnline);
        }
    }

    public function index(){
        return $this->fetch();
    }

    public function staff(){
        $this -> assign('news',$this -> indexNews());
        return $this -> fetch();
    }

    public function stranger(){
        return $this -> fetch();
    }

    public function staff_index1(){
        $this -> assign('user_info',session("user_info",'','portal'));
        return $this -> fetch();
    }

    public function staff_index2(){
        //$userInfo = session("user_info",'','portal');
        //公司资讯
        $operateConfig = new OperateConfig();
        $infoList =  Db::name("WorkInfo") -> order("date desc") -> where(function($query){

            $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");

        }) -> where(function($query){

            $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);

        }) -> limit(0,5) -> select();
        
        //侧边栏信息
        $asideData = array(

            //企业文化
            "culture" => Db::name("IndexAside") -> where('block',1) -> where(function($query){
                $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");  
            }) -> where(function($query){
                $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);
            }) -> order('sort,date desc') -> limit(0,5) -> select(), 

            //内部通知
            "notify" => Db::name("IndexAside") -> where('block',2) -> where(function($query){
                $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");
            }) -> where(function($query){
                $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);
            }) -> order('sort,date desc') -> limit(0,5) -> select(), 

            //龙虎榜
            "rank" => Db::name("IndexAside") -> where('block',3) -> where(function($query){
                $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");
            }) -> where(function($query){
                $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);
            }) ->  order('sort,date desc') -> limit(0,5) -> select() 

        );

        $this -> assign("ConfigUI",$operateConfig -> getConfig());
        $this -> assign('infoList',$infoList);
        $this -> assign("asideData",$asideData);
        $this -> assign('user_info',session("user_info",'','portal'));

        return $this -> fetch();

    }

    public function login(){
        if(session('?user_info','','portal')){
            $this -> redirect("staff");
        }else{
            return $this -> fetch();
        }
    }

    public function regist(){

        $catetory = new Category();

        $option_data = Db::name("dept") -> select();
        $tree_data = Db::name("dept") -> order('id') ->select();
        
        
        $this -> assign('tree',json_encode($catetory -> unlimitedForLayer($tree_data)));
        $this -> assign('option',json_encode($catetory -> unlimitedForLevel($option_data,'|—')));
        return $this -> fetch();
    }

    public function register(){
        $user = input("post.");
    
        if(!$user['user_name']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$user['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        if(!$user['real_name'])  return json(array('code'=>0,'msg'=>'真实名字不能为空'));

        if(!$user['dept_id'])  return json(array('code'=>0,'msg'=>'部门不能为空'));

        if(!$user['mobile'])  return json(array('code'=>0,'msg'=>'手机号码不能为空'));

        $existedMb = Db::name('CUser') -> where('mobile',$user['mobile']) -> count();

        if($existedMb) return json(array('code'=>0,'msg'=>'手机号已存在，请重新输入'));

        if( !isset($user['job_id']) )  return json(array('code'=>0,'msg'=>'岗位不能为空'));

        $res = model('c_user') -> registVerify($user);

        if($res && $res > 0){
            return json(array('code'=>1,'msg'=>'注册信息已发送至管理员，请静候审批。'));
        }else{
            if($res == -1){
                return json(array('code'=>0,'msg'=>'注册失败，用户名已存在'));
            }
            return json(array('code'=>0,'msg'=>'注册失败'));
        }
    }

    //登录验证
    public function verify(){
        $query = input("post.");
    
        if(!$query['user']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$query['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        $info = model('c_user') -> loginVerify($query['user'], $query['pwd']);  

        if(0 === $info)     return json(array('code'=>0,'msg'=>'账号不存在'));
        if(-1 === $info)    return json(array('code'=>0,'msg'=>'账号被禁用'));
        if(-2 === $info)    return json(array('code'=>0,'msg'=>'密码不正确'));

        if(1 == $info){
            $user['user_id'] = getUser('id');
            $user['last_logout_time'] = null;
            $user['login_time'] = date("Y-m-d H:i:s");
            $login_id = Db::name("c_user_login_total") -> insertGetId($user);

            setUser('login_id',$login_id);
            $this -> online();
            return json(array('code'=>1,'msg'=>'登录成功','url'=>'staff'));
        }

    }
    //注销
    public function logout(){
        $this -> outline();
        session(null,'portal');
        $this -> redirect("login");
    }

    //保存富文本内容
    public function saveEditor(){
        $data['content'] = input('post.content');
        //正则表达式匹配查找图片路径
        // $pattern = '/\<[img|IMG].*?src=[\'|\"](.*?(?:[\.gif|\.jpg|\.jpeg|\.png]))[\'|\"].*?[\/]?\>/i';
        $pattern = '/<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/i';
        preg_match_all($pattern,$data['content'],$res);

        $num=count($res[1]);
        
        for($i=0;$i<$num;$i++){
            $ueditor_img = $res[1][$i];

            //新建日期文件夹
            $tmp_arr = explode('/',$ueditor_img);

            $oldFloder = './upload/portal/ueditor/img_temp/'.$tmp_arr[7];
            $newFloder = './upload/portal/ueditor/img/'.$tmp_arr[7];
            if(!is_dir($newFloder)){
                mkdir($newFloder,0777);
            }

            $img_name = substr($tmp_arr[8],0,strlen($tmp_arr[8])-1);
           
            if(copy($oldFloder."/".$img_name,$newFloder."/".$img_name)){
                unlink($oldFloder."/".$img_name);
                $newimg=str_replace('/img_temp/','/img/',$ueditor_img);
                $data['content']=str_replace('/img_temp/','/img/',$data['content']);
            }
        }
        
        $data['title'] = input("param.title");
        $data['user_id'] = getUser('id');
        $data['status'] = 0;
        $data['date'] = time();

        $result = Db::name('CArticle') -> insert($data);

        if($result){
            return 1001;
        }else{
            return 1002;
        }
    }

    public function getArticle(){

        $cur_page = input("param.page") ? input("param.page") : 1;
        $keyword = input("param.keyword");
        $num = 10;

        // $query = Db::name("CArticle") -> alias('at') -> join("CUser u","at.user_id = u.id","LEFT") -> where('at.title','like','%'.$keyword.'%') -> order("date desc");
        $list = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%$keyword%' ORDER BY DATE DESC limit ".($cur_page-1)*$num .", $num");

        // $list = $query -> limit(($cur_page-1)*$num , $num) -> field("at.*,u.user_name,u.avatar,u.user_nickname") -> select() -> toArray();

        $currentTime = time();

        foreach($list as $k => $v){
            $offsetTime = $currentTime - intval($v['date']);
            
            if($offsetTime / 60 / 60 > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60 / 60)).'小时前';
                continue;
            }

            if($offsetTime / 60  > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60)).'分钟前';
            }else{
                $list[$k]['offsetTime'] = "刚刚";
            }


        }

        $data['list'] = $list;
        $data['page_size'] =  $num;
        $data['total'] =  count($list);
        return json($data);
    }


    public function articleDet(){
        $id = $this -> request -> param('id',0,'intval');
        // $data = Db::name('CArticle') -> alias('a') -> join('CUser u','a.user_id = u.id','LEFT') -> where('a.id',$id) -> field('a.*,u.user_name,u.user_nickname') -> select();
        $data = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.id=$id");
        $content = str_replace('\\','',trim($data[0]['content'],'"'));

        $currentTime = time();
        $offsetTime = $currentTime - intval($data[0]['date']);
        
        if($offsetTime / 60 / 60 > 1){
            $data[0]['offsetTime'] = floor(($offsetTime / 60 / 60)).'小时前';
        }else{

            if($offsetTime / 60  > 1){
                $data[0]['offsetTime'] = floor(($offsetTime / 60)).'分钟前';
            }else{
                $data[0]['offsetTime'] = "刚刚";
            }

        }

        $data[0]['content'] = $content;

        $this -> assign('data',$data[0]);
        return $this -> fetch();
    }

    public function addComment(){
        $data = $this -> request -> param();
        $data['date'] = date("Y-m-d H:i:s");
        $data['user_id'] = getUser('id');

        if(!trim($data['comment'])){
            $error['error'] = 1001;
            $error['msg'] = "评论内容不能为空";
            return json($error);
        }

        $insert = Db::name("CArticleComment") -> insert($data);

        if($insert){
            $error['error'] = 1000;
            $error['msg'] = "评论成功";
            return json($error);
        }else{
            $error['error'] = 1002;
            $error['msg'] = "插入数据库失败";
            return json($error);
        }

    }

    public function getComList(){
        $article_id = $this -> request -> param('article_id');
        $cur_page = $this -> request -> param('page',0,'intval');

        $num = 5;

        $query = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id','LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where(array('ac.article_id'=>$article_id,'ac.top_id'=>0));

        $list = $query -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname') ->limit(($cur_page-1)*$num,$num) -> select() -> toArray();

        foreach($list as $k => $v){

            $query2 = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id', 'LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where(array('ac.article_id'=>$article_id,'ac.top_id'=>$v['id']));

            $list2 = $query2 -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname') -> select() -> toArray();
            if(count($list2)>0)
                $list[$k]['ctree'] = $list2;
                $list[$k]['total'] = $query2 -> count();
        }

        $data['list'] = $list;
        $data['page_size'] = $num;
        $data['total'] = $query -> count();;
        return json($data);
    }

    public function openPdf(){
        $filename = $this -> request -> param('name');
        $file = "./static/PDF/".$filename.".pdf";
        header('Content-type: application/pdf'); 
        header('filename='.$file); 
        return readfile($file);
    }

    private function indexNews(){
        $joinNews = 0;
        $user_info = session("user_info",'','portal');
        if($user_info['super'] == 1){
            $joinNews = intval(Db::name("CUser") -> where("user_status",2) -> count());
        }
        $news['join_news'] = $joinNews;
        //$news['count'] = $joinNews + a +b +c;
        $news['count'] = $joinNews;
        return $news;
    }

    public function getComListById(){
        $comment_id = $this -> request -> param('comment_id',0,'intval');

        $list = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id','LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where('ac.id',$comment_id) -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname') -> find();

        $query2 = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id', 'LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where('ac.top_id',$comment_id);

        $list2 = $query2 -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname') -> select() -> toArray();

        if(count($list2)>0){
            $list['ctree'] = $list2;
            $list['subTotal'] = $query2 -> count();
        }

        return json($list);
    }

    public function addViewCount(){
        $article_id = $this -> request -> param('article_id',0,'intval');
        
        $res = Db::name('CArticle') -> WHERE('id',$article_id) -> setInc("view_count",1);
    }

    public function getOption(){
        $tree_data = Db::name("dept") -> select();
        $catetory = new Category();
        echo json_encode($catetory -> unlimitedForLevel($tree_data,'|—'));
    }

    //获取岗位
    public function getJob(){
        
        $dept_id = $this -> request -> param('dept_id');
        $part = model("Dept") -> getFirstP($dept_id);
        $deptMsg = model("Dept") -> find($dept_id);
        echo json_encode( Db::name("Job") -> where(['ogn'=>$part,'dept_type'=>$deptMsg['type']]) -> select() );

    }
    
    public function openFile(){
        $path = $this -> request -> param("path");
        AppLog::addLog($this -> request -> param("file_name"));
        redirectFile($path);
    }

    //更多
    public function showMore(){
        
        $this -> assign("block",$this -> request -> param('block',1,'intval'));
        return $this -> fetch();
    }

    public function get_more_data(){
        $page_size = 11;
        $page = $this -> request -> param("page",1,'intval');

        $tableData = Db::name("IndexAside") 
        -> where("block",$this -> request -> param('block'))
        -> whereLike("file_name","%".$this -> request -> param('search_key')."%")
        -> where(function($query){
            $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");
        }) 
        -> where(function($query){
            $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);
        })
        -> limit(($page-1)*$page_size,$page_size)
        -> order("sort")
        -> select();

        $total = Db::name("IndexAside")
        -> where("block",$this -> request -> param('block'))
        -> whereLike("file_name","%".$this -> request -> param('search_key')."%")
        -> where(function($query){
            $query->where('auth_dept','like', "%[".session("user_info",'','portal')['dept_id'].",%" ) -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id'].",%") -> whereor('auth_dept','like', "%,".session("user_info",'','portal')['dept_id']."]%");
        }) 
        -> where(function($query){
            $query->where('auth_job',0)->whereor('auth_job',session("user_info",'','portal')['job_id']);
        })
        -> count();

        $data['page_size'] = $page_size;
        $data['total'] = $total;
        $data['tableData'] = $tableData;
        echo json_encode($data);
    }
}