<?php
namespace app\common;

class OperateConfig {

    private $configURL = "./../data/config/ConfigUI.json";

    public function getConfig(){
        if(file_exists($this -> configURL)){
            if(json_decode( file_get_contents($this->configURL))){
                return json_decode( file_get_contents($this->configURL));
            }else{
                return json_decode('{}');
            }
        }else{

            $file = fopen($this->configURL,'w');
            if($file){
                $content = json_decode('{}');
            }else{
                $content = false;
            }
            fclose($file);
            return $content;

        }
    }

    public function setConfig($obj){
        $file = fopen($this -> configURL,'w');
        $flag = fwrite($file,json_encode($obj));
        fclose($file);
        return $flag;
    }

}