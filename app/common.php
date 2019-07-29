<?php
// 应用公共文件
function getClientIp(){
    $request = request();
    return $request -> ip();
}

function getUser($field){
    $data = session('user_info','','portal');
    return $data[$field];
}
