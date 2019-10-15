<?php 
namespace app\portalAdmin\model;
use think\Db;
use think\Model;

class DeptModel extends Model{

    static public function getFullName($id,$fullName=[]){

        if($id){
            $data = Db::name('Dept') -> find($id);
            array_unshift($fullName,$data['name']);
            $pid = $data['pid'];

            if($pid){
                $pData = Db::name('Dept') -> find($pid);
                array_unshift($fullName,$pData['name']);
                return self::getFullName($pData['pid'],$fullName);
            }else{
                return $fullName;
            }
        }else{
            return $fullName;
        }

        
    }
    
}