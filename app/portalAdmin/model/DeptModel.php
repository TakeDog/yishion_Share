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
     
    public function getDeptNum($id){
        $data = $this -> find($id);
        return $data['num'];
    }

    //获取所选部门对应的机构id(pid=0);
    public function getFirstP($id){
        $data = $this -> find($id);
        if($data['pid'] == 0){
            return $id;
        }else{
            $pData = $this -> where('id',$data['pid']) -> find();
            return $this -> getFirstP($pData['id']);
        }
    }

    //获取所选部门对应的机构(pid=0);
    public function getFirstAllP($id){
        $data = $this -> find($id);
        if($data['pid'] == 0){
            return $data;
        }else{
            $pData = $this -> where('id',$data['pid']) -> find();
            return $this -> getFirstAllP($pData['id']);
        }
    }

    public function getJobNum($dept_id,$dept_type){
        $part = $this -> getFirstP($dept_id);
        $jobs = Db::name('Job') -> where(['ogn'=>$part,'dept_type'=>$dept_type]) -> select() -> toArray();
        foreach($jobs as $k => $v){
            $row = Db::name("JobNum") -> where(['dept_id'=>$dept_id,'job_id'=>$v['id']]) -> find();
            $jobs[$k]['num'] = count($row) ? $row['num'] : 0; //部门总人数;
            $jobs[$k]['exist'] = Db::name("CUser") -> where(['dept_id'=>$dept_id,'job_id'=>$v['id']]) -> count();
            $jobs[$k]['edit'] = false;
        }
        return $jobs;
    }
}