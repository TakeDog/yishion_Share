<?php
namespace app\portal\controller;
use think\Db;
use think\Controller;
use cmf\controller\HomeBaseController;

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

        return redirect(redirectFile($path));
    }
}