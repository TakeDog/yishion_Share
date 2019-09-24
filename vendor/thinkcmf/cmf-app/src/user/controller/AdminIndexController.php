<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: Powerless < wzxaini9@gmail.com>
// +----------------------------------------------------------------------

namespace app\user\controller;

use cmf\controller\AdminBaseController;
use think\Db;
use think\db\Query;
use tree\Tree;
use app\user\model\CActionModel;
/**
 * Class AdminIndexController
 * @package app\user\controller
 *
 * @adminMenuRoot(
 *     'name'   =>'用户管理',
 *     'action' =>'default',
 *     'parent' =>'',
 *     'display'=> true,
 *     'order'  => 10,
 *     'icon'   =>'group',
 *     'remark' =>'用户管理'
 * )
 *
 * @adminMenuRoot(
 *     'name'   =>'用户组',
 *     'action' =>'default1',
 *     'parent' =>'user/AdminIndex/default',
 *     'display'=> true,
 *     'order'  => 10000,
 *     'icon'   =>'',
 *     'remark' =>'用户组'
 * )
 */
class AdminIndexController extends AdminBaseController
{

    /**
     * 后台本站用户列表
     * @adminMenu(
     *     'name'   => '本站用户',
     *     'parent' => 'default1',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '本站用户',
     *     'param'  => ''
     * )
     */
    public function index()
    {
        $content = hook_one('user_admin_index_view');
        if (!empty($content)) {
            return $content;
        }

        $list = Db::name('c_user')-> alias('u')
            -> join('c_user_role ur','u.id = ur.user_id','LEFT')
            -> join('c_role r','ur.role_id=r.id','LEFT')
            -> join('job j','u.job_id = j.id','LEFT')
            -> join('dept d','u.dept_id = d.id')
            -> where(function (Query $query) {
                $data = $this->request->param();

                if (!empty($data['uid'])) {
                    $query->where('u.id', intval($data['uid']));
                }

                if (!empty($data['keyword'])) {

                    $keyword = $data['keyword'];
                    $query->where('u.user_name|u.user_nickname|u.user_email|u.mobile', 'like', "%$keyword%");

                }if ( isset($data['user_status']) && $data['user_status'] !== '' ) {

                    $user_status = $data['user_status'];
                    $query->where('u.user_status', $user_status);

                }
            })
            -> field("u.*,GROUP_CONCAT(r.role_name separator ' | ') as role_name,d.name as deptName,j.job as jobName")
            -> group('u.id')
            -> order("u.user_status desc,create_time DESC")
            -> paginate(10);
        // 获取分页显示
        $page = $list->render();

        //$deptDb = new \app\portal\model\DeptModel();
        
        //var_dump($list);

        // foreach($list as $k => $v){
        //     $firstPID = $deptDb -> getFirstP($v['dept_id']);
        //     $deptMsg = $deptDb -> find($firstPID);
        //     $list[$k]['part'] = $deptMsg['name'];
        // }

        $this->assign('list', $list);
        $this->assign('page', $page);
        // 渲染模板输出
        return $this->fetch();
    }

    /**
     * 本站用户拉黑
     * @adminMenu(
     *     'name'   => '本站用户拉黑',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '本站用户拉黑',
     *     'param'  => ''
     * )
     */
    public function ban()
    {
        $id = input('param.id', 0, 'intval');
        if ($id) {
            $result = Db::name("c_user")->where('id',$id)->setField('user_status', 0);
            if ($result) {
                $this->success("会员拉黑成功！", "adminIndex/index");
            } else {
                $this->error('会员拉黑失败,会员不存在,或者是管理员！');
            }
        } else {
            $this->error('数据传入失败！');
        }
    }

