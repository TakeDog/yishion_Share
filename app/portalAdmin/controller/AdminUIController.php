<?php
namespace app\portalAdmin\controller;

use think\Db;
use cmf\controller\AdminBaseController;
use app\common\Category;
use app\common\OperateConfig;
use think\db\Query;
/**
 * Class AdminUIController
 * @package app\portalAdmin\controller
 *
 * @adminMenuRoot(
 *     'name'   =>'界面设置',
 *     'action' =>'default',
 *     'parent' =>'',
 *     'display'=> true,
 *     'order'  => 1,
 *     'icon'   =>'paint-brush',
 *     'remark' =>'界面设置'
 * )
 *
 */

class AdminUIController extends AdminBaseController{

    /**
     * 首页视频
     * @adminMenu(
     *     'name'   => '首页视频',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '首页视频',
     *     'param'  => ''
     * )
     */
    public function indexVideo(){
        return $this -> fetch();
    }

    /**
     * 上传视频
     * @adminMenu(
     *     'name'   => '上传视频',
     *     'parent' => 'indexVideo',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '上传视频',
     *     'param'  => ''
     * )
     */
    public function video_save(){
        
        $filePath = './static/video/index';
        $file = request()->file('video_name');
        $video_type = $this -> request -> param('video_type');
    
        if($file){
            $info = $file->move($filePath);
            if($info){
                $operateConfig = new OperateConfig();
                // 成功上传后 获取上传信息
                $save_name =  str_replace('\\','/',$info->getSaveName()); // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $configObj = $operateConfig -> getConfig();
                
                switch($video_type){
                    case 1: //纯工作视频
                        unlink($configObj -> IndexVideo -> work);
                        $configObj -> IndexVideo -> work = $filePath.'/'.$save_name;
                    break;
                    case 2: //纯生活视频
                        unlink($configObj -> IndexVideo -> live);
                        $configObj -> IndexVideo -> live = $filePath.'/'.$save_name;
                    break;
                    case 3: //纯工作&纯生活
                        if($configObj -> IndexVideo -> work == $configObj -> IndexVideo -> live){
                            unlink($configObj -> IndexVideo -> work);
                        }else{
                            unlink($configObj -> IndexVideo -> work);
                            unlink($configObj -> IndexVideo -> live);
                        }
                        
                        $configObj -> IndexVideo -> work = $filePath.'/'.$save_name;
                        $configObj -> IndexVideo -> live = $filePath.'/'.$save_name;
                    break;
                }

                if($operateConfig -> setConfig($configObj)){
                    $this -> success('文件写入成功');
                }else{
                    $this -> error('文件写入失败');
                };

            }else{
                // 上传失败获取错误信息
                echo $file->getError();
            }
        }
    }


    /**
     * 侧边栏设置
     * @adminMenu(
     *     'name'   => '侧边栏设置',
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '侧边栏设置',
     *     'param'  => ''
     * )
     */
    public function AsideSet(){
        return $this -> fetch();
    }

    /**
     * 侧边栏文件上传
     * @adminMenu(
     *     'name'   => '侧边栏文件上传',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '侧边栏文件上传',
     *     'param'  => ''
     * )
     */
    public function AsideSetHandle(){

        $files = request()->file('aside_file');
        
        $block = $this -> request -> param("block",0,'intval');
        $path = "./static/upload/portal/aside";
        foreach($files as $k => $v){
            if($v){
                $fileName = str_replace(strrchr( $v -> getInfo()['name'],"."),"", $v -> getInfo()['name']);
                $info = $v->move($path);
                if($info){

                    $full_path = $path."/".str_replace('\\','/',$info->getSaveName());
                    
                    $affectRow = Db::name("IndexAside") -> insert(['file_name'=>$fileName,'path'=>$full_path,'date'=>date("Y-m-d H:i:s"),'block'=>$block]);

                    echo $affectRow;

                }else{
                    // 上传失败获取错误信息
                    echo $v->getError();
                }
            }
        }


        
    }

    /**
     * 获取当前模块记录
     * @adminMenu(
     *     'name'   => '获取当前模块记录',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '获取当前模块记录',
     *     'param'  => ''
     * )
     */
    public function getAsideData(){
        $page_size = 11;
        $search = $this -> request -> param('search');
        $page = $this -> request -> param('page',1,'intval');

        $tableData = Db::name("IndexAside") 
        -> where('block',$this -> request -> param('block',0,'intval'))
        -> whereLike("file_name","%".$search."%")
        -> limit(($page-1)*$page_size,$page_size)
        -> order("sort,date desc")
        -> select();

        $total =  Db::name("IndexAside") 
        -> where('block',$this -> request -> param('block',0,'intval'))
        -> whereLike("file_name","%".$search."%")
        -> count();

        $data['tableData'] = $tableData;
        $data['page_size'] = $page_size;
        $data['total'] = $total;

        echo json_encode($data);
    }


    /**
     * 删除侧边栏的文件跟记录
     * @adminMenu(
     *     'name'   => '删除侧边栏的文件跟记录',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '删除侧边栏的文件跟记录',
     *     'param'  => ''
     * )
     */
    public function delAsideData(){

        $id = $this -> request -> param('id',0,'intval');
        $info = Db::name("IndexAside") -> find($id);
        $del_file_flag = unlink($info['path']);

        if($del_file_flag){
            $affectRow = Db::name("IndexAside") -> delete($id);
            echo $affectRow;
        }else{
            echo 0;
        }
        
    }

    /**
     * 修改记录
     * @adminMenu(
     *     'name'   => '修改记录',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '修改记录',
     *     'param'  => ''
     * )
     */
    public function editItem(){

        $params = $this -> request -> param();
        $update_arr[$params['field']] = $params['newV'];
        $update_arr['id'] = $params['id'];
        $affect = Db::name("IndexAside") -> update($update_arr);
        echo $affect;
    }

    /**
     * 导出阅读记录
     * @adminMenu(
     *     'name'   => '导出阅读记录',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '导出阅读记录',
     *     'param'  => ''
     * )
     */
    public function exportAside(){
        $CLogModel = model('CLog');
        $CLogModel -> exportFileLog(36,'share_index_aside','file_name');
    }

     /**
     * 设置文件可见权限
     * @adminMenu(
     *     'name'   => '设置文件可见权限',
     *     'parent' => 'AsideSet',
     *     'display'=> false,
     *     'hasView'=> false,
     *     'order'  => 1,
     *     'icon'   => '',
     *     'remark' => '设置文件可见权限',
     *     'param'  => ''
     * )
     */
    public function setAuth(){
        $params = $this -> request -> param();

        $data['auth_dept'] = json_encode($params['authDept']);
        $data['auth_job'] = implode(',',$params['authJob']);
        $affect = Db::name("IndexAside") -> where("id",'in', implode(',',$params['fileIds']) ) -> update($data);

        echo $affect;
    }

    /**
     * 查看可见范围
     * @adminMenu(
     *     'name'   => '查看可见范围',
     *     'parent' => 'AsideSet',
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
        $data = Db::name("IndexAside") -> field('auth_dept,auth_job') -> find($id);
        $retuanData['authDept'] = json_decode($data['auth_dept']);
        $retuanData['authJob'] = $data['auth_job'];

        echo json_encode($retuanData);
    }
}