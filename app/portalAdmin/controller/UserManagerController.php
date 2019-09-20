<?php
namespace app\portalAdmin\controller;

use think\Db;
use cmf\controller\AdminBaseController;
use app\common\Category;
use app\common\OperateConfig;
use app\common\PageHelper;
use app\common\Common;
use think\db\Query;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use app\portal\model\DeptModel;

class UserManagerController extends AdminBaseController{

    public function loginTotal(){
        return $this->fetch();
    }

    public function getLoginTotal(){
        $param = $this -> request -> param();
        
        $where = [['u.user_name','like','%'.$param['user_name'].'%']];

        if(!empty($param['date'])){
            $where[] = ['t.login_time','between time',$param['date']];
        }


        $data = Db::name('CUserLoginTotal') -> alias('t')
        -> join('share_c_user u','u.id=t.user_id','left')
        -> join('share_c_user_role r','u.id=r.user_id','left')
        -> join('share_c_role cr','r.role_id=cr.id','left')
        -> join('share_dept d','u.dept_id=d.id','left')
        -> join('share_job j','u.job_id=j.id','left')
        -> field("t.id,t.last_logout_time,UNIX_TIMESTAMP(t.login_time) AS login_time_stamp,t.login_time,u.user_name,u.user_nickname,u.real_name,u.user_email,u.mobile,d.name,j.job,cr.role_name,d.id did")
        -> where($where)
        -> order('t.login_time desc') -> select();
        $PageHelper = new PageHelper($data,$param['index'],$param['size']);
        $res = $PageHelper -> pageInfo();

        $Common = new Common();
        $DeptModel = new DeptModel();

        foreach ($res['list'] as $k => $v) {
            if($v['last_logout_time'] && $v['login_time_stamp'])
                $res['list'][$k]['login_total'] = $Common -> tamp_time_diff($v['last_logout_time']-$v['login_time_stamp']);

            
            $pDept = $DeptModel -> getFirstAllP($v['did']);
            $res['list'][$k]['pDept'] = $pDept['name'];
        }
        return json($res);
        // return Db::getLastSql();

    }

    public function exportLoginTotal(){
        $param = $this -> request -> param();
        $where = [['u.user_name','like','%'.$param['user_name'].'%']];

        if($param['date1'] != 'undefined' && $param['date2'] != 'undefined'){
            $where[] = ['t.login_time','between time',[$param['date1'],$param['date2']]];
        }

        $data = Db::name('CUserLoginTotal') -> alias('t')
        -> join('share_c_user u','u.id=t.user_id','left')
        -> join('share_c_user_role r','u.id=r.user_id','left')
        -> join('share_c_role cr','r.role_id=cr.id','left')
        -> join('share_dept d','u.dept_id=d.id','left')
        -> join('share_job j','u.job_id=j.id','left')
        -> field("t.id,t.last_logout_time,UNIX_TIMESTAMP(t.login_time) AS login_time_stamp,t.login_time,u.user_name,u.user_nickname,u.real_name,u.user_email,u.mobile,d.name,j.job,cr.role_name")
        -> where($where)
        -> order('id') -> select();


        $spreadsheet = new Spreadsheet();  //创建一个新的excel文档
        $objSheet = $spreadsheet->getActiveSheet();  //获取当前操作sheet的对象
        $objSheet->setTitle('登录人数统计表');  //设置当前sheet的标题

        //设置默认字体
        $spreadsheet->getDefaultStyle()->getFont()->setName('Arial');
        $spreadsheet->getDefaultStyle()->getFont()->setSize(11);
        //设置列宽
        $objSheet->getDefaultColumnDimension()->setWidth(14);
        $objSheet->getColumnDimension('K')->setWidth(19);
        $objSheet->getColumnDimension('L')->setWidth(19);
        //设置垂直居中
        $spreadsheet->getDefaultStyle()->getAlignment()->setHorizontal(\PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER);
        $spreadsheet->getDefaultStyle()->getAlignment()->setVertical(\PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER);

        $objSheet->setCellValue('A1', '序号')
                 ->setCellValue('B1', '用户名')
                 ->setCellValue('C1', '昵称')
                 ->setCellValue('D1', '角色')
                 ->setCellValue('E1', '真实名字')
                 ->setCellValue('F1', '机构')
                 ->setCellValue('G1', '部门')
                 ->setCellValue('H1', '岗位')
                 ->setCellValue('I1', '邮箱')
                 ->setCellValue('J1', '手机')
                 ->setCellValue('K1', '登陆时间')
                 ->setCellValue('L1', '累计时长');
        $Common = new Common();

        foreach ($data as $k => $v) {
            $k=$k+2;
            if($v['last_logout_time'] && $v['login_time_stamp'])
                $login_total = $Common -> tamp_time_diff($v['last_logout_time']-$v['login_time_stamp']);

            $objSheet->setCellValue('A'.$k, $v['id'])
                     ->setCellValue('B'.$k, $v['user_name'])
                     ->setCellValue('C'.$k, $v['user_nickname'])
                     ->setCellValue('D'.$k, $v['role_name'])
                     ->setCellValue('E'.$k, $v['real_name'])
                     ->setCellValue('F'.$k, '')
                     ->setCellValue('G'.$k, $v['name'])
                     ->setCellValue('H'.$k, $v['job'])
                     ->setCellValue('I'.$k, $v['user_email'])
                     ->setCellValue('J'.$k, $v['mobile'])
                     ->setCellValue('K'.$k, $v['login_time'])
                     ->setCellValue('L'.$k, $login_total);
        }
        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="登录人数统计表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
    }
}