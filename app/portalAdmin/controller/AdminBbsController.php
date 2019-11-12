<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\AdminBaseController;

/**
 * Class AdminBbsController
 * @package app\portalAdmin\controller
 *
 * @adminMenuRoot(
 *     'name'   =>'论坛管理',
 *     'action' =>'default',
 *     'parent' =>'',
 *     'display'=> true,
 *     'order'  => 1,
 *     'icon'   =>'code-fork',
 *     'remark' =>'论坛管理'
 * )
 *
 */

class AdminBbsController extends AdminBaseController{
    
    /**
     * 文章管理
     * @adminMenu(
     *     'name'   => '文章管理',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '文章管理',
     *     'param'  => ''
     * )
     */
    public function articleManager(){
        return $this->fetch();
    }

    /**
     * 评论管理
     * @adminMenu(
     *     'name'   => '评论管理',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '评论管理',
     *     'param'  => ''
     * )
     */
    public function commentManager(){
        return $this->fetch();
    }

     /**
     * 获取文章列表
     * @adminMenu(
     *     'name'   => '获取文章列表',
     *     'parent' => 'articleManager',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取文章列表',
     *     'param'  => ''
     * )
     */
    public function getAllArticleData(){
        $data = $this -> request -> param();

        $list_total = Db::query("SELECT at.id,at.title,at.view_count,at.status,at.date,u.user_name,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%".$data['title']."%' ORDER BY DATE DESC");

        $list = Db::query("SELECT at.id,at.title,at.view_count,at.status,at.date,u.user_name,u.user_nickname,(SELECT COUNT(id) FROM share_c_article_comment scac WHERE scac.article_id=at.id) AS comment_count FROM share_c_article AT LEFT JOIN share_c_user u ON at.user_id=u.id
        WHERE at.title LIKE '%".$data['title']."%' ORDER BY DATE DESC limit ".($data['page']-1)*$data['pageSize'] .",".$data['pageSize']);

        foreach($list as $k => $v){
            $list[$k]['date'] = date("Y-m-d H:i:s", $v['date']);
        }
        

        $res['list'] = $list;
        $res['total'] =  count($list_total);
        return json($res);
    }
    /**
     * 获取评论列表
     * @adminMenu(
     *     'name'   => '获取评论列表',
     *     'parent' => 'articleManager',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取评论列表',
     *     'param'  => ''
     * )
     */
    public function getAllCommentData(){
        $data = $this -> request -> param();

        $list = Db::query("SELECT * FROM share_c_article_comment ORDER BY DATE DESC limit ".($data['page']-1)*$data['pageSize'] .",".$data['pageSize']);
        

        $res['list'] = $list;
        $res['total'] =  count($list);
        return json($res);
    }

    /**
     * 获取特定文章
     * @adminMenu(
     *     'name'   => '获取特定文章',
     *     'parent' => 'articleManager',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取特定文章',
     *     'param'  => ''
     * )
     */
    public function getArtilceById(){
        $id = $this -> request -> param('id',0,'intval');
        $data = Db::name('CArticle') -> alias('a') -> join('CUser u','a.user_id = u.id','LEFT') -> where('a.id',$id) -> field('a.*,u.user_name,u.user_nickname') -> find();
        $content = str_replace('\\','',trim($data['content'],'"'));

        $data['content'] = $content;
        return json($data);
    }

    /**
     * 更改文章显示状态
     * @adminMenu(
     *     'name'   => '更改文章显示状态',
     *     'parent' => 'articleManager',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '更改文章显示状态',
     *     'param'  => ''
     * )
     */
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