    /**
     * 本站用户启用
     * @adminMenu(
     *     'name'   => '本站用户启用',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '本站用户启用',
     *     'param'  => ''
     * )
     */
    public function cancelBan()
    {
        $id = input('param.id', 0, 'intval');
        if ($id) {
            Db::name("c_user")->where('id',$id)->setField('user_status', 1);
            $this->success("会员启用成功！", '');
        } else {
            $this->error('数据传入失败！');
        }
    }

    public function roleEdit(){

        $id = input('param.u_id', 0, 'intval');
        $current_roleIds = Db::name("c_user_role")-> where('user_id',$id) -> column('role_id');
        
        $all_roleIds = Db::name("c_role") -> field('role_name,id') -> select();

        $this -> assign('current_roleIds',$current_roleIds);
        $this -> assign('all_roleIds',$all_roleIds);

        return $this -> fetch();
    }

    /**
     * 本站用户角色管理
     * @adminMenu(
     *     'name'   => '本站用户角色管理',
     *     'parent' => 'index',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '本站用户角色管理',
     *     'param'  => ''
     * )
     */
    public function addRolesPost(){
        $input = $this->request-> param();
        $current_roleId_list = Db::name('c_user_role') -> where('user_id',$input['u_id']) -> column('role_id');

        $u_id = $input['u_id'];

        if(empty($input['role_id'])){
            $this -> error("请至少选择一个角色");
            exit;
        }

        $input_role = $input['role_id'];

        foreach($input_role as $k => $v){
            if(in_array($v,$current_roleId_list)){
                $cur_index = array_search($v,$current_roleId_list);
                unset($input_role[$k]);
                unset($current_roleId_list[$cur_index]);
            }
        }
       
        //如果经过循环之后$input_role不为空，那么可以认为这是需要增加的权限;
        if(!empty($input_role)){
            $addList = array();

            foreach($input_role as $k => $v){
                $addList[$k]['user_id'] = $u_id;
                $addList[$k]['role_id'] = $v;
            }
           
            $add_num = Db::name('c_user_role') -> insertAll($addList);
        }

        //如果经过循环之后$current_roleId_list不为空，那么可以认为这是需要删除的权限;
        if(!empty($current_roleId_list)){
            $del_num = 0;
            foreach($current_roleId_list as $k => $v){

                $del = Db::name("c_user_role") -> where(['user_id'=>$u_id,'role_id'=>$v]) -> delete();

                if($del){$del_num++;}
            }
        }
        if(!empty($input['back']) && $input['back']=='og'){
            $this->success("更改成功", "portalAdmin/AdminOrganize/index");
        }else{
            $this->success("更改成功", "adminIndex/index");
        }
        

    }

     /**
     * 本站用户角色权限管理首页
     * @adminMenu(
     *     'name'   => '用户角色管理',
     *     'parent' => 'default1',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户角色管理',
     *     'param'  => ''
     * )
     */
    public function roleList(){
        $roles = Db::name("c_role") -> select();
        $this -> assign('roles',$roles);
        return $this -> fetch();
    }

    /**
     * 添加用户角色
     * @adminMenu(
     *     'name'   => '添加用户角色',
     *     'parent' => 'roleList',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '添加用户角色',
     *     'param'  => ''
     * )
     */
    public function roleAdd(){
        return $this -> fetch();
    }

    public function roleAddPost(){

        if ($this->request->isPost()) {
            $data   = $this->request->param();
            $result = $this->validate($data, 'role');
            if ($result !== true) {
                // 验证失败 输出错误信息
                $this->error($result);
            } else {
                $data['date'] = date('Y-m-d H:i:s');
                $result = Db::name('c_role')->insert($data);

                if ($result) {
                    $this->success("添加角色成功", url("adminIndex/roleList"));
                } else {
                    $this->error("添加角色失败");
                }

            }
        }

    }

