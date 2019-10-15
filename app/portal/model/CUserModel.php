<?php 
namespace app\portal\model;
use think\Db;
use think\Model;
use think\db\Query;
use app\portalAdmin\model\DeptModel;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;


class CUserModel extends Model{

    public  function loginVerify($user,$pwd){

        $deptDb = model("Dept");

        $userInfo = $this -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> join('share_job j','u.job_id = j.id','LEFT') -> where("u.user_name",$user) -> field("u.*,d.name as dept,j.job as job") -> find();
        

        if(!$userInfo) return 0;

        if($userInfo['pwd'] != MD5($pwd)) return -2;

        if($userInfo['user_status'] == 0) return -1;

        //添加机构信息
        $deptPID = $deptDb -> getFirstP($userInfo['dept_id']);
        $partData = $deptDb -> find($deptPID);
        $userInfo['part'] = $partData['name'];

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
   
    public function getUserInfo($id=0){

        $deptDb = new DeptModel();

        if($id){

            $main = $this -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> join('share_job j','u.job_id = j.id','LEFT') -> field("u.id,u.user_name,u.user_nickname,u.avatar,u.user_status,u.super,u.user_email,u.mobile,u.create_time,u.real_name,u.dept_id,u.job_id,d.name as dept,j.job as job") -> find($id);
            $deptPID = $deptDb -> getFirstP($main['dept_id']);
            $partData = $deptDb -> find($deptPID);
            $main['part'] = $partData['name'];

        }else{

            $main = $this -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> join('share_job j','u.job_id = j.id','LEFT') -> where('u.id',$id) -> field("u.id,u.user_name,u.user_nickname,u.avatar,u.user_status,u.super,u.user_email,u.mobile,u.create_time,u.real_name,u.dept_id,u.job_id,d.name as dept,j.job as job") -> select();

            foreach($main as $k => $v){
                $deptPID = $deptDb -> getFirstP($v['dept_id']);
                $partData = $deptDb -> find($deptPID);
                $main[$k]['part'] = $partData['name'];
            }

        }
        return $main;
    }

    public function setUserSessionById($id){
        $userInfo = $this -> alias('u') -> join("share_dept d","u.dept_id=d.id",'LEFT') -> join('share_job j','u.job_id = j.id','LEFT') -> where("u.id",$id) -> field("u.*,d.name as dept,j.job as job") -> find();

        $deptDb = model("Dept");
        //添加机构信息
        $deptPID = $deptDb -> getFirstP($userInfo['dept_id']);
        $partData = $deptDb -> find($deptPID);
        $userInfo['part'] = $partData['name'];

        // 定义存session时 需要删除的个人信息
        $unField  = ['pwd','salt','last_login_ip','last_login_time','user_status'];
        
        // 删除部分个人信息
        foreach ($unField as $fKey => $fVal){
            unset($userInfo[$fVal]);
        }

        // 获取用户管理员角色名称
        $roleName = $this->getUserRoleName($userInfo->id);
        $userInfo['role'] = $roleName;

        // session存储个人信息
        session('user_info', $userInfo->toArray(),'portal');
    }

    public function exportExcel($data){
        $DeptModel = new DeptModel();
        $spreadsheet = new Spreadsheet();  //创建一个新的excel文档
        $objSheet = $spreadsheet->getActiveSheet();  //获取当前操作sheet的对象
        $objSheet->setTitle('用户数据分析统计表');  //设置当前sheet的标题

        //设置默认字体
        $spreadsheet->getDefaultStyle()->getFont()->setName('Arial');
        $spreadsheet->getDefaultStyle()->getFont()->setSize(11);
        //设置列宽
        $objSheet->getDefaultColumnDimension()->setWidth(14);
        $objSheet->getColumnDimension('J')->setWidth(55);
        //设置行高
        // $objSheet->getDefaultRowDimension()->setRowHeight(38);
        //设置垂直居中
        $spreadsheet->getDefaultStyle()->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $spreadsheet->getDefaultStyle()->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);

        $title = ['ID','用户名','昵称','角色','真实名字','部门','岗位','邮箱','手机','注册时间','最后登录时间','最后登录IP','状态'];

        $i = "A";
        foreach($title as $k => $v){
            $objSheet->setCellValue($i.'1', $v);
            $i++;
        }

        $list = Db::name('c_user')-> alias('u')
            -> join('c_user_role ur','u.id = ur.user_id','LEFT')
            -> join('c_role r','ur.role_id=r.id','LEFT')
            -> join('job j','u.job_id = j.id','LEFT')
            -> join('dept d','u.dept_id = d.id')
            -> where(function (Query $query) {
                global $data;

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
            -> select();

        $j=2;
        foreach($list as $k => $v){
            $objSheet->setCellValue('A'.$j, $v['id'])
                     ->setCellValue('B'.$j, $v['user_name'])
                     ->setCellValue('C'.$j, $v['user_nickname'])
                     ->setCellValue('D'.$j, $v['role_name'])
                     ->setCellValue('E'.$j, $v['real_name'])
                     ->setCellValue('F'.$j, implode(',',DeptModel::getFullName($v['dept_id'])))
                     ->setCellValue('G'.$j, $v['jobName'] ? $v['jobName'] : '无')
                     ->setCellValue('H'.$j, $v['user_email'])
                     ->setCellValue('I'.$j, $v['mobile'])
                     ->setCellValue('J'.$j, date('Y-m-d H:i:s',$v['create_time']))
                     ->setCellValue('K'.$j, date('Y-m-d H:i:s',$v['last_login_time']))
                     ->setCellValue('L'.$j, $v['last_login_ip'])
                     ->setCellValue('M'.$j, $v['user_status'] ? ($v['user_status']==1 ? '正常' :' 未验证') : '禁止登录');
            $j++;
        }

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="用户记录表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');

    }


}