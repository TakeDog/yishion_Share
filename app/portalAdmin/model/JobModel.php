<?php 
namespace app\portalAdmin\model;
use think\Db;
use think\Model;

class JobModel extends Model{

    //岗位分类数据
    public function jobClassify($data){
        
        $types = array();
        foreach($data as $k => $v){
            if(!in_array($v['dept_type'],$types)){
                array_push($types,$v['dept_type']);
            } 
        }

        $classify = array();
        foreach($types as $k => $v){
            $pData = Db::name("DeptType") -> find($v);
            
            $pChild = array();
            foreach($data as $kk => $vv){
                if($vv['dept_type'] == $v){
                    array_push($pChild,$vv);
                }
            }
            $pData['options'] = $pChild;
            $classify[] = $pData;
        }

        return $classify;

    }
    
}