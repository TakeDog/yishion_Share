<?php
namespace app\portal\controller;
use think\Db;
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
            $data = Db::name('WorkInfo') -> where('id',$where['id']) -> order('sort') -> select();
        }
        return json($data);
    }

    public function getFiles(){
        $pid = $this -> request -> param("pid",0,"intval");
        $page = $this -> request -> param("page",1,"intval");
        $size = $this -> request -> param("size",5,"intval");
        
        $total = Db::name('WorkInfo') -> where('pid',$pid) -> count();
        $current = $page * $size;

        $data = Db::name('WorkInfo') -> where('pid',$pid) -> order('sort') -> limit(0,$current) -> select();
        $res['files'] = $data;
        $res['total'] = $total;
        return json($res);
    }

   
}