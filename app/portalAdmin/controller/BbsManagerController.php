<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;


class BbsManagerController extends HomeBaseController{
    
    public function articleManager(){
        return $this->fetch();
    }

    public function commentManager(){
        return $this->fetch();
    }

    public function getAllArticleData(){
        $data = $this -> request -> param();

        $list = Db::query("SELECT at.id,at.title,at.view_count,at.status,at.date,u.user_name,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%".$data['title']."%' ORDER BY DATE DESC limit ".($data['page']-1)*$data['pageSize'] .",".$data['pageSize']);

        foreach($list as $k => $v){
            $list[$k]['date'] = date("Y-m-d H:i:s", $v['date']);
        }
        

        $res['list'] = $list;
        $res['total'] =  count($list);
        return json($res);
    }

    public function getAllCommentData(){
        $data = $this -> request -> param();

        $list = Db::query("SELECT * FROM share_c_article_comment ORDER BY DATE DESC limit ".($data['page']-1)*$data['pageSize'] .",".$data['pageSize']);
        

        $res['list'] = $list;
        $res['total'] =  count($list);
        return json($res);
    }

    public function getArtilceById(){
        $id = $this -> request -> param('id',0,'intval');
        $data = Db::name('CArticle') -> alias('a') -> join('CUser u','a.user_id = u.id','LEFT') -> where('a.id',$id) -> field('a.*,u.user_name,u.user_nickname') -> find();
        $content = str_replace('\\','',trim($data['content'],'"'));

        $data['content'] = $content;
        return json($data);
    }

    public function changeStatus(){
        $id = $this -> request -> param('id',0,'intval');
        $status = $this -> request -> param('status',0,'intval');
        $res = Db::name('CArticle') -> where('id',$id) -> update(['status'=>$status]);

        if($res > 0){
            return 1001;
        }else{
            return 1002;
        }
    }
}