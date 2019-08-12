<?php
namespace app\portal\controller;
use think\Db;
use cmf\controller\HomeBaseController;

class InfoController extends HomeBaseController{

    public function index(){
        return $this -> fetch();
    }

   
}