<?php
namespace app\portalAdmin\controller;
use think\Controller;
use think\Db;
use cmf\controller\AdminBaseController;


class YsWorkManagerController extends AdminBaseController{
    
    public function companyInfo(){
        return $this->fetch();
    }

    public function getInfo(){
        $where = $this -> request -> param();
        
        
        if($where['id'] == -1){
            $data = Db::name('WorkInfo') -> order('sort') -> select();
        }else{
            $data = Db::name('WorkInfo') -> where('id',$id) -> order('sort') ->select();
        }
        return json($data);
    }

    public function createInfo(){
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['name'] = $this -> request -> param("name");
        $data['icon'] = $this -> request -> param("icon")?$this -> request -> param("icon"):"";
        $data['sort'] = $this -> request -> param("sort",0,"intval");
        $data['del'] = $this -> request -> param("del",1,"intval");

        $res = Db::name("WorkInfo") -> insert($data);
        if($res){
            return 1001;
        }else{
            return 1002;
        }
    }

    public function updateInfo(){
        $data['id'] = $this -> request -> param("id",0,"intval");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['icon'] = $this -> request -> param("icon");
        $data['name'] = $this -> request -> param("name");
        $data['sort'] = $this -> request -> param("sort",0,"intval");
        $data['del'] = $this -> request -> param("del");
        
        $res = Db::name('WorkInfo') -> update($data);
        
        // if($where['id'] == -1){
        //     $data = Db::name('WorkInfo') -> order('sort') -> select();
        // }else{
        //     $data = Db::name('WorkInfo') -> where('id',$id) -> order('sort') ->select();
        // }
        if($res == 0){
            return 1003;
        }elseif($res > 0){
            return 1001;
        }else{
            return 1002;
        }
    }

    public function delInfo(){
        $data['id'] = $this -> request -> param("id",0,"intval");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $lev = $this -> request -> param("lev",0,"intval");
        $data['files'] = $this -> request -> param("files");
        
        if($lev == 3){
            if(file_exists($data['files'])){
                unlink($data['files']);
            }else{
                return 1004;
            }
        }
        $count = Db::name('WorkInfo') -> where('pid',$data['id']) -> count();
        if($count <= 0){
            $res = Db::name('WorkInfo') -> delete($data);
            if($res){
                return 1001;
            }else{
                return 1002;
            }
        }else{
            return 1003;
        }
    }

    public function uploadFile(){
        $files = $this -> request -> file("files");
        $data['pid'] = $this -> request -> param("pid",0,"intval");
        $data['sort'] = $this -> request -> param("sort",0,"intval");
        $data['del'] = $this -> request -> param("del",1,"intval");
        $data['date'] = date("Y-m-d H:i:s");
        foreach($files as $file){
            $in = $file -> getInfo();
            if($file){
                $info = $file->move('upload/portal/workInfo');
                if($info){
                    $data['files'] = 'upload/portal/workInfo/'.str_replace("\\","/",$info->getSaveName());
                    $data['name'] = str_replace(strrchr($in['name'],"."),"",$in['name']);
                    Db::name("WorkInfo") -> insert($data);
                }else{
                    // 上传失败获取错误信息
                    $res['status'] = 1002;
                    $res['msg'] = "上传失败！！！";
                    return json($res);
                }
            }
        }
        $res['status'] = 1001;
        $res['msg'] = "上传成功！！！";
        return json($res);
    }

    public function exportLog(){

        $CLogModel = model('Clog');
        $CLogModel -> exportFileLog(37,'share_work_info','name');

    }
}