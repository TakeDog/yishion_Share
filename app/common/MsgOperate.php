<?php 
namespace app\common;

class MsgOperate{
    private $user = "yichungd";
    private $pwd = "2019yishionguangdong";

    private function postRequest($url,$data=null,$agreement='http'){
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


    public function sendMsg($phone,$msg){
        $url = "http://www.qybor.com:8500/shortMessage";

        $post_data = "username=".$this->user."&passwd=".$this->pwd."&phone=".$phone."&msg=".urlencode($msg)."&needstatus=false&port=&sendtime=";

        //$post_data = "username=".$this->username."&passwd=".$this->passwd."&phone=".$phone."&msg=".urlencode($msg)."&needstatus=true&port=".$port."&sendtime=".$sendtime; 

        // $data = array(
        //     'username' => $this -> user,
        //     'passwd' => $this -> pwd,
        //     'phone' => $phone,
        //     'msg' => $msg,
        //     'needstatus' => 'false'
        // );
        // $data['username'] = $this -> user;
        // $data['passwd'] = $this -> pwd;
        // $data['phone'] = $phone;
        // $data['msg'] = $msg;
        // $data['needstatus'] = 'false';
        $result = $this -> postRequest($url, $post_data);
        return json_decode($result);
    }

}


?>

