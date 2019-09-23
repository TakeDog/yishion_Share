<?php
use think\Controller;
// 应用公共文件
function getClientIp(){
    $request = request();
    return $request -> ip();
}

function getUser($field){
    $data = session('user_info','','portal');
    return $data[$field];
}

function setUser($field,$data){
    $user_info = session('user_info','','portal');
    $user_info[$field] = $data;
    session('user_info',$user_info,'portal');
}

//生成num位随机字符;
function getRandomStr($num){
    $str = []; 
    $uppercase = "A";
    $lowercase = "a";
    for($i=0;$i<26;$i++){
        $str[] = $uppercase;
        $uppercase++;
    }
    for($i=0;$i<26;$i++){
        $str[] = $lowercase;
        $lowercase++;
    }
    for($i=0;$i<10;$i++){
        $str[] = $i;
    }


    $nonceStr ="";
    $max = count($str) - 1;
    //生成num位随机字符;
    for($i=0;$i<$num;$i++){
        $index = rand(0,$max);
        $nonceStr .= $str[$index];      
    }
    return $nonceStr;
}



/*发送get请求*/
function getRequest($url,$agreement='http'){
    //$url为拼接好参数了的url地址
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    if($agreement == 'https'){
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); //https请求 不验证证书和hosts
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
    }
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

/*发送post请求*/
function postRequest($url,$data=null,$agreement='http'){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);

    //https协议要加这两项;当请求https的数据时，会要求证书，这时候，加上下面这两个参数，规避ssl的证书检查
    if($agreement == 'https'){
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); //https请求 不验证证书和hosts
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
    }
    //发送post数据
    if($data){
        curl_setopt($ch, CURLOPT_POST, 1);	//像表单一样提交post请求
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data); //post的数据
    }
    //把抓取到的网页内容解析成普通字符
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}


/**
 * [将Base64图片转换为本地图片并保存]
 * @E-mial wuliqiang_aa@163.com
 * @TIME   2017-04-07
 * @WEB    http://blog.iinu.com.cn
 * @param  [Base64] $base64_image_content [要保存的Base64]
 * @param  [目录] $path [要保存的路径]
 */
function base64_image_content($base64_image_content,$path){
    //匹配出图片的格式
    if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $base64_image_content, $result)){
        $type = $result[2];
        $new_file = $path."/".date('Ymd',time())."/";
        if(!file_exists($new_file)){
            //检查是否有该文件夹，如果没有就创建，并给予最高权限
            mkdir($new_file, 0700);
        }
        $new_file = $new_file.time().getRandomStr(10).".{$type}";
        if (file_put_contents($new_file, base64_decode(str_replace($result[1], '', $base64_image_content)))){
            return '/'.$new_file;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function redirectFile($path){
    $extensionArr = explode(".",$path);
    $extension = array_pop($extensionArr);
    
    if($extension == 'pdf'){
        return "/static/lib/pdf.js/web/viewer.html?file=$path";
    }
    return $path;
}

