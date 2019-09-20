<?php

namespace app\user\validate;

use think\Validate;

class ActionMenuValidate extends Validate
{
    protected $rule = [
        'parent_id' => 'require',
        'name' => 'require',
        'url' => 'require',
        'status' => 'require'
    ];

    protected $message = [
        'parent_id.require' => '上级菜单不能为空',
        'name.require' => '名称不能为空',
        'url.require' => 'url不能为空',
        'status.require' => '状态不能为空'
    ];

    protected $scene = [
        'add' => ['name'],
    ];
}