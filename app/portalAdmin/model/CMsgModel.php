<?php 
namespace app\portalAdmin\model;
use think\Db;
use think\Model;

class CMsgModel extends Model{

    public function getNews($user_id){
        $msg_all = $this -> where('user_id',$user_id) ->  count();
        $msg_focus_all = Db::name('CFocusMsg') -> where('user_id',$user_id) ->  count();

        $data['all'] = intval($msg_all) + intval($msg_focus_all);
        $data['msg_type1'] = $this -> where(['user_id'=>$user_id,'msg_type'=>1]) ->  count();
        $data['msg_type2'] = $this -> where(['user_id'=>$user_id,'msg_type'=>2]) ->  count();
        $data['msg_type3'] = $this -> where(['user_id'=>$user_id,'msg_type'=>3]) ->  count();
        $data['msg_type4'] = $this -> where(['user_id'=>$user_id,'msg_type'=>4]) ->  count();
        $data['msg_type5'] = $msg_focus_all;

        return $data;
    }

    public function saveMsg($article_id,$msg_type){

        $info = Db::name('CArticle')  -> field('id,user_id') -> find($article_id);
        $user_id = $info['user_id'];
        $exit_msg = $this -> where(['user_id'=>$user_id,'article_id'=>$article_id,'msg_type'=>$msg_type]) -> count();
        $rs = 0;
        //if(!$exit_msg){
        $rs = Db::name("CMsg") -> insert(['user_id'=>$user_id,'article_id'=>$article_id,'msg_type'=>$msg_type,'date'=>date("Y-m-d h:i:s")]);
        //}
        // else{
        //     $rs = Db::name('CMsg') -> where(['user_id'=>$user_id,'article_id'=>$article_id]) -> update(['msg_type'=>$msg_type,'date'=>date("Y-m-d h:i:s")]);
        // }

        return $rs;
    }

    public function delMsg($article_id,$msg_type){
        $info = Db::name('CArticle')  -> field('id,user_id') -> find($article_id);
        $user_id = $info['user_id'];
        $exit_msg = Db::name('CMsg') -> where(['user_id'=>$user_id,'article_id'=>$article_id,'msg_type'=>$msg_type]) -> count();
        $rs=0;
        if($exit_msg){
            $rs = Db::name("CMsg") -> where(['user_id'=>$user_id,'article_id'=>$article_id,'msg_type'=>$msg_type]) -> delete();
        }
        return $rs;
    }

}