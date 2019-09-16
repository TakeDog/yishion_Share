<?php 
namespace app\portal\model;
use think\Db;
use think\Model;

class DeptModel extends Model{

    //获取所选部门对应的机构(pid=0);
    public function getFirstP($id){
        $data = $this -> find($id);
        if($data['pid'] == 0){
            return $id;
        }else{
            $pData = $this -> where('id',$data['pid']) -> find();
            return $this -> getFirstP($pData['id']);
        }
    }

}