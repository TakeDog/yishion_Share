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
     
    public function jobClassify2(){
        $data = $this -> alias('j') -> join("share_dept_type dt","j.dept_type = dt.dept_type_id","LEFT") -> join("share_dept d","j.ogn=d.id","LEFT") -> field("j.*,dt.name,d.name as ogn_name") -> select() -> toArray();

        $types = array();
        

        foreach($data as $k => $v){
            $str = $v['ogn'].'_'.$v['dept_type'];
            if(!in_array($str,$types)){
                array_push($types,$str);
            }
        }

        $classify = array();
        foreach($types as $k => $v){
            $strs = explode('_',$v);
            $ogn = $strs[0];
            $dept_type = $strs[1];
            
            $pChild = array();

            //$pData = $this -> alias('j') -> join("share_dept_type dt","j.dept_type = dt.dept_type_id","LEFT") -> join("share_dept d","j.ogn=d.id","LEFT") -> field("j.*,dt.name,d.name as ogn_name") -> where(['j.ogn'=>$ogn,'j.dept_type'=>$dept_type]) -> select();

            foreach($data as $kk => $vv){
                if($vv['dept_type'] == $dept_type && $vv['ogn'] == $ogn){
                    array_push($pChild,$vv);
                }
            }

            //$pData['options'] = $pChild;
            $classify[] = $pChild;
        }
        $classify2 = array();

        foreach($classify as $k => $v){
            $arr['dept_type'] = $v[0]['name'];
            $arr['ogn_name'] = $v[0]['ogn_name'];
            $arr['options'] = $v;
            array_push($classify2,$arr);
        }


        return $classify2;

    }
    
}