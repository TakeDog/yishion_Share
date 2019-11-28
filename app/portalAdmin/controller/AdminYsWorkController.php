<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\AdminBaseController;
use app\portal\model\DeptModel;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
/**
* Class AdminUIController
* @package app\portalAdmin\controller
*
* @adminMenuRoot(
*     'name'   =>'纯工作',
*     'action' =>'default',
*     'parent' =>'',
*     'display'=> true,
*     'order'  => 1,
*     'icon'   =>'desktop',
*     'remark' =>'纯工作'
* )
*
*/

class AdminYsWorkController extends AdminBaseController{
    
    
    /**
     * 公司资讯
     * @adminMenu(
     *     'name'   => '公司资讯',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '公司资讯',
     *     'param'  => ''
     * )
     */
    public function companyInfo(){
        return $this->fetch();
    }

    /**
     * 反馈
     * @adminMenu(
     *     'name'   => '反馈',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '反馈',
     *     'param'  => ''
     * )
     */
    public function feedback(){
        return $this->fetch();
    }

    /**
     * 获取反馈记录
     * @adminMenu(
     *     'name'   => '获取反馈记录',
     *     'parent' => 'feedback',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取反馈记录',
     *     'param'  => ''
     * )
     */
    public function getFeedback(){
        $block = $this -> request -> param("block",0,"intval");
        switch ($block) {
            case 1:
                $tableData = Db::name("CFeedbackProduct") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();
                break;
            case 2:
                $tableData = Db::name("CFeedbackStore") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();
                break;
            case 3:
                $tableData = Db::name("CFeedbackWebsite") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();
                break;
            case 4:
                $tableData = Db::name("CFeedbackOther") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();
                break;
        }
        echo json_encode($tableData);
    }

    /**
     * 导出反馈记录
     * @adminMenu(
     *     'name'   => '导出反馈记录',
     *     'parent' => 'feedback',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '导出反馈记录',
     *     'param'  => ''
     * )
     */
    public function exportFB(){
        $block = $this -> request -> param("block",0,"intval");

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

        switch ($block) {
            case 1:
                $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '真实名字')
                 ->setCellValue('C1', '产品')
                 ->setCellValue('D1', '问题')
                 ->setCellValue('E1', '日期');
                 
                $tableData = Db::name("CFeedbackProduct") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();

                $start = 2;
                foreach($tableData as $k => $v){
                    $objSheet->setCellValue('A'.$start, $v['id'])
                    ->setCellValue('B'.$start, $v['real_name'])
                    ->setCellValue('C'.$start, $v['product'])
                    ->setCellValue('D'.$start, $v['question'])
                    ->setCellValue('E'.$start, $v['create_time']);
                    $start++;
                }   

                break;
            case 2:
                $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '真实名字')
                 ->setCellValue('C1', '店铺编号')
                 ->setCellValue('D1', '店铺名称')
                 ->setCellValue('E1', '需要支持')
                 ->setCellValue('F1', '反馈')
                 ->setCellValue('G1', '日期');

                $tableData = Db::name("CFeedbackStore") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();

                $start = 2;
                foreach($tableData as $k => $v){
                    $objSheet->setCellValue('A'.$start, $v['id'])
                    ->setCellValue('B'.$start, $v['real_name'])
                    ->setCellValue('C'.$start, $v['store_num'])
                    ->setCellValue('D'.$start, $v['store_name'])
                    ->setCellValue('E'.$start, $v['need_support'])
                    ->setCellValue('F'.$start, $v['feedback'])
                    ->setCellValue('G'.$start, $v['create_time']);
                    $start++;
                }   

