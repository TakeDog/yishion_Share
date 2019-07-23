<?php 
namespace app\portal\behavior;
use think\Db;
use think\Exception;
use think\Controller;

class OperateBehavior extends Controller{
    
    // 定义需要排除的权限路由
    protected $exclude = [
        'portal/index/index',
        'portal/index/login',
        'portal/index/verify',
        'portal/index/test'
    ];

    // 定义未登陆需要排除的权限路由
    // protected $login = [
    //     'admin/login/index',
    //     'admin/login/loginverify',
    //     'admin/login/iebrowsernocompat',
    //     'admin/index/welcome',
    //     'mobile/login/ajaxpswlogin',
    //     'mobile/login/ajaxsmslogin',
    //     'mobile/login/sendsms',
    //     'mobile/login/ajaxupdatepsw',
    //     'mobile/login/ajaxisregister',
    //     'mobile/login/ajaxregister'
    // ];

    // 定义不需要检测权限的模块
    protected $moudel = ['union','mobile'];

    /**
     * 权限验证
     * @param Request $Request
     */
    public function run(){
        
        $Request = $this -> request;
        // 行为逻辑
        try {
            // 获取当前访问路由
            $url  = $this->getActionUrl();

            //if($user_info['super']){return;} // 超级用户不需要验证
            if(session('?user_info','','portal')){
                $user_info = session('user_info','','portal');
                if($user_info['super']){return;}
            }
            
            if(!session('?user_info','','portal') && !in_array($url, $this->exclude) && !in_array(strtolower($Request->module()), $this->moudel)){
                $this->error('请先登录','portal/index/login');
            }

            // 用户所拥有的权限路由
            $auth = session('auth','','portal')?session('auth','','portal'):[];

            if(!$auth  && !in_array($url, $this->exclude) && !in_array(strtolower($Request->module()), $this->moudel)){
                $this->error('请先登录1','portal/index/login');
            }

            if(!in_array($url, $auth) && !in_array($url, $this->exclude) && !in_array(strtolower($Request->module()), $this->moudel)){
                $this->redirect('/./templates/error.html?msg=您无查看权限',302);
                exit;
            }

        } catch (Exception $ex) {
            $this->error('执行错误'.$ex->getMessage());
            //exception('write log failed: '.$ex->getMessage(), 100006);
        }
    }

    /**
     * 获取当前访问路由
     * @param $Request
     * @return string
     */
    private function getActionUrl(){
        $Request = $this -> request;
        $module     = $Request->module();
        $controller = $Request->controller();
        $action     = $Request->action();
        $url        = $module.'/'.$controller.'/'.$action;
        return  strtolower($url);
    }
}