<?php

namespace app\ysLive\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;
use app\common\Category;
use app\common\OperateConfig;
use app\portal\model\CUserModel;
use app\portalAdmin\model\CMsgModel;

class IndexController extends HomeBaseController{

    public function index(){
        
        if(session('?user_info','','live')){
            $msgDb = new CMsgModel();
            $user_info = session('user_info','','live');
            $news = $msgDb -> getNews($user_info['id']);
            $this -> assign('news',$news);
        }

        return $this->fetch();
    }

    //通知处理
    public function MsgOpeate(){
        $msg_type = $this -> request -> param('msg_type','','intval');
        
    }

    public function MsgFocusOpeate(){

    }

    //以纯动态静态页：
    public function ActionIndex(){
        return $this -> fetch();
    }

    //我的帖子
    public function myArticle(){
        if(getLiveUser()){
            $this -> assign("user_id",getLiveUser()['id']);
        }else{
            $this -> assign("user_id",null);
        }
        return $this -> fetch();
    }
    //我的评论
    public function myComment(){
        if(getLiveUser()){
            $this -> assign("user_id",getLiveUser()['id']);
        }else{
            $this -> assign("user_id",null);
        }
        return $this -> fetch();
    }
    //我的点赞
    public function myLike(){
        if(getLiveUser()){
            $this -> assign("user_id",getLiveUser()['id']);
        }else{
            $this -> assign("user_id",null);
        }
        return $this -> fetch();
    }
    //我的关注
    public function myFollow(){
        if(getLiveUser()){
            $this -> assign("user_id",getLiveUser()['id']);
        }else{
            $this -> assign("user_id",null);
        }
        return $this -> fetch();
    }

    //生活百科静态页：
    public function encyIndex(){
        return $this -> fetch();
    }
    //页面待开发
    public function unblock(){
        return $this -> fetch();
    }
    //查看帖子
    public function checkArticle(){
        $this -> assign("user_id",input('id'));
        $this -> assign("user_nickname",input('user_nickname'));
        return $this -> fetch();
    }

    public function getEncList(){
        $root = "./upload/live/生活百科/";
        $dir = $this -> request -> param('type');
        $path =$root.$dir;

        $path = iconv("utf-8","gbk",$path);
        $fileList = scandir($path);
        unset($fileList[0]);
        unset($fileList[1]);
        
        foreach($fileList as $k => $v){
            $data[] = ['name'=>iconv("gbk","utf-8", explode('.',$v)[0]),'file'=>iconv("gbk","utf-8",$v),'date'=>date("Y-m-d H:i:s", filemtime($path.'/'.$v))];
        }

        echo json_encode($data);

    }

    public function home(){
        
        $operateConfig = new OperateConfig();
        $this -> assign("ConfigUI",$operateConfig -> getConfig());
        return $this->fetch();
    }

    public function ysDynamic(){
        return $this->fetch();
    }

    public function bbs(){
        if(getLiveUser()){
            $this -> assign("user_id",getLiveUser()['id']);
        }else{
            $this -> assign("user_id",null);
        }
        return $this -> fetch();
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

            $oldFloder = './upload/portal/ueditor/img_temp/'.$tmp_arr[6];
            $newFloder = './upload/portal/ueditor/img/'.$tmp_arr[6];
            if(!is_dir($newFloder)){
                mkdir($newFloder,0777);
            }

            $img_name = substr($tmp_arr[7],0,strlen($tmp_arr[7])-1);
           
            if(copy($oldFloder."/".$img_name,$newFloder."/".$img_name)){
                unlink($oldFloder."/".$img_name);
                $newimg=str_replace('/img_temp/','/img/',$ueditor_img);
                $data['content']=str_replace('/img_temp/','/img/',$data['content']);
            }
        }

        $data['title'] = input("param.title");
        $data['user_id'] = getLiveUser()['id'];
        $data['status'] = 0;
        $data['date'] = time();

        $result = Db::name('CArticle') -> insert($data);

