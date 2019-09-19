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
     *     'parent' => 'default',
     *     'display'=> true,
     *     'hasView'=> true,
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
}