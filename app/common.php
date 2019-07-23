<?php
// 应用公共文件
function getClientIp(){
    $request = request();
    return $request -> ip();
}
