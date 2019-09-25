<?php
namespace app\portal\controller;
use think\Db;
use think\Controller;
use cmf\controller\HomeBaseController;
use app\common\AppLog;

class InfoController extends HomeBaseController{

    public function index(){
        return $this -> fetch();
    }

    public function getInfo(){
        $where = $this -> request -> param();
        
        
        if($where['id'] == -1){
            $data = Db::name('WorkInfo') -> where('files','') -> order('sort') -> select();
        }else{
            $data = Db::name('WorkInfo') -> where('id',$where['id']) -> order('sort,date desc') -> select();
        }
        return json($data);
    }

    public function getFiles(){
        $pid = $this -> request -> param("pid",0,"intval");
        $fileName = $this -> request -> param("fileName");
        $page = $this -> request -> param("page",1,"intval");
        $size = $this -> request -> param("size",3,"intval");
        
        $total = Db::name('WorkInfo') -> where('pid',$pid) ->where('name','like',"%$fileName%") -> count();
        $current = $page * $size;

        $data = Db::name('WorkInfo') -> where('pid',$pid) ->where('name','like',"%$fileName%") -> order('sort,date desc') -> limit(0,$current) -> select();

        $res['files'] = $data;
        $res['total'] = $total;
        return json($res);
    }

    public function sell_index(){
        return $this -> fetch();
    }


    public function openFile(){
        $path = $this -> request -> param("path");
        AppLog::addLog($this -> request -> param("file_name"));
        redirectFile($path);
    }

    public function fileList(){
        $root = "./static/PDF/运营指南/";
        $dir = $this -> request -> param('dir');
        $path =$root.$dir;
        
        $dirArr = explode('/',$dir);
        if( strpos(end($dirArr),'.') !== false ){
            AppLog::addLog(end($dirArr));
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


}