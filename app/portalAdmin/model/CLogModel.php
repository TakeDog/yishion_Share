<?php 
namespace app\portalAdmin\model;
use think\Db;
use think\Model;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;

class CLogModel extends Model{

    public  function exportFileLog($actionId,$table,$fileNameField){
        $userData = Db::name('CLog') -> where("action_id=$actionId")
        -> group('user_id,action_id') -> field('user_id,action_id') -> select();

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

        $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '用户名')
                 ->setCellValue('C1', '昵称')
                 ->setCellValue('D1', '角色')
                 ->setCellValue('E1', '真实名字')
                 ->setCellValue('F1', '部门')
                 ->setCellValue('G1', '岗位')
                 ->setCellValue('H1', '邮箱')
                 ->setCellValue('I1', '手机')
                 ->setCellValue('J1', '已阅文件')
                 ->setCellValue('K1', '个人已阅文件数');
        $y1 = 2;
        $y2 = 2;
        foreach ($userData as $k1 => $v1) {

            $subQuery = Db::table('share_c_log')
            ->field('user_id,mask')
            ->where(["user_id"=>$v1['user_id'],"action_id"=>$v1['action_id']])
            ->group('user_id,mask')
            ->buildSql();
            
            $logData = Db::table($subQuery.' a')
            -> join('share_c_user b','a.user_id=b.id','left')
            -> join('share_dept c','b.dept_id=c.id','left')
            -> join('share_job d','b.job_id=d.id','left')
            -> join("$table e","a.mask=e.$fileNameField",'left')
            -> join('share_c_user_role f','b.id=f.user_id','left')
            -> join('share_c_role g','f.role_id=g.id','left')
            -> field("a.user_id,a.mask,b.user_name,b.user_nickname,b.real_name,b.user_email,b.mobile,c.name dept,d.job,g.role_name,e.$fileNameField") -> select();

            $warp = true;
            foreach ($logData as $k2 => $v2) {

                if($warp){
                    $warp = false;

                    $objSheet->setCellValue('A'.$y2, $k1+1)
                             ->setCellValue('B'.$y2, $v2['user_name'])
                             ->setCellValue('C'.$y2, $v2['user_nickname'])
                             ->setCellValue('D'.$y2, $v2['role_name'])
                             ->setCellValue('E'.$y2, $v2['real_name'])
                             ->setCellValue('F'.$y2, $v2['dept'])
                             ->setCellValue('G'.$y2, $v2['job'])
                             ->setCellValue('H'.$y2, $v2['user_email'])
                             ->setCellValue('I'.$y2, $v2['mobile'])
                             ->setCellValue('K'.$y2, count($logData));
                }
                $objSheet->setCellValue('J'.$y2, $v2['mask']);

                $y2=$y2+1;
            }
            $y3 = $y2-1;
            $objSheet->mergeCells("A$y1:A$y3");
            $objSheet->mergeCells("B$y1:B$y3");
            $objSheet->mergeCells("C$y1:C$y3");
            $objSheet->mergeCells("D$y1:D$y3");
            $objSheet->mergeCells("E$y1:E$y3");
            $objSheet->mergeCells("F$y1:F$y3");
            $objSheet->mergeCells("G$y1:G$y3");
            $objSheet->mergeCells("H$y1:H$y3");
            $objSheet->mergeCells("I$y1:I$y3");
            $objSheet->mergeCells("K$y1:K$y3");
            $y1 = $y2;
        }

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="用户数据分析统计表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        
    }

    public  function exportFileLogS($actionId){
        $userData = Db::name('CLog') -> where("action_id=$actionId")
        -> group('user_id,action_id') -> field('user_id,action_id') -> select();

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

        $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '用户名')
                 ->setCellValue('C1', '昵称')
                 ->setCellValue('D1', '角色')
                 ->setCellValue('E1', '真实名字')
                 ->setCellValue('F1', '部门')
                 ->setCellValue('G1', '岗位')
                 ->setCellValue('H1', '邮箱')
                 ->setCellValue('I1', '手机')
                 ->setCellValue('J1', '已阅文件')
                 ->setCellValue('K1', '个人已阅文件数');
        $y1 = 2;
        $y2 = 2;
        foreach ($userData as $k1 => $v1) {

            $subQuery = Db::table('share_c_log')
            ->field('user_id,mask')
            ->where(["user_id"=>$v1['user_id'],"action_id"=>$v1['action_id']])
            ->group('user_id,mask')
            ->buildSql();
            
            $logData = Db::table($subQuery.' a')
            -> join('share_c_user b','a.user_id=b.id','left')
            -> join('share_dept c','b.dept_id=c.id','left')
            -> join('share_job d','b.job_id=d.id','left')
            -> join('share_c_user_role f','b.id=f.user_id','left')
            -> join('share_c_role g','f.role_id=g.id','left')
            -> field("a.user_id,a.mask,b.user_name,b.user_nickname,b.real_name,b.user_email,b.mobile,c.name dept,d.job,g.role_name") -> select();

            $warp = true;
            foreach ($logData as $k2 => $v2) {

                if($warp){
                    $warp = false;

                    $objSheet->setCellValue('A'.$y2, $k1+1)
                             ->setCellValue('B'.$y2, $v2['user_name'])
                             ->setCellValue('C'.$y2, $v2['user_nickname'])
                             ->setCellValue('D'.$y2, $v2['role_name'])
                             ->setCellValue('E'.$y2, $v2['real_name'])
                             ->setCellValue('F'.$y2, $v2['dept'])
                             ->setCellValue('G'.$y2, $v2['job'])
                             ->setCellValue('H'.$y2, $v2['user_email'])
                             ->setCellValue('I'.$y2, $v2['mobile'])
                             ->setCellValue('K'.$y2, count($logData));
                }
                $objSheet->setCellValue('J'.$y2, $v2['mask']);

                $y2=$y2+1;
            }
            $y3 = $y2-1;
            $objSheet->mergeCells("A$y1:A$y3");
            $objSheet->mergeCells("B$y1:B$y3");
            $objSheet->mergeCells("C$y1:C$y3");
            $objSheet->mergeCells("D$y1:D$y3");
            $objSheet->mergeCells("E$y1:E$y3");
            $objSheet->mergeCells("F$y1:F$y3");
            $objSheet->mergeCells("G$y1:G$y3");
            $objSheet->mergeCells("H$y1:H$y3");
            $objSheet->mergeCells("I$y1:I$y3");
            $objSheet->mergeCells("K$y1:K$y3");
            $y1 = $y2;
        }

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="用户数据分析统计表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
        
    }
}