    /**
     * 本站用户角色权限分配
     * @adminMenu(
     *     'name'   => '用户角色权限分配',
     *     'parent' => 'roleList',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户角色权限分配',
     *     'param'  => ''
     * )
     */
    public function authorize(){

        $AuthAccess     = Db::name("CRoleAction");
        $CActionModel = new CActionModel();
        //角色ID
        $roleId = $this->request->param("id", 0, 'intval');
        if (empty($roleId)) {
            $this->error("参数错误！");
        }

        $tree       = new Tree();
        $tree->icon = ['│ ', '├─ ', '└─ '];
        $tree->nbsp = '&nbsp;&nbsp;&nbsp;';

        $result = $CActionModel -> menuCache();

        $newMenus      = [];
        $privilegeData = $AuthAccess 
                        -> alias('ra')
                        -> join('share_c_action ca','ra.action_id = ca.id','LEFT')
                        -> where("ra.role_id", $roleId)
                        -> column("url"); //获取权限表数据

        foreach ($result as $m) {
            $newMenus[$m['id']] = $m;
        }

        foreach ($result as $n => $t) {
            $result[$n]['checked']      = ($this->_isChecked($t, $privilegeData)) ? ' checked' : '';
            $result[$n]['level']        = $this->_getLevel($t['id'], $newMenus);
            $result[$n]['style']        = empty($t['parent_id']) ? '' : 'display:none;';
            $result[$n]['parentIdNode'] = ($t['parent_id']) ? ' class="child-of-node-' . $t['parent_id'] . '"' : '';
        }

        $str = "<tr id='node-\$id'\$parentIdNode  style='\$style'>
                   <td style='padding-left:30px;'>\$spacer<input type='checkbox' name='menuId[]' value='\$id' level='\$level' \$checked onclick='javascript:checknode(this);'> \$name</td>
    			</tr>";
        $tree->init($result);

        $category = $tree->getTree(0, $str);

        $role_field = Db::name("CRole") -> where('id',$roleId) -> column('role_name');
        $this -> assign('role_name',$role_field[0]);
        $this->assign("category", $category);
        $this->assign("roleId", $roleId);
        return $this->fetch();
    }


    /**
     * 用户角色授权提交
     * @adminMenu(
     *     'name'   => '用户角色授权提交',
     *     'parent' => 'roleList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户角色授权提交',
     *     'param'  => ''
     * )
     */
    public function authorizePost(){

        if ($this->request->isPost()) {
            $roleId = $this->request->param("roleId", 0, 'intval');
            if (!$roleId) {
                $this->error("需要授权的角色不存在！");
            }
            if (is_array($this->request->param('menuId/a')) && count($this->request->param('menuId/a')) > 0) {

                Db::name("CRoleAction")->where(["role_id" => $roleId])->delete();

                foreach ($_POST['menuId'] as $menuId) {

                    Db::name("CRoleAction")->insert(["role_id" => $roleId, "action_id" => $menuId]);
                    
                }


                $this->success("授权成功！");
            } else {
                //当没有数据时，清除当前角色授权
                Db::name("authAccess")->where("role_id", $roleId)->delete();
                $this->error("没有接收到数据，执行清除授权成功！");
            }
        }
        
    }


    /**
     * 本站用户角色信息编辑
     * @adminMenu(
     *     'name'   => '用户角色信息编辑',
     *     'parent' => 'roleList',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户角色信息编辑',
     *     'param'  => ''
     * )
     */
    public function editrole(){
        $id = $this -> request -> param('id',0,'intval');
        $data = Db::name("CRole") -> where('id',$id) -> find();
        $this -> assign('data',$data);
        return $this -> fetch();
    }


    /**
     * 用户角色信息编辑提交
     * @adminMenu(
     *     'name'   => '用户角色信息编辑提交',
     *     'parent' => 'roleList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户角色信息编辑提交',
     *     'param'  => ''
     * )
     */
    public function roleEditPost(){

        $id = $this->request->param("id", 0, 'intval');
        
        if ($this->request->isPost()) {
            $data   = $this->request->param();
            $result = $this->validate($data, 'role');
            if ($result !== true) {
                // 验证失败 输出错误信息
                $this->error($result);

            } else {
                if (Db::name('CRole')->update($data) !== false) {
                    $this->success("保存成功！", url('adminIndex/roleList'));
                } else {
                    $this->error("保存失败！");
                }
            }
        }

    }



