<?php

namespace app\ysLive\controller;
use think\Controller;
use think\Db;
use cmf\controller\HomeBaseController;
use app\common\Category;

class IndexController extends HomeBaseController{

    public function index(){
        return $this->fetch();
    }

    public function home(){
        return $this->fetch();
    }

    public function ysDynamic(){
        return $this->fetch();
    }

}