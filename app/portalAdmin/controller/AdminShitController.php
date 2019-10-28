<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\AdminBaseController;

/**
 * Class AdminShitController
 * @package app\portalAdmin\controller
 *
 * @adminMenuRoot(
 *     'name'   =>'内部交流',
 *     'action' =>'default',
 *     'parent' =>'',
 *     'display'=> true,
 *     'order'  => 999,
 *     'icon'   =>'code-fork',
 *     'remark' =>'内部交流'
 * )
 *
 */

class AdminShitController extends AdminBaseController{

    /**
     * 需求列表
     * @adminMenu(
     *     'name'   => '需求列表',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '需求列表',
     *     'param'  => ''
     * )
     */
    public function ShitList(){
        //dump(cmf_get_current_admin_id());
        $list = Db::name('Shit') -> select();
        $this -> assign('list',$list);
        return $this->fetch();
    }
    
    /**
     * 新增需求
     * @adminMenu(
     *     'name'   => '新增需求',
     *     'parent' => 'ShitList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '新增需求',
     *     'param'  => ''
     * )
     */
    public function addShit(){
        $data['user_id'] = cmf_get_current_admin_id();
        $data['desc'] = $this -> request -> param("desc");
        $data['date'] = date("Y-m-d H:i:s");
        $affectNum = Db::name("Shit") -> insert($data);
        echo $affectNum;
    }

    /**
     * 获取需求列表
     * @adminMenu(
     *     'name'   => '获取需求列表',
     *     'parent' => 'ShitList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取需求列表',
     *     'param'  => ''
     * )
     */
    public function getList(){
        
        $data = Db::name("Shit") -> alias('s')  -> join("share_user u","s.user_id = u.id","LEFT") -> field("s.*,u.user_login as user_name") -> order("date desc") -> select();
        echo json_encode($data);
    }

    /**
     * 修改需求
     * @adminMenu(
     *     'name'   => '修改需求',
     *     'parent' => 'ShitList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '修改需求',
     *     'param'  => ''
     * )
     */
    public function editShit(){
        $data = $this -> request -> param();

        if(isset($data['status'])){
            if(cmf_get_current_admin_id() != 1){
                echo 0;
                exit;
            }

            unset($data['desc']);
            if($data['status'] == 2){
                $data['complete_date'] = date("Y-m-d H:i:s");
            }else{
                $data['complete_date'] = null;
            }
        }

        if(isset($data['desc'])){
            $row = Db::name("Shit") -> find($data['id']);
            $old_num = intval($row['edit_num']);
            $data['edit_num'] = $old_num+1;
        }

        $affectRow = Db::name("Shit") -> update($data);
        echo $affectRow;
    }


     /**
     * 删除需求
     * @adminMenu(
     *     'name'   => '删除需求',
     *     'parent' => 'ShitList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '删除需求',
     *     'param'  => ''
     * )
     */
    public function delShit(){
        $id =$this -> request -> param('id','','intval');
        $affectRow = Db::name("Shit") -> delete($id);
        echo $affectRow;
    }

    
}