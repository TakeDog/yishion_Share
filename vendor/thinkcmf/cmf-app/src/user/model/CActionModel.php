<?php

namespace app\user\model;

use think\Model;

class CActionModel extends Model{

    public function menuCache(){
        $data = $this -> column('*');
        return $data;
    }

}