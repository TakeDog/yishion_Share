<?php namespace app\common;



/**

 * Created by PhpStorm.

 * User: Administrator

 * Date: 2017/9/4

 * Time: 13:51

 */

class Category {

    private $childid;//栏目的所有子栏目id,id之间是用逗号隔开

    //组合一维数组

    Static Public function unlimitedForLevel($cate,$html='├',$reid=0,$level=0){

        $arr=array();

        foreach($cate as $v){

            if($v['pid']==$reid){

                $v['level']=$level+1;

                $v['html']=str_repeat($html,$level);

                $arr[]=$v;

                $arr=array_merge($arr,self::unlimitedForLevel($cate,$html,$v['id'],$level+1));

            }

        }

        return $arr;

    }

    //组合多维数组
    /**
     * 输出层级结构数组
     * 
     */
    Static Public function unlimitedForLayer($cate,$name='child',$reid=0,$pid='pid'){

        $arr=array();

        foreach($cate as $v){

            if($v[$pid]==$reid){

                $v[$name]=self::unlimitedForLayer($cate,$name,$v['id'],$pid);

                $arr[]=$v;

            }

        }

        return $arr;

    }

    //传递一个子分类ID返回所有父级分类

    Static Public function getParents($cate,$id){

        $arr=array();

        foreach($cate as $v){

            if($v['id']==$id){

                $arr[]=$v;

                $arr=array_merge(self::getParents($cate,$v['pid']),$arr);

            }

        }

        return $arr;

    }

    //传递一个父分类ID返回所有子级分类ID

    Static Public function getChildsId($cate,$reid){

        $arr=array();

        foreach($cate as $v){

            if($v['pid']==$reid){

                $arr[]=$v['id'];

                $arr=array_merge($arr,self::getChildsId($cate,$v['id']));

            }

        }

        return $arr;

    }

    //传递一个父分类ID返回所有子级分类

    Static Public function getChilds($cate,$reid){

        $arr=array();

        foreach($cate as $v){

            if($v['pid']==$reid){

                $arr[]=$v;

                $arr=array_merge($arr,self::getChilds($cate,$v['id']));

            }

        }

        return $arr;

    }

    /*yja 2017-11-1*/
    //传递一个父分类ID返回所有子分类;增加了leval层，与可自定义的键名
    /**
    *@param $cata -- 要进行分类的结果集;
    *@param $pid -- 父级ID;
    *@param $pkey -- 对应的键名;
    *@param $level -- 级别，最高级为0
    *@return arr 已分类的的数组; 
    **/
    Static Public function getAllChild($cate,$pid,$pkey,$level=0){
        static $arr = array();
        foreach ($cate as $value) {
            if($value[$pkey] == $pid){
                $value['level']=$level;
                $arr[] = $value;
                Category::getAllChild($cate,$value['id'],$pkey,$level+1);
            }
        }
        return $arr;
    }

}