        if($result){
            return 1001;
        }else{
            return 1002;
        }
    }

    public function getArticleByUserId(){
        $sortType = input("param.sortType");
        $cur_page = input("param.page") ? input("param.page") : 1;
        $keyword = input("param.keyword");
        $user_id = input("param.user_id");
        $num = 10;
        $where = "";
        if($sortType == 'time'){
            $sortStr = "ORDER BY DATE DESC";
        }else if($sortType == 'view'){
            $sortStr = "ORDER BY view_count DESC";
        }
        if($user_id == getLiveUser()['id']){
            $where .= "AND at.status<>2";
        }else{
            $where .= "AND at.status=1";
        }
        
        $list_total = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count,(SELECT COUNT(*) FROM share_c_article_like scal WHERE scal.article_id=at.id) AS like_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%$keyword%' $where AND user_id=$user_id $sortStr");

        $list = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count,(SELECT COUNT(*) FROM share_c_article_like scal WHERE scal.article_id=at.id) AS like_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%$keyword%' $where AND user_id=$user_id $sortStr limit ".($cur_page-1)*$num .", $num");

        if(session("user_info",'','live') != null){

            $user_info = session('user_info','','live');
            $userLikeList = Db::name("CArticleLike") -> where('user_id',$user_info['id']) -> column("article_id");

            foreach($list as $k => $v){
                $list[$k]['like'] = in_array($v['id'],$userLikeList) ? true : false;
            }
            
        }

        $currentTime = time();

        foreach($list as $k => $v){
            $offsetTime = $currentTime - intval($v['date']);
            
            if($offsetTime / 60 / 60 / 24 > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60 / 60 /24)).'天前 '.date("Y-m-d H:i:s",intval($v['date'])).'';
                continue;
            }

            if($offsetTime / 60 / 60 > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60 / 60)).'小时前';
                continue;
            }

            if($offsetTime / 60  > 3){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60)).'分钟前';
            }else{
                $list[$k]['offsetTime'] = "刚刚";
            }


        }

        $data['list'] = $list;
        $data['page_size'] =  $num;
        $data['total'] =  count($list_total);
        return json($data);
    }

    public function getArticle(){
        $sortType = input("param.sortType");
        $cur_page = input("param.page") ? input("param.page") : 1;
        $keyword = input("param.keyword") ? input("param.keyword") : '';
        $num = 10;
        
        if($sortType == 'time'){
            $sortStr = "ORDER BY DATE DESC";
        }else if($sortType == 'view'){
            $sortStr = "ORDER BY view_count DESC";
        }
        // $query = Db::name("CArticle") -> alias('at') -> join("CUser u","at.user_id = u.id","LEFT") -> where('at.title','like','%'.$keyword.'%') -> order("date desc");

        $list = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count,(SELECT COUNT(*) FROM share_c_article_like scal WHERE scal.article_id=at.id) AS like_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE CONCAT_WS('',at.title,u.user_nickname) LIKE '%$keyword%' AND at.status=1 $sortStr limit ".($cur_page-1)*$num .", $num");

        $list_total = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count,(SELECT COUNT(*) FROM share_c_article_like scal WHERE scal.article_id=at.id) AS like_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE CONCAT_WS('',at.title,u.user_nickname) LIKE '%$keyword%' AND at.status=1 $sortStr");

        // $list = $query -> limit(($cur_page-1)*$num , $num) -> field("at.*,u.user_name,u.avatar,u.user_nickname") -> select() -> toArray();
        //增加已点赞状态值
        if(session("user_info",'','live') != null){

            $user_info = session('user_info','','live');
            $userLikeList = Db::name("CArticleLike") -> where('user_id',$user_info['id']) -> column("article_id");

            foreach($list as $k => $v){
                $list[$k]['like'] = in_array($v['id'],$userLikeList) ? true : false;
            }
            
        }

        $currentTime = time();

        foreach($list as $k => $v){
            $list[$k]['avatar_show'] = false;

            $offsetTime = $currentTime - intval($v['date']);
            
            if($offsetTime / 60 / 60 / 24 > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60 / 60 /24)).'天前 '.date("Y-m-d H:i:s",intval($v['date'])).'';
                continue;
            }

            if($offsetTime / 60 / 60 > 1){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60 / 60)).'小时前';
                continue;
            }

            if($offsetTime / 60  > 3){
                $list[$k]['offsetTime'] = floor(($offsetTime / 60)).'分钟前';
            }else{
                $list[$k]['offsetTime'] = "刚刚";
            }
        }

        $data['list'] = $list;
        $data['page_size'] =  $num;
        $data['total'] =  count($list_total);
        return json($data);
    }

    public function giveLike(){
        $msgDb = new CMsgModel();

        if(session("user_info",'','live') != null){
            $data['article_id'] = input("article_id");
            $data['user_id'] = getLiveUser()['id'];
           
            $likeCount = Db::name('CArticleLike') ->where($data) -> count();

            if($likeCount > 0){
                Db::name('CArticleLike') ->where($data) -> delete();

                $info = Db::name('CArticle')  -> field('id,user_id') -> find($data['article_id']);
                $user_id = $info['user_id'];

                $ids = $msgDb -> where(['user_id'=>$user_id,'article_id'=>$data['article_id'],'msg_type'=>4]) -> column('id');
                $rs = $msgDb -> where('id',$ids[0]) -> delete();

                return 1002;
            }else{
                $data['date'] = date("Y-m-d H:i:s");
                Db::name('CArticleLike') -> insert($data);
                $msgDb -> saveMsg($data['article_id'],4);
                return 1001;
            }

        }else{
            return 1004;
        }

    }
    public function getLikeListByUserId(){
        $user_id = getLiveUser()['id'];
        $cur_page = $this -> request -> param('page',0,'intval');
        $num = 5;


        $query = Db::name("CArticleLike") -> alias('a')
        -> join('CArticle b','a.article_id=b.id','LEFT')
         -> join('CUser c','c.id=a.user_id','LEFT')
         -> where(array('b.user_id'=>$user_id));

        $list = $query -> order("a.id desc")
         -> field(' a.id,b.id article_id,b.title,b.user_id article_user_id,c.id user_id,c.user_nickname')
         -> limit(($cur_page-1)*$num,$num)
         -> select() -> toArray();

        $data['list'] = $list;
        $data['total'] = $query -> count();
        $data['page_size'] = $num;
        return json($data);
    }

    public function getAvatarInfo(){
        $user_id = input("user_id");
        $status = "";
        if(session("user_info",'','live') != null){
            $id = getLiveUser()['id'];
            $status = "(SELECT COUNT(id) FROM share_c_follow scf WHERE scf.user_id=$id and scf.follow_id=$user_id) AS a_status,
            (SELECT COUNT(id) FROM share_c_follow scf WHERE scf.user_id=$user_id and scf.follow_id=$id) AS b_status,";
        }

        $list = Db::query("SELECT u.id,u.user_name,u.avatar,u.user_nickname,
        (SELECT COUNT(id) FROM share_c_follow scf WHERE scf.follow_id=u.id) AS be_follow_count,
        $status
        (SELECT COUNT(*) FROM share_c_article sca WHERE sca.user_id=u.id AND sca.status=1) AS article_count
        FROM share_c_user u
        WHERE u.id=$user_id");

        return json($list[0]);

    }

    //关注和取消关注
    public function followUser(){
        $data['user_id'] = getLiveUser()['id'];
        $data['follow_id'] = input("id");
        $data['top'] = 0;

        $count = Db::name('CFollow') -> where($data) -> count();

        if($count == 0){
            $res = Db::name('CFollow') -> insert($data);
        }else{
            return 1003;
        }

        if($res){
            $existMsg = Db::name('CFocusMsg') -> where(['user_id'=>$data['follow_id'],'action_user_id'=>$data['user_id']]) -> count();
            if(!$existMsg){
                Db::name('CFocusMsg') -> insert(['user_id'=>$data['follow_id'],'action_user_id'=>$data['user_id']]);
            }
            return 1001;
        }else{
            return 1002; 
        }

    }
    public function notFollowUser(){
        $data['user_id'] = getLiveUser()['id'];
        $data['follow_id'] = input("id");


        $res = Db::name('CFollow') -> where($data) -> delete();

        $existMsg = Db::name('CFocusMsg') -> where(['user_id'=>$data['user_id'],'follow_id'=>$data['follow_id']]) -> count();
        if($existMsg){
            Db::name('CFocusMsg') -> where(['user_id'=>$data['user_id'],'follow_id'=>$data['follow_id']]) -> delete();
        }

        if($res){
            return 1001;
        }else{
            return 1002; 
        }

    }
    public function getFollowListByUserId(){
        $user_id = getLiveUser()['id'];
        $keyword = input('keyword');
        $type = input('type');
        $cur_page = input('page');
        $num = 5;


        if($type=="myFollow"){
            $where[] = ['a.user_id','=',$user_id];
            $where[] = ['c.user_nickname|c.user_name','like',"%$keyword%"];
        }else{
            $where[] = ['a.follow_id','=',$user_id];
            $where[] = ['b.user_nickname|c.user_name','like',"%$keyword%"];
        }

        $query = Db::name("CFollow") -> alias('a') 
        -> join('CUser b','b.id=a.user_id','LEFT')
        -> join('CUser c','c.id=a.follow_id','LEFT')
        -> where($where);

        $list = $query
        -> field('a.id,a.top,b.id user_id,b.user_nickname nickname,b.avatar,c.id follow_id,c.user_nickname follow_nickname,c.avatar follow_avatar')
        -> limit(($cur_page-1)*$num,$num)
        -> order(['a.top'=>'desc','a.id'=>'desc'])
        -> select() -> toArray();

        foreach($list as $k => $v){
            $list[$k]['avatar_show'] = false;
        }

        $data['count'] = Db::name('CFollow') -> where([['user_id','=',$user_id]]) -> count();
        $data['followCount'] = Db::name('CFollow') -> where([['follow_id','=',$user_id]]) -> count();
        $data['list'] = $list;
        $data['total'] = $query -> count();
        $data['page_size'] = $num;
        return json($data);

    }
    public function topUser(){
        $data['id'] = input("id");
        $data['top'] = input("top");

        $res = Db::name('CFollow') -> update($data);

        if($res){
            return 1001;
        }else{
            return 1002; 
        }

    }

    public function delArticle(){
        $data['id'] = input("id");

        $res = Db::name('CArticle') ->where($data) -> update(['status' => 2]);
        
        if($res){
            return 1001;
        }else{
            return 1002;
        }
    }

    public function articleDet(){
        $id = $this -> request -> param('id',0,'intval');
        // $data = Db::name('CArticle') -> alias('a') -> join('CUser u','a.user_id = u.id','LEFT') -> where('a.id',$id) -> field('a.*,u.user_name,u.user_nickname') -> select();
        $data = Db::query("SELECT at.*,u.user_name,u.avatar,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count,(SELECT COUNT(*) FROM share_c_article_like scal WHERE scal.article_id=at.id) AS like_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
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
        $msgDb = new CMsgModel();
        $data = $this -> request -> param();
        $data['date'] = date("Y-m-d H:i:s");
        $data['user_id'] = getLiveUser()['id'];

        if(!trim($data['comment'])){
            $error['error'] = 1001;
            $error['msg'] = "评论内容不能为空";
            return json($error);
        }

        $insert = Db::name("CArticleComment") -> insert($data);

        if($insert){
            $msgDb -> saveMsg($data['article_id'],3);
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

        $list = $query -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname,u.avatar') ->limit(($cur_page-1)*$num,$num) -> select() -> toArray();

        foreach($list as $k => $v){

            $query2 = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id', 'LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where(array('ac.article_id'=>$article_id,'ac.top_id'=>$v['id']));

            $list2 = $query2 -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname,u.avatar') -> select() -> toArray();
            if(count($list2)>0)
                $list[$k]['ctree'] = $list2;
                $list[$k]['total'] = $query2 -> count();
        }

        $data['list'] = $list;
        $data['page_size'] = $num;
        $data['total'] = $query -> count();
        return json($data);
    }

    public function getComListById(){
        $comment_id = $this -> request -> param('comment_id',0,'intval');

        $list = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id','LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where('ac.id',$comment_id) -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname,u.avatar') -> find();

        $query2 = Db::name("CArticleComment") -> alias('ac') -> join('CUser u','ac.user_id = u.id','LEFT') -> join('CUser u2','ac.fuser_id = u2.id', 'LEFT') -> join('CArticle a','ac.article_id = a.id','LEFT') -> where('ac.top_id',$comment_id);

        $list2 = $query2 -> order("ac.date desc") -> field('ac.*,u.user_name,u.user_nickname hname,u2.user_nickname fname,u.avatar') -> select() -> toArray();

        if(count($list2)>0){
            $list['ctree'] = $list2;
            $list['subTotal'] = $query2 -> count();
        }

        return json($list);
    }

    public function getComListByUserId(){
        $user_id = getLiveUser()['id'];
        $cur_page = $this -> request -> param('page',0,'intval');
        $num = 5;


        $query = Db::name("CArticle") -> alias('a')
         -> join('CUser b','a.user_id = b.id','LEFT')
         -> join('CArticleComment c','a.id=c.article_id','LEFT')
         -> join('CUser d','d.id=c.user_id','LEFT')
         -> join('CUser e','e.id=c.fuser_id','LEFT')
         -> where(array('b.id'=>$user_id));

        $list = $query -> order("c.date desc")
         -> field('a.id article_id,a.title,a.user_id article_user_id,b.user_nickname article_user,c.date,c.id comment_id,c.comment,c.user_id user_id,d.user_nickname comment_user,e.id fuser_id,e.user_nickname fcomment_user,
         c.top_id')
         -> limit(($cur_page-1)*$num,$num)
         -> select() -> toArray();

        $data['list'] = $list;
        $data['total'] = $query -> count();
        $data['page_size'] = $num;
        return json($data);
    }

    public function addViewCount(){
        $article_id = $this -> request -> param('article_id',0,'intval');
        
        $res = Db::name('CArticle') -> WHERE('id',$article_id) -> setInc("view_count",1);
    }

    public function getUserScore(){
        $page = $this -> request -> param('page');
        $size = $this -> request -> param('size');
        $user_id = $this -> request -> param('user_id')?$this -> request -> param('user_id'):'';

        if($user_id){
            $where = "WHERE user_id LIKE '%$user_id%'";
        }else{
            $where = "";
        }

        // $view = Db::table('vw_c_view_total') -> field("(@i:=@i+1) i") -> select();
        $res['total'] = count(Db::query("SELECT rn,view_count_total,STATUS,user_id,user_name,avatar,user_nickname FROM vw_c_view_total,(SELECT @sort:=0) AS s $where"));

        $res['list'] = Db::query("SELECT rn,view_count_total,STATUS,user_id,user_name,avatar,user_nickname FROM vw_c_view_total,(SELECT @sort:=0) AS s $where LIMIT ".($page-1)*$size.",$size");

        return json($res);
    }

    public function getUserScoreById(){
        $user_id = $this -> request -> param('user_id')?$this -> request -> param('user_id'):'';

        $res = Db::query("SELECT rn,view_count_total,STATUS,user_id,user_name,avatar,user_nickname FROM vw_c_view_total,(SELECT @sort:=0) AS s WHERE user_id = '$user_id'");

        return json($res);
    }
    
    public function login(){
        return $this -> fetch();
    }

    public function regist(){
        return $this -> fetch();
    }

    public function register(){
        $userDb  = new CUserModel();
        $user = input("post.");
    
        if(!$user['user_name']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$user['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        if(!$user['mobile'])  return json(array('code'=>0,'msg'=>'手机号码不能为空'));

        $existedMb = Db::name('CUser') -> where('mobile',$user['mobile']) -> count();

        if($existedMb) return json(array('code'=>0,'msg'=>'手机号已存在，请重新输入'));


        $res = $userDb -> registerVerifyLive($user);

        if($res && $res > 0){
            return json(array('code'=>1,'msg'=>'注册信息已发送至管理员，请静候审批。'));
        }else{
            if($res == -1){
                return json(array('code'=>0,'msg'=>'注册失败，用户名已存在'));
            }
            return json(array('code'=>0,'msg'=>'注册失败'));
        }
    }

    public function verify(){
        $userDb  = new CUserModel();

        $query = input("post.");
    
        if(!$query['user']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$query['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        $info = $userDb -> loginVerifyLive($query['user'], $query['pwd']);  

        if(0 === $info)     return json(array('code'=>0,'msg'=>'账号不存在'));
        if(-1 === $info)    return json(array('code'=>0,'msg'=>'账号被禁用'));
        if(-2 === $info)    return json(array('code'=>0,'msg'=>'密码不正确'));

        if(1 == $info){
            //$user['user_id'] = getUser('id');
            //$user['last_logout_time'] = null;
            //$user['login_time'] = date("Y-m-d H:i:s");
            //$login_id = Db::name("c_user_login_total") -> insertGetId($user);

            //setUser('login_id',$login_id);
            //$this -> online();
            return json(array('code'=>1,'msg'=>'登录成功','url'=>'index'));
        }

    }

    public function logout(){
        session('user_info',null,'live');
        $this -> redirect("index");
    }

    public function editUser(){
        return $this -> fetch();
    }

    public function editHandle(){
        $param = $this -> request -> param();
        $file = $this -> request -> file("avatarFile");

        $userModel = new CUserModel();
        if($param['editPwd'] == "true"){
            $param['pwd'] = MD5($param['pwd']);
        }
        unset($param['editPwd']);

        if($file){
            $info = $file->move('upload/avatar');
            if($info){
                $param['avatar'] = 'upload/avatar/'.str_replace("\\","/",$info->getSaveName());
            }else{
                // 上传失败获取错误信息
                $message['msg'] = "头像上传失败！";
                $message['status'] = 1003;
                return json($message);
            }
        }

        $res = Db::name("c_user") -> update($param);

        if($res){
            //$userModel-> setUserSessionById($param['id']);
            $message['msg'] = "修改个人信息成功！,请重新登录";
            $message['status'] = 1001;
            return json($message);
        }else{
            $message['msg'] = "修改个人信息失败！！！";
            $message['status'] = 1002;
            return json($message);
        }
    }
    //已通过
    public function passArt(){
        return $this -> fetch();
    }

    //已删除
    public function deledArt(){
        return $this -> fetch();
    }

    //新评论
    public function newComment(){
        return $this -> fetch();
    }
    //新点赞
    public function newLike(){
        return $this -> fetch();
    }
    //新关注
    public function newFollow(){
        return $this -> fetch();
    }
}
