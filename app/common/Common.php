<?php
namespace app\common;


class Common{

    /**
     * 计算时间戳之间的时间差
     */
    public function tamp_time_diff($second){
        $hour = floor($second/3600);

        $minute = floor(($second-$hour*3600)/60);

        $s = $second-$hour*3600-$minute*60;

        //返回字符串
        return $hour.'小时'.$minute.'分'.$s.'秒';
    }
}