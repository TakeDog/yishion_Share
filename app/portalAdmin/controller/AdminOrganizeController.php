<?php
namespace app\portalAdmin\controller;

use think\Db;
use cmf\controller\AdminBaseController;
use app\common\Category;
/**
 * Class OrganizeController
 * @package app\portalAdmin\controller
 *
 * @adminMenuRoot(
 *     'name'   =>'组织架构',
 *     'action' =>'default',
 *     'parent' =>'',
 *     'display'=> true,
 *     'order'  => 1,
 *     'icon'   =>'code-fork',
 *     'remark' =>'组织架构'
 * )
 *
 */

class AdminOrganizeController extends AdminBaseController{
    /**
     * 组织架构首页
     * @adminMenu(
     *     'name'   => '架构展示',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '架构展示',
     *     'param'  => ''
     * )
     */
    public function index(){
        $tree_data = Db::name("dept") -> select();
        $category = new Category();
        $tree = $category -> unlimitedForLayer($tree_data);
        $this -> assign('tree',json_encode($tree));
        return $this -> fetch();
    }
    /**
     * 组织架构首页
     * @adminMenu(
     *     'name'   => '添加部门',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '添加部门',
     *     'param'  => ''
     * )
     */
    public function append(){
        $request = $this -> request -> param();
        $insertId = Db::name("dept") -> insert($request);
        echo $insertId ? 1 : 0;
    }
    /**
     * 组织架构首页
     * @adminMenu(
     *     'name'   => '删除',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '删除',
     *     'param'  => ''
     * )
     */
    public function remove(){
        $error = [];
        $id = $this -> request -> param('id');

        $count = Db::name("dept") -> where('pid',$id) -> count();
        
        if($count){
            $error['code'] = 1;
            $error['msg'] = "该部门含有子部门，无法删除，请删除子部门后重试。";
            echo json_encode($error);
            exit;
        }

        $delNum = Db::name("dept") -> delete($id);

        if($delNum){
            $error['code'] = 0;
            $error['msg'] = "删除成功";
            echo json_encode($error);
        }else{
            $error['code'] = 2;
            $error['msg'] = "删除失败";
            echo json_encode($error);
        }
    }
}

?>