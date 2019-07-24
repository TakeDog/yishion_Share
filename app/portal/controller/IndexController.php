<?php

namespace app\portal\controller;
use think\Controller;
use cmf\controller\HomeBaseController;

class IndexController extends HomeBaseController
{
    public function index(){
        return $this->fetch();
    }

    public function staff(){
        return $this -> fetch();
    }

    public function stranger(){
        return $this -> fetch();
    }

    public function staff_index(){
        return $this -> fetch();
    }

    public function login(){
        if(session('?user_info')){
            $this -> redirect("staff");
        }else{
            return $this -> fetch();
        }
    }

    public function regist(){
        return $this -> fetch();
    }

    public function register(){
        $user = input("post.");
    
        if(!$user['user_name']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$user['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        $res = model('c_user') -> registVerify($user);

        if($res && $res > 0){
            return json(array('code'=>1,'msg'=>'注册成功！！！'));
        }else{
            if($res == -1){
                return json(array('code'=>0,'msg'=>'注册失败，用户名已存在！！！'));
            }
            return json(array('code'=>0,'msg'=>'注册失败！！！'));
        }
    }

    //登录验证
    public function verify(){
        $query = input("post.");
    
        if(!$query['user']) return json(array('code'=>0,'msg'=>'用户名不能为空'));

        if(!$query['pwd'])  return json(array('code'=>0,'msg'=>'密码不能为空'));

        $info = model('c_user') -> loginVerify($query['user'], $query['pwd']);  

        if(0 === $info)     return json(array('code'=>0,'msg'=>'账号不存在'));
        if(-1 === $info)    return json(array('code'=>0,'msg'=>'账号被禁用'));
        if(-2 === $info)    return json(array('code'=>0,'msg'=>'密码不正确'));

        if(1 == $info)      return json(array('code'=>1,'msg'=>'登录成功','url'=>'staff'));
    

    }
    //注销
    public function logout(){
        session(null);
        $this -> redirect("login");
    }

    //保存富文本内容
    public function saveEditor(){
        $data['content'] = input('post.content');
        //正则表达式匹配查找图片路径
        $pattern = '/<[img|IMG].*?src=[\'|\"](.*?(?:[\.gif|\.jpg|\.jpeg|\.png]))[\'|\"].*?[\/]?\>/i';
        preg_match_all($pattern,$data['content'],$res);
        $num=count($res[1]);
        for($i=0;$i<$num;$i++){
            $ueditor_img=$res[1][$i];
            //新建日期文件夹
            $tmp_arr = explode('/',$ueditor_img);
            $oldFloder = './static/images/ueditor/img_temp/'.$tmp_arr[7];
            $newFloder = './static/images/ueditor/img/'.$tmp_arr[7];
            if(!is_dir($newFloder)){
                mkdir($newFloder,0777);
            }
            if(copy($oldFloder."/".$tmp_arr[8],$newFloder."/".$tmp_arr[8])){
                unlink($oldFloder."/".$tmp_arr[8]);
                $newimg=str_replace('/images_temp/','/img/',$ueditor_img);
                $data['content']=str_replace('/images_temp/','/img/',$data['content']);
            }
        }
        //数据库冇表
        // $result = Db::table('bbs')->insert($data);
        if($result > 1){
            return 1001;
        }else{
            return 1002;
        }
    }
}