                break;
            case 3:
                $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '用户名')
                 ->setCellValue('C1', '意见')
                 ->setCellValue('D1', 'bug')
                 ->setCellValue('E1', '日期');
                 
                $tableData = Db::name("CFeedbackWebsite") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();

                $start = 2;
                foreach($tableData as $k => $v){
                    $objSheet->setCellValue('A'.$start, $v['id'])
                    ->setCellValue('B'.$start, $v['real_name'])
                    ->setCellValue('C'.$start, $v['suggest'])
                    ->setCellValue('D'.$start, $v['bug'])
                    ->setCellValue('E'.$start, $v['date']);
                    $start++;
                }  
                break;
            case 4:
                $objSheet->setCellValue('A1', 'ID')
                 ->setCellValue('B1', '真实名字')
                 ->setCellValue('C1', '问题')
                 ->setCellValue('D1', '日期');
                 
                $tableData = Db::name("CFeedbackOther") -> alias('fp') -> join("CUser u","fp.user_id = u.id","LEFT") -> field("fp.*,u.real_name") -> select() -> toArray();

                $start = 2;
                foreach($tableData as $k => $v){
                    $objSheet->setCellValue('A'.$start, $v['id'])
                    ->setCellValue('B'.$start, $v['real_name'])
                    ->setCellValue('C'.$start, $v['bug'])
                    ->setCellValue('D'.$start, $v['date']);
                    $start++;
                } 
                break;
        }

        

        $writer = new Xlsx($spreadsheet);
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="反馈.xlsx"');
        header('Cache-Control: max-age=0');
        $writer->save('php://output');
    }

    /**
     * 获取信息
     * @adminMenu(
     *     'name'   => '获取信息',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取信息',
     *     'param'  => ''
     * )
     */
    public function getInfo(){
        $where = $this -> request -> param();
        
        
        if($where['id'] == -1){
            $data = Db::name('WorkInfo') -> order('sort') -> select();
        }else{
            $data = Db::name('WorkInfo') -> where('id',$id) -> order('sort') ->select();
        }
        return json($data);
    }

    /**
     * 新建信息
     * @adminMenu(
     *     'name'   => '新建信息',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '新建信息',
     *     'param'  => ''
     * )
     */
    public function createInfo(){
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['name'] = $this -> request -> param("name");
        $data['icon'] = $this -> request -> param("icon")?$this -> request -> param("icon"):"";
        $data['sort'] = $this -> request -> param("sort",0,"intval");
        $data['del'] = $this -> request -> param("del",1,"intval");

        $res = Db::name("WorkInfo") -> insert($data);
        if($res){
            return 1001;
        }else{
            return 1002;
        }
    }

     /**
     * 更新信息
     * @adminMenu(
     *     'name'   => '更新信息',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '更新信息',
     *     'param'  => ''
     * )
     */
    public function updateInfo(){
        $data['id'] = $this -> request -> param("id",0,"intval");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['icon'] = $this -> request -> param("icon");
        $data['name'] = $this -> request -> param("name");
        $data['sort'] = $this -> request -> param("sort",0,"intval");
        $data['del'] = $this -> request -> param("del");
        
        $res = Db::name('WorkInfo') -> update($data);
        
        // if($where['id'] == -1){
        //     $data = Db::name('WorkInfo') -> order('sort') -> select();
        // }else{
        //     $data = Db::name('WorkInfo') -> where('id',$id) -> order('sort') ->select();
        // }
        if($res == 0){
            return 1003;
        }elseif($res > 0){
            return 1001;
        }else{
            return 1002;
        }
    }

     /**
     * 删除信息
     * @adminMenu(
     *     'name'   => '删除信息',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '删除信息',
     *     'param'  => ''
     * )
     */
    public function delInfo(){
        $data['id'] = $this -> request -> param("id",0,"intval");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $lev = $this -> request -> param("lev",0,"intval");
        $data['files'] = $this -> request -> param("files");
        
        if($lev == 3){
            if(file_exists($data['files'])){
                unlink($data['files']);
            }else{
                return 1004;
            }
        }
        $count = Db::name('WorkInfo') -> where('pid',$data['id']) -> count();
        if($count <= 0){
            $res = Db::name('WorkInfo') -> delete($data);
            if($res){
                return 1001;
            }else{
                return 1002;
            }
        }else{
            return 1003;
        }
    }

     /**
     * 上传文件
     * @adminMenu(
     *     'name'   => '上传文件',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '上传文件',
     *     'param'  => ''
     * )
     */
    public function uploadFile(){

        $authDept = array();
        foreach($this -> request -> param('authDept') as $k => $v){
            $authDept[$k] = explode(',',trim($v,"\""));
        }

        

        $files = $this -> request -> file("files");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['sort'] = $this -> request -> param("sort",1000,"intval");
        $data['del'] = $this -> request -> param("del",1,"intval");
        $data['date'] = date("Y-m-d H:i:s");
        $data['auth_dept'] = str_replace('"','',json_encode($authDept)) ;


        //var_dump($this -> request -> param('authJob'));
        $data['auth_job'] =  implode(',' , $this -> request -> param('authJob'));

        foreach($files as $file){
            $in = $file -> getInfo();
            if($file){
                $info = $file->move('upload/portal/workInfo');
                if($info){
                    $data['files'] = 'upload/portal/workInfo/'.str_replace("\\","/",$info->getSaveName());
                    $data['name'] = str_replace(strrchr($in['name'],"."),"",$in['name']);
                    Db::name("WorkInfo") -> insert($data);
                }else{
                    // 上传失败获取错误信息
                    $res['status'] = 1002;
                    $res['msg'] = "上传失败！！！";
                    return json($res);
                }
            }
        }
        $res['status'] = 1001;
        $res['msg'] = "上传成功！！！";
        return json($res);
    }
     /**
     * 导出公司资讯阅读记录
     * @adminMenu(
     *     'name'   => '导出公司资讯阅读记录',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '导出公司资讯阅读记录',
     *     'param'  => ''
     * )
     */
    public function exportLog(){
        $CLogModel = model('CLog');
        $CLogModel -> exportFileLog(37,'share_work_info','name');
    }
    /**
     * 导出运营指南Excel
     * @adminMenu(
     *     'name'   => '导出运营指南Excel',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '导出运营指南Excel',
     *     'param'  => ''
     * )
     */
    public function exportLogZn(){
        model('CLog') -> exportFileLogS(38);
    }

    /**
     * 获取岗位选项
     * @adminMenu(
     *     'name'   => '获取岗位选项',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取岗位选项',
     *     'param'  => ''
     * )
     */
    public function getJobOptions(){
        //$deptDb = new DeptModel();
        $jobDb = model('Job');
        //$id = $this -> request -> param('id');
        //$firstP = $deptDb -> getFirstP($id);
        //$deptMsg = $deptDb -> find($id);
        //$dept_type = $deptMsg['type'];

        //$jobs = Db::name("job") -> where(['ogn'=>$firstP,'dept_type'=>$dept_type]) -> select();
        //$jobs = Db::name("job") -> select();
        //$jobs = count($jobs) ? $jobs : Db::name("job") -> where(['ogn'=>$firstP]) -> select();

        echo json_encode($jobDb -> jobClassify2());
   
    }

    /**
     * 修改可见范围
     * @adminMenu(
     *     'name'   => '修改可见范围',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '修改可见范围',
     *     'param'  => ''
     * )
     */
    public function setAuth(){
        $params = $this -> request -> param();

        $data['auth_dept'] = json_encode($params['authDept']);
        $data['auth_job'] = implode(',',$params['authJob']);
        $affect = Db::name("WorkInfo") -> where("id",'in', implode(',',$params['fileIds']) ) -> update($data);

        echo $affect;
    }

    /**
     * 查看可见范围
     * @adminMenu(
     *     'name'   => '查看可见范围',
     *     'parent' => 'companyInfo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '查看可见范围',
     *     'param'  => ''
     * )
     */
    public function getAuth(){
        $id = $this -> request -> param("id",0,'intval');
        $data = Db::name("WorkInfo") -> field('auth_dept,auth_job') -> find($id);
        $retuanData['authDept'] = json_decode($data['auth_dept']);
        $retuanData['authJob'] = $data['auth_job'];

        echo json_encode($retuanData);
    }


    /**
     * 运营指南管理
     * @adminMenu(
     *     'name'   => '运营指南管理',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 2,
     *     'icon'   => '',
     *     'remark' => '运营指南管理',
     *     'param'  => ''
     * )
     */
    public function OperateTeach(){
        $root = "./static/PDF/运营指南";
        $rootFile = scandir( iconv("utf-8","gbk",$root) );
        unset($rootFile[0]);
        unset($rootFile[1]);

        foreach($rootFile as $k => $v){
            $data[] = ['name'=>iconv("gbk","utf-8",$v),'visible'=>'1,2,3'];
        }

        $this -> assign('data',json_encode($data));
        return $this -> fetch();
    }

     /**
     * 文件列表
     * @adminMenu(
     *     'name'   => '文件列表',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '文件列表',
     *     'param'  => ''
     * )
     */
    public function fileList(){
        $root = "./static/PDF/运营指南/";
        $dir = $this -> request -> param('dir');
        $path =$root.$dir;
        
        $dirArr = explode('/',$dir);
        if( strpos(end($dirArr),'.') !== false ){
            redirectFile('/'.$path);
        }

        $path = iconv("utf-8","gbk",$path);
        $fileList = scandir($path);
        unset($fileList[0]);
        unset($fileList[1]);
        
        foreach($fileList as $k => $v){
            $data[] = ['file'=>iconv("gbk","utf-8",$v),'date'=>date("Y-m-d H:i:s", filemtime($path.'/'.$v))];

        }
        
        foreach($dirArr as $k => $v){
            $nav[$k]['name'] = $v;
            $navPath = '';
            for($i=0;$i<($k+1);$i++){
                $navPath.= '/'.$dirArr[$i];
            }
            $nav[$k]['link'] =  ltrim($navPath,'/');
        }

        $this -> assign('nav', json_encode($nav));
        $this -> assign('fileList', json_encode($data));
        return $this -> fetch();
    }

    /**
     * 替换文件
     * @adminMenu(
     *     'name'   => '替换文件',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '替换文件',
     *     'param'  => ''
     * )
     */
    public function fileReplace(){
        $root = "static/PDF/运营指南/";
        $file = $this -> request -> file("file");
        $old_dir = $this -> request -> param("old_file");

        $dirArr = explode('/',$root.$old_dir);
        unset($dirArr[count($dirArr)-1 ]);
        $dir = implode('/',$dirArr);
        $in = $file -> getInfo();

        unlink(iconv("utf-8","gbk",$root.$old_dir));
        if($file){
            //不建立日期子文件夹及修改名称;
            $info = $file->move( iconv('utf-8','gbk',$dir) ,'');

            if($info){                
                $res['status'] = 1000;
                $res['msg'] = "替换成功";
                return json($res);
            }else{
                // 上传失败获取错误信息
                $res['status'] = 1002;
                $res['msg'] = "替换失败";
                return json($res);
            }
        }
    }

    /**
     * 删除文件
     * @adminMenu(
     *     'name'   => '删除文件',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '删除文件',
     *     'param'  => ''
     * )
     */
    public  function fileDel(){
        $root = "static/PDF/运营指南/";
        $old_dir = $this -> request -> param("old_file");
        unlink(iconv("utf-8","gbk",$root.$old_dir));
        $res['status'] = 1000;
        $res['msg'] = "删除成功";
        return json($res);
    }

    /**
     * 获取架构
     * @adminMenu(
     *     'name'   => '获取架构',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取架构',
     *     'param'  => ''
     * )
     */
    public function getFirstPOption(){
        echo json_encode( Db::name("Dept") -> where('pid',0) -> select() );
    }

     /**
     * 获取某文件夹的权限列表
     * @adminMenu(
     *     'name'   => '获取某文件夹的权限列表',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取某文件夹的权限列表',
     *     'param'  => ''
     * )
     */
    public function getOperateTeachAuth(){
        $block = $this -> request -> param('name');
        $authRow = Db::name('Operate') -> where("block",$block) -> find();
        echo $authRow['dept_id'];
    }

    /**
     * 设置某文件夹的权限列表
     * @adminMenu(
     *     'name'   => '设置某文件夹的权限列表',
     *     'parent' => 'OperateTeach',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '设置某文件夹的权限列表',
     *     'param'  => ''
     * )
     */
    public function setOperateTeachAuth(){
        $params = $this -> request -> param();

        $row_count = Db::name("Operate") -> where("block",$params['name']) -> count();
        if($row_count){
            $affectRow = Db::name("Operate") ->  where("block",$params['name']) -> update(['dept_id'=>$params['auth']]);
        }else{
            $data['block'] = $params['name'];
            $data['dept_id'] = $params['auth'];
            $affectRow = Db::name("Operate") ->  insert($data);
        }

        echo $affectRow;

    }
}