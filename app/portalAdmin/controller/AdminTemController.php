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
        $objPHPExcel = $objReader->load("D:/WeChat Files/WeChat Files/YJF18340a/FileStorage/File/2019-10/最新“纯分享”信息统计表-1018更新.xlsx");  //$filename可以是上传的表格，或者是指定的表格
        $sheet = $objPHPExcel->getSheet(0);   //excel中的第一张sheet
        $highestRow = $sheet->getHighestRow();       // 取得总行数

        $objSheet = $objPHPExcel->getActiveSheet();

        $update_error = array();

        for($i=4;$i<=$highestRow;$i++){

            $office_name =  $objSheet-> getCell("B".$i)->getValue();
            $num = $objSheet-> getCell("Q".$i)->getValue();

            $exist = Db::name('Dept') -> where('name',$office_name) -> count();

            if($exist>0){
                Db::name('Dept') -> where('name',$office_name) -> update(['num'=>intval($num)]);
            }else{
                array_push($update_error,$office_name);
            }

            

        }

        dump($update_error);

    }

    public function setJobNum(){
        
        //D:\phpstudy\WWW\Share\app\portalAdmin\controller
        //D:\WeChat Files\WeChat Files\YJF18340a\FileStorage\File\2019-10\各店铺总人数.xlsx
        $objReader = IOFactory::createReader('Xlsx');
        $objPHPExcel = $objReader->load("D:/WeChat Files/WeChat Files/YJF18340a/FileStorage/File/2019-10/最新“纯分享”信息统计表-1018更新.xlsx");  //$filename可以是上传的表格，或者是指定的表格
        $sheet = $objPHPExcel->getSheet(0);   //excel中的第一张sheet
        $highestRow = $sheet->getHighestRow();       // 取得总行数
        $highestColumn = $worksheet->getHighestColumn(); // 总列数

        $objSheet = $objPHPExcel->getActiveSheet();


        $update_error = array();

        $deptDb = model("Dept");
        for($i=2;$i<=$highestRow;$i++){

            $deptName =  $objSheet-> getCell("A".$i)->getValue();
            $dept_ids = Db::name("Dept") -> where('name',$deptName) ->field('id,type') ->find();
            $dept_id = $dept_ids['id'];
            $ogn = $deptDb -> getFirstP($dept_id);

            $j = 'B';

            for($jj=2;$jj<=$highestColumn;$jj++){

                $jobIds = Db::name("Job") -> where(['ogn'=>$ogn,'dept_type'=>$dept_ids['type']]) -> field("id") -> find();

                $num = $objSheet-> getCell($j.$i)->getValue();

                $data['dept_id'] = $dept_id;
                $data['job_id'] = $jobIds['id'];
                $data['num'] = intval($num);

                Db::name('JobNum') -> insert($data);
                $j++;
            }

            // $num = $objSheet-> getCell("Q".$i)->getValue();
            // $exist = Db::name('Dept') -> where('name',$office_name) -> count();

            // if($exist>0){
            //     Db::name('Dept') -> where('name',$office_name) -> update(['num'=>intval($num)]);
            // }else{
            //     array_push($update_error,$office_name);
            // }
        }

        //dump($update_error);

    }

    public function test(){
        $dept_ids = Db::name("Dept") -> where('name','钟国强') ->field('id,type') ->find();
        dump($dept_ids);
    }

    public function exportNotNumDept(){

        $spreadsheet = new Spreadsheet();  //创建一个新的excel文档
        $objSheet = $spreadsheet->getActiveSheet();  //获取当前操作sheet的对象
        $objSheet->setTitle('系统上店铺人数为空的店铺列表');  //设置当前sheet的标题

        $title = ['ID','店铺名/部门名','店铺类型','人数'];

        $i = "A";
        foreach($title as $k => $v){
            $objSheet->setCellValue($i.'1', $v);
            $i++;
        }

        $data = Db::name("Dept") -> where("num",99) -> select();

        $j=2;
        foreach($data as $k => $v){

            $shop_type = '';
            switch($v['type']){
                case 1:
                    $shop_type = "普通结构";
                    break;
                case 2:
                    $shop_type = "运营支持";
                    break; 
                case 3:
                    $shop_type = "店铺";
                    break;   
            }


            $objSheet->setCellValue('A'.$j, $v['id'])
                     ->setCellValue('B'.$j, implode('/',DeptModel::getFullName($v['id'])))
                     ->setCellValue('C'.$j, $shop_type)
                     ->setCellValue('D'.$j, $v['num']);
            $j++;
        }
        
        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="系统上店铺人数为空的店铺列表.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');

    }

    public function addDepts(){
        $zd = Db::name('Dept') -> where('pid',49) -> select();
        foreach($zd as $k => $v){
            $addData['pid'] = $v['id'];
            $addData['name'] = "客户";
            $addData['type'] = 4;
            $addData['num'] = 1;
            Db::name('Dept')  -> insert($addData);
            // $xj = Db::name('Dept') -> where('pid',$v['id']) -> select();

            // foreach($xj as $kk => $vv){
            //     $add['id'] = $vv['id'];
            //     $add['type'] = 3;
            //     Db::name('Dept') -> update($add);
            // }
           
        }
        echo "OK!";
    }

}
