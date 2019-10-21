<?php

namespace app\portal\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;
use app\common\Category;
use app\common\OperateConfig;

class FeedbackController extends HomeBaseController{

   public function index(){
    
        return $this -> fetch();
   }

   /**关于纯分享 */
   public function website(){
        return $this -> fetch();
   }
   public function websiteHandle(){
       $form = $this -> request -> param();

       if(!$form['bug'] && !$form['suggest']){
            $this -> success('反馈成功，正在为您返回','Feedback/index');
            exit;
       }

       $user_info = session('user_info','','portal');

       $form['user_id'] = $user_info['id'];
       $form['date'] = date("Y-m-d H:i:s");
       $inserId = Db::name("CFeedbackWebsite") -> insert($form);

       if($inserId){
            $this -> success('反馈成功，正在为您返回','Feedback/index');
       }else{
            $this->error('反馈失败，正在为您返回');
       }
    }
   /**其他问题反馈 */
   public function other(){
        return $this -> fetch();
   }

   public function otherHandle(){

        $form = $this -> request -> param();

       if(!$form['bug']){
            $this -> success('反馈成功，正在为您返回','Feedback/index');
            exit;
       }

       $user_info = session('user_info','','portal');

       $form['user_id'] = $user_info['id'];
       $form['date'] = date("Y-m-d H:i:s");
       $inserId = Db::name("CFeedbackOther") -> insert($form);

       if($inserId){
            $this -> success('反馈成功，正在为您返回','Feedback/index');
       }else{
            $this->error('反馈失败，正在为您返回');
       }
   }
    public function productAbout(){
        return $this -> fetch();
    }

    public function storeAbout(){
        return $this -> fetch();
    }

    public function submitProductForm(){
        $user_info = session('user_info','','portal');
        $files = $this -> request -> file("files")?$this -> request -> file("files"):[];
        $data['product'] = $this -> request -> param("product");
        $data['question'] = $this -> request -> param("question");
        $data['user_id'] = $user_info['id'];
        $data['create_time'] = date("Y-m-d H:i:s");
        $data['imgs'] = "";
        foreach($files as $file){
            $in = $file -> getInfo();
            if($file){
                $info = $file->move('upload/portal/feedback');
                if($info){
                    $data['imgs'] .= 'upload/portal/feedback/'.str_replace("\\","/",$info->getSaveName()).";";
                }else{
                    // 上传失败获取错误信息
                    $res['status'] = 1002;
                    $res['msg'] = "上传失败！！！";
                    return json($res);
                }
            }
        }
        Db::name("CFeedbackProduct") -> insert($data);
        $res['status'] = 1001;
        $res['msg'] = "上传成功！！！";
        return json($res);
    }

    public function submitStoreForm(){
        $user_info = session('user_info','','portal');
        $data['store_num'] = $this -> request -> param("store_num");
        $data['store_name'] = $this -> request -> param("store_name");
        $data['need_support'] = $this -> request -> param("need_support");
        $data['feedback'] = $this -> request -> param("feedback");
        $data['user_id'] = $user_info['id'];
        $data['create_time'] = date("Y-m-d H:i:s");

        $resDb = Db::name("CFeedbackStore") -> insert($data);
        if($resDb){
            $res['msg'] = "提交成功！！！";
            $res['status'] = 1001;
            return json($res);
        }else{
            $res['msg'] = "提交失败！！！";
            $res['status'] = 1002;
            return json($res);
        }
    }

    public function editInfo(){

        $catetory = new Category();
        $option_data = Db::name("dept") -> select();
        $tree_data = Db::name("dept") -> order('id') ->select();
        $this -> assign('tree',json_encode($catetory -> unlimitedForLayer($tree_data)));
        $this -> assign('option',json_encode($catetory -> unlimitedForLevel($option_data,'|—')));
        return $this -> fetch();
    }

    //获取岗位
    public function getJob(){
        
        $dept_id = $this -> request -> param('dept_id');
        $part = model("Dept") -> getFirstP($dept_id);
        $deptMsg = model("Dept") -> find($dept_id);
        echo json_encode( Db::name("Job") -> where(['ogn'=>$part,'dept_type'=>$deptMsg['type']]) -> select() );

    }

    public function edit(){
        $param = $this -> request -> param();
        $file = $this -> request -> file("avatarFile");

        if($param['editPwd'] == "true"){
            $param['pwd'] = MD5($param['pwd']);
        }
        unset($param['editPwd']);

        if($file){
            $info = $file->move('upload/avatar');
            if($info){
                $param['avatar'] = 'upload/avatar/'.str_replace("\\","/",$info->getSaveName());
            }else{
                // 上传失败获取错误信息
                $message['msg'] = "头像上传失败！";
                $message['status'] = 1003;
                return json($message);
            }
        }

        $res = Db::name("c_user") -> update($param);

        if($res){
            model("CUser") -> setUserSessionById($param['id']);
            $message['msg'] = "修改个人信息成功！！！";
            $message['status'] = 1001;
            return json($message);
        }else{
            $message['msg'] = "修改个人信息失败！！！";
            $message['status'] = 1002;
            return json($message);
        }
    }
}