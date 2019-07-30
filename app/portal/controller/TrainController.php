<?php
namespace app\portal\controller;
use think\Db;
use cmf\controller\HomeBaseController;

class TrainController extends HomeBaseController{

    public function index(){
        return $this -> fetch();
    }

    public function detail(){
        return $this -> fetch();
    }
}