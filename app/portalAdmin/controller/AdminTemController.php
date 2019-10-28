<?php
namespace app\portalAdmin\controller;

use think\Db;
use cmf\controller\AdminBaseController;
use think\db\Query;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use app\portalAdmin\model\DeptModel;

class AdminTemController extends AdminBaseController{

    public function setDeptNum(){
        
        //D:\phpstudy\WWW\Share\app\portalAdmin\controller
        //D:\WeChat Files\WeChat Files\YJF18340a\FileStorage\File\2019-10\各店铺总人数.xlsx
        $objReader = IOFactory::createReader('Xlsx');
        $objPHPExcel = $objReader->load("D:/WeChat Files/WeChat Files/YJF18340a/FileStorage/File/2019-10/各店铺总人数.xlsx");  //$filename可以是上传的表格，或者是指定的表格
        $sheet = $objPHPExcel->getSheet(0);   //excel中的第一张sheet
        $highestRow = $sheet->getHighestRow();       // 取得总行数

        $objSheet = $objPHPExcel->getActiveSheet();

        $update_error = array();

        for($i=4;$i<=$highestRow;$i++){

            $office_name =  $objSheet-> getCell("B".$i)->getValue();
            $num = $objSheet-> getCell("Q".$i)->getValue();

            $affect_num = Db::name('Dept') -> where('name',$office_name) -> update(['num'=>$num]);

            if( !$affect_num ){
                array_push($update_error,$office_name);
            }

        }

        dump($update_error);

    }


    public function exportNotNumDept(){

        $spreadsheet = new Spreadsheet();  //创建一个新的excel文档
        $objSheet = $spreadsheet->getActiveSheet();  //获取当前操作sheet的对象
        $objSheet->setTitle('系统上店铺人数为空的店铺列表');  //设置当前sheet的标题

        $title = ['ID','店铺名/部门名','人数'];

        $i = "A";
        foreach($title as $k => $v){
            $objSheet->setCellValue($i.'1', $v);
            $i++;
        }

        $data = Db::name("Dept") -> where("num",0) -> select();

        $j=2;
        foreach($data as $k => $v){
            $objSheet->setCellValue('A'.$j, $v['id'])
                     ->setCellValue('B'.$j, implode('/',DeptModel::getFullName($v['id'])))
                     ->setCellValue('C'.$j, $v['num']);
            $j++;
        }
        
        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="系统上店铺人数为空的店铺列表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');

    }

}

