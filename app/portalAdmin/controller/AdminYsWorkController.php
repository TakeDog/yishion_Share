<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\AdminBaseController;
use app\portal\model\DeptModel;
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
        $jobs = Db::name("job") -> select();
        //$jobs = count($jobs) ? $jobs : Db::name("job") -> where(['ogn'=>$firstP]) -> select();

        echo json_encode($jobDb -> jobClassify($jobs));
   
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
}