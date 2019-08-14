<?php

namespace app\portal\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;

class IndexController extends HomeBaseController
{
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
        return $this -> fetch();
    }

    public function register(){
        $user = input("post.");
    
        if(!$user['user_name']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$user['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        if(!$user['real_name'])  return json(array('code'=>0,'msg'=>'真实名字不能为空'));

        if(!$user['dept'])  return json(array('code'=>0,'msg'=>'部门不能为空'));

        $res = model('c_user') -> registVerify($user);

        if($res && $res > 0){
            return json(array('code'=>1,'msg'=>'注册信息已发送至管理员，请静候审批。'));
        }else{
            if($res == -1){
                return json(array('code'=>0,'msg'=>'注册失败，用户名已存在！！！'));
            }
            return json(array('code'=>0,'msg'=>'注册失败！！！'));
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

        if(1 == $info)      return json(array('code'=>1,'msg'=>'登录成功','url'=>'staff'));
    

    }
    //注销
    public function logout(){
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

        $query = Db::name("CArticle") -> alias('at') -> join("CUser u","at.user_id = u.id","LEFT") -> where('at.title','like','%'.$keyword.'%') -> order("date desc");

        $list = $query -> limit(($cur_page-1)*$num , $num) -> field("at.*,u.user_name,u.avatar,u.user_nickname") -> select() -> toArray();

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
        $data['total'] = $query -> count();
        return json($data);
    }


    public function articleDet(){
        $id = $this -> request -> param('id',0,'intval');

        $data = Db::name('CArticle') -> get($id);

        $content = str_replace('\\','',trim($data['content'],'"'));

        $data['content'] = $content;

        $this -> assign('data',$data);
        return $this -> fetch();
    }

    public function addComment(){
        $data = $this -> request -> param();
        $data['date'] = date("Y-m-d H:i:s");
        $data['user_id'] = getUser('id');
        $data['parent_id'] = 0;

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

        $query = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT')  -> where('ac.article_id',$article_id);

        $list = $query -> order("ac.date desc") -> field('ac.id,ac.comment,ac.date,u.user_name,u.user_nickname') ->limit(($cur_page-1)*$num,$num) -> select() -> toArray();

        $data['list'] = $list;
        $data['page_size'] = $num;
        $data['total'] = $query -> count();
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
        $joinNews = intval(Db::name("CUser") -> where("user_status",2) -> count());

        $news['join_news'] = $joinNews;
        //$news['count'] = $joinNews + a +b +c;
        $news['count'] = $joinNews;
        return $news;
    }

}