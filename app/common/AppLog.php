<?php
namespace app\common;
use think\Db;

class AppLog {
    
    static public function addLog($mask=''){
        $request = request();
        $user_info = session('user_info','','portal');
        $param = $request->param();
        $paramStr = count($param) > 0 ? json_encode($param) : '';
        $action_id = self::getActionId(strtolower( $request->module()."/".$request->controller()."/".$request->action()));
        
        $affectRow = Db::name("CLog") -> insert([
            "action_id" => $action_id,
            "user_id" => $user_info['id'],
            "params" => $paramStr,
            "mask" => $mask,
            "date" => date("Y-m-d H:i:s")
        ]);

        //return $affectRow;
    }

    static private function getActionId($url){
        $data =  Db::name("CAction") -> where("lower(url)='".$url."'") -> find();
        return $data['id'];
    }
}