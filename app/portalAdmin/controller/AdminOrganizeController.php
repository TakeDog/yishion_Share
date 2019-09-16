<?php
namespace app\portalAdmin\controller;

use think\Db;
use cmf\controller\AdminBaseController;
use app\common\Category;
use think\db\Query;
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
        return $this -> fetch();
    }

    /**
     * @adminMenu(
     *     'name'   => '获取树状部门数据',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '获取树状部门数据',
     *     'param'  => ''
     * )
     */
    public function getTree(){
        $tree_data = Db::name("dept") -> order('id') ->select();
        $category = new Category();
        $tree = $category -> unlimitedForLayer($tree_data);
        echo json_encode($tree);
    }


    /**
     * @adminMenu(
     *     'name'   => '获取所有部门选项',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '获取所有部门选项',
     *     'param'  => ''
     * )
     */
    public function getOption(){
        $tree_data = Db::name("dept") -> select();
        $catetory = new Category();
        echo json_encode($catetory -> unlimitedForLevel($tree_data,'|—'));
    }

    /**
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
     * @adminMenu(
     *     'name'   => '删除部门',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '删除部门',
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

        $exist = Db::name("CUser") -> where('dept_id',$id) -> count();

        if($exist){
            $error['code'] = 1;
            $error['msg'] = "该部门含有用户，请删除所有用户后重试";
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

    /**
     * @adminMenu(
     *     'name'   => '修改部门名称',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '修改部门名称',
     *     'param'  => ''
     * )
     */
    public function edit(){
        $input = $this -> request -> param();
        $updateNum = Db::name("dept")->update($input);
        echo $updateNum ? 1 : 0;
    }

    /**
     * @adminMenu(
     *     'name'   => '修改上级部门',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '修改上级部门',
     *     'param'  => ''
     * )
     */
    public function setSup(){
        $input = $this -> request -> param();
        $update_num = DB::name("dept") -> where('id',$input['edit_id']) -> update(['pid'=>$input['sup_id']]);
        echo $update_num ? 1 : 0;
    }

    /**
     * @adminMenu(
     *     'name'   => '获取用户数据',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '获取用户数据',
     *     'param'  => ''
     * )
     */
    public function getMain(){
        $input = $this -> request -> param();
        $num = 17;
        $page = $input['page'];

        $where = [];

        $likeField = 'u.real_name|u.user_name|u.user_nickname';
        $keyword = empty($input['keyword']) ? '' : $input['keyword'];

        if(!empty($input['dept_id'])){
            $where['u.dept_id'] = $input['dept_id'];
        }

        $main = Db::name("CUser") -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> where($where) -> whereLike($likeField,'%'.$keyword.'%')  -> field("u.id,u.user_name,u.user_nickname,u.avatar,u.user_status,u.super,u.user_email,u.mobile,u.create_time,u.real_name,u.jop,d.name as dept") -> limit(($page-1) * $num,$num) -> select();

        $count = Db::name("CUser") -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> where($where) -> whereLike($likeField,'%'.$keyword.'%')  -> count();

        $data['main'] = $main;
        $data['total'] = $count;
        $data['size'] = $num;

        echo json_encode($data);
    }

    /**
     * @adminMenu(
     *     'name'   => '删除用户',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '删除用户',
     *     'param'  => ''
     * )
     */
    public function delUser(){
        $user_id = $this -> request -> param('user_id');
        $delNum = Db::name("CUser") -> delete($user_id);
        echo $delNum ? 1 : 0;
    }

    /**
     * @adminMenu(
     *     'name'   => '更改用户部门',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '更改用户部门',
     *     'param'  => ''
     * )
     */
    public function changeDept(){
        $input = $this -> request -> param();
        $affect = Db::name("CUser") -> update(['id'=>$input['user_id'],'dept_id'=>$input['dept_id']]);
        echo $affect ? 1 : 0;
    }


    /**
     * @adminMenu(
     *     'name'   => '上传测试',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1000,
     *     'icon'   => '',
     *     'remark' => '上传测试',
     *     'param'  => ''
     * )
     */
    public function testUpload(){
        return $this -> fetch();
    }
    
    public function handlePost(){
        $files = request()->file('my_files');
        foreach($files as $file){
            // 移动到框架应用根目录/public/uploads/ 目录下
            $info = $file->move('upload/portal/workInfo');
            if($info){
                // 成功上传后 获取上传信息
                // 输出 jpg
                echo $info->getExtension(); 
                // 输出 42a79759f284b767dfcb2a0197904287.jpg
                echo $info->getFilename(); 
            }else{
                // 上传失败获取错误信息
                echo $file->getError();
            }    
        }
    }

}

?>