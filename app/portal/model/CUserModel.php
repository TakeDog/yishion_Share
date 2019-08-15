<?php 
namespace app\portal\model;
use think\Db;
use think\Model;

class CUserModel extends Model{

    public  function loginVerify($user,$pwd){

        $userInfo = $this -> where("user_name",$user) -> find();

        if(!$userInfo) return 0;

        if($userInfo['pwd'] != MD5($pwd)) return -2;

        if($userInfo['user_status'] == 0) return -1;

        // 定义存session时 需要删除的个人信息
        $unField  = ['pwd','salt','last_login_ip','last_login_time','user_status'];

        $auth = $userInfo['super'] ? [] : $this->_getAuth($userInfo['id']);
        
        // 删除部分个人信息
        foreach ($unField as $fKey => $fVal){
            unset($userInfo[$fVal]);
        }

    
        $data['last_login_time'] = time();
        $data['last_login_ip']    = getClientIp();    // 自定义公用获取登录ip

        // 更新登录状态
        $this -> where('id', $userInfo['id']) -> update($data);

        // 获取用户管理员角色名称
        $roleName = $this->getUserRoleName($userInfo->id);
        $userInfo['role'] = $roleName;

        // session存储个人信息
        session('user_info', $userInfo->toArray(),'portal');
        // session存储权限
        session('auth', $auth,'portal');
        return 1;

    }

    public function registVerify($user){

        $userInfo = $this -> where("user_name",$user['user_name']) -> find();

        if($userInfo) return -1;

        $user['pwd'] = MD5($user['pwd']);
        $user['user_status'] = 2;
        $user['super'] = 0;
        $user['create_time'] = time();
        Db::startTrans();
        try{
            $this -> save($user);
            $res = Db::name("c_user_role") -> insert(['user_id'=>$this->id,'role_id'=>1]);
            Db::commit();
            return $res;
        }catch(\Exception $e){
            Db::rollback();
            return 0;
        }
    }

    public function getUserRoleName($user_id){
        //$prefix   = config('database.prefix');
        $roleNameArr = $this
            ->alias('u')
            ->join('share_c_user_role ur', 'u.id=ur.user_id','LEFT')
            ->join('share_c_role r', 'ur.role_id=r.id','LEFT')
            ->where('u.id',$user_id)
            ->field('r.role_name')
            ->find();
        $roleName = empty($roleNameArr['role_name'])?'':$roleNameArr['role_name'];
        return $roleName;
    }

    private function _getAuth($user_id){

        //$prefix   = config('database.prefix');
        $action_list = Db::name('c_user_role') 
        -> alias('ur')
        -> join('share_c_role r','ur.role_id=r.id')
        -> join('share_c_role_action ra','r.id=ra.role_id')
        -> join('share_c_action a','ra.action_id = a.id')
        -> where('ur.user_id',$user_id)
        -> distinct(true)
        -> column('a.url');
        
        foreach($action_list as $k => $v){
            $action_list[$k] = strtolower($v);
        }
        return $action_list;
    }
   
}