    /**
     * 删除本站用户角色
     * @adminMenu(
     *     'name'   => '删除本站用户',
     *     'parent' => 'roleList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '删除本站用户',
     *     'param'  => ''
     * )
     */
    public function roledelete(){

        $id = $this->request->param("id", 0, 'intval');
        $count = Db::name('CUserRole')->where('role_id', $id)->count();
        if ($count > 0) {
            $this->error("该角色已经有用户！不允许删除");
        } else {
            $status = Db::name('CRole')->delete($id);
            if (!empty($status)) {
                $this->success("删除成功！", url('adminIndex/roleList'));
            } else {
                $this->error("删除失败！");
            }
        }

    }

    

    /**
     * 检查指定菜单是否有权限
     * @param array $menu menu表中数组
     * @param       $privData
     * @return bool
     */
    private function _isChecked($menu, $privData)
    {
        $name   = $menu['url'];

        if ($privData) {
            if (in_array($name, $privData)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    /**
     * 获取菜单深度
     * @param       $id
     * @param array $array
     * @param int   $i
     * @return int
     */
    protected function _getLevel($id, $array = [], $i = 0)
    {
        if ($array[$id]['parent_id'] == 0 || empty($array[$array[$id]['parent_id']]) || $array[$id]['parent_id'] == $id) {
            return $i;
        } else {
            $i++;
            return $this->_getLevel($array[$id]['parent_id'], $array, $i);
        }
    }

    /**
     * 用户权限管理
     * @adminMenu(
     *     'name'   => '用户权限管理',
     *     'parent' => 'default1',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '用户权限管理',
     *     'param'  => ''
     * )
     */
    public function actionList(){
       
        $result     = Db::name('CAction') -> select() -> toArray();
        $tree       = new Tree();
        
        $tree->icon = ['&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─', '&nbsp;&nbsp;&nbsp;└─ '];
        $tree->nbsp = '&nbsp;&nbsp;&nbsp;';

        $newMenus = [];
        foreach ($result as $m) {
            $newMenus[$m['id']] = $m;
        }
        
        foreach ($result as $key => $value) {

            $result[$key]['parent_id_node'] = ($value['parent_id']) ? ' class="child-of-node-' . $value['parent_id'] . '"' : '';
            $result[$key]['style']          = empty($value['parent_id']) ? '' : 'display:none;';
            $result[$key]['str_manage']     = '<a class="btn btn-xs btn-primary" href="' . url("adminIndex/actionAdd", ["parent_id" => $value['id']]) . '">' . lang('ADD_SUB_MENU') . '</a> 
                                               <a class="btn btn-xs btn-primary" href="' . url("adminIndex/actionEdit", ["id" => $value['id']]) . '">' . lang('EDIT') . '</a>  
                                               <a class="btn btn-xs btn-danger js-ajax-delete" href="' . url("adminIndex/actionDelete", ["id" => $value['id']]) . '">' . lang('DELETE') . '</a> ';
            $result[$key]['status']         = $value['status'] ? '<span class="label label-success">' . lang('DISPLAY') . '</span>' : '<span class="label label-warning">' . lang('HIDDEN') . '</span>';
            
            $result[$key]['app'] =  $value['url'];
            
        }
        
        $tree->init($result);

        $str = "<tr id='node-\$id' \$parent_id_node style='\$style'>
                    <td style='padding-left:20px;'>\$id</td>
                    <td>\$spacer\$name</td>
                    <td>\$app</td>
                    <td>\$status</td>
                    <td>\$str_manage</td>
                </tr>";

        $category = $tree->getTree(0, $str);

        $this->assign("category", $category);
        return $this->fetch();
    }

    /**
     * 添加路由
     * @adminMenu(
     *     'name'   => '添加路由',
     *     'parent' => 'actionList',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '添加路由',
     *     'param'  => ''
     * )
     */
    public function actionAdd(){
        $tree     = new Tree();
        $parentId = $this->request->param("parent_id", 0, 'intval');
        $result   = Db::name('CAction') -> select();
        $array    = [];
        foreach ($result as $r) {
            $r['selected'] = $r['id'] == $parentId ? 'selected' : '';
            $array[]       = $r;
        }
        $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $tree->init($array);
        $selectCategory = $tree->getTree(0, $str);
        $this->assign("select_category", $selectCategory);
        return $this->fetch();
    }

    /**
     * 添加路由提交
     * @adminMenu(
     *     'name'   => '添加路由提交',
     *     'parent' => 'actionList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '添加路由提交',
     *     'param'  => ''
     * )
     */
    public function actionAddPost(){
        if ($this->request->isPost()) {
            $result = $this->validate($this->request->param(), 'ActionMenu');
            if ($result !== true) {
                $this->error($result);
            } else {
                $data = $this->request->param();

                $repeatUrl = Db::name("CAction") -> where('url',$data['url']) -> count();

                if($repeatUrl > 0){
                    $this->error("该URL已经存在！");
                }else{
                    $urlArr = explode('/',$data['url']);
                    $data['controller'] =  $urlArr[1];
                    $insert_rs = Db::name('CAction')->strict(false)->field(true)->insert($data);
                    $insert_rs ? $this->success("添加成功！","adminIndex/actionList") : $this->error("添加失败");
                }

            }
        }
    }

    /**
     * 修改路由
     * @adminMenu(
     *     'name'   => '修改路由',
     *     'parent' => 'actionList',
     *     'display'=> false,
     *     'hasView'=> true,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '修改路由',
     *     'param'  => ''
     * )
     */
    public function actionEdit(){
        $tree   = new Tree();
        $id     = $this->request->param("id", 0, 'intval');
        $rs     = Db::name('CAction')->where("id", $id)->find();
        $result = Db::name('CAction')->select();
        $array  = [];
        foreach ($result as $r) {
            $r['selected'] = $r['id'] == $rs['parent_id'] ? 'selected' : '';
            $array[]       = $r;
        }
        $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $tree->init($array);
        $selectCategory = $tree->getTree(0, $str);
        $this->assign("data", $rs);
        $this->assign("select_category", $selectCategory);
        return $this->fetch();
    }

    /**
     * 修改路由提交
     * @adminMenu(
     *     'name'   => '修改路由提交',
     *     'parent' => 'actionList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '修改路由提交',
     *     'param'  => ''
     * )
     */
    public function editListPost(){

        if ($this->request->isPost()) {
            $id      = $this->request->param('id', 0, 'intval');
            $oldMenu = Db::name('CAction')->where('id', $id)->find();

            $result = $this->validate($this->request->param(), 'ActionMenu');

            if ($result !== true) {
                $this->error($result);
            } else {
                Db::name('CAction')->strict(false)->field(true) ->update($this->request->param());
                $this->success("保存成功！","adminIndex/actionList"); 
            }
        }

    }

    /**
     * 删除路由
     * @adminMenu(
     *     'name'   => '删除路由',
     *     'parent' => 'actionList',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 10000,
     *     'icon'   => '',
     *     'remark' => '删除路由',
     *     'param'  => ''
     * )
     */
    public function actionDelete(){
        $id    = $this->request->param("id", 0, 'intval');
        $count = Db::name('CAction')->where("parent_id", $id)->count();
        if ($count > 0) {
            $this->error("该菜单下还有子菜单，无法删除！");
        }
        if (Db::name('CAction')->delete($id) !== false) {
            $this->success("删除菜单成功！");
        } else {
            $this->error("删除失败！");
        }
    }

}
