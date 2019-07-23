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
        if(session('?user_info','portal')){
            $this -> redirect("staff");
        }else{
            return $this -> fetch();
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
        session(null,'portal');
        $this -> redirect("login");
    }
}