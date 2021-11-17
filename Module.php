<?php

/**
 * MIT License
 * Copyright (c) 2021 Electronic Student Services @ Appalachian State University
 *
 * See LICENSE file in root directory for copyright and distribution permissions.
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 * @license https://opensource.org/licenses/MIT
 */

namespace tripdashboard;

use Canopy\Request;
use Canopy\Response;
use Canopy\Server;
use tripdashboard\Controller\Controller;

$defineFile = PHPWS_SOURCE_DIR . 'mod/tripdashboard/config/defines.php';
if (is_file($defineFile)) {
    require_once $defineFile;
} else {
    require_once PHPWS_SOURCE_DIR . 'mod/tripdashboard/config/defines.dist.php';
}

class Module extends \Canopy\Module
{

    public function __construct()
    {
        parent::__construct();
        $this->setTitle('tripdashboard');
        $this->setProperName('Travel Report Dashboard');
        \spl_autoload_register('\tripdashboard\Module::autoloader', true, true);
    }

    public static function autoloader($class_name)
    {
        static $not_found = array();

        if (strpos($class_name, 'tripdashboard') !== 0) {
            return;
        }

        if (isset($not_found[$class_name])) {
            return;
        }
        $class_array = explode('\\', $class_name);
        $shifted = array_shift($class_array);
        $class_dir = implode('/', $class_array);

        $class_path = PHPWS_SOURCE_DIR . 'mod/tripdashboard/class/' . $class_dir . '.php';

        if (is_file($class_path)) {
            require_once $class_path;
            return true;
        } else {
            $not_found[] = $class_name;
            return false;
        }
    }

    public function runTime(Request $request)
    {
        if (\phpws\PHPWS_Core::atHome()) {
            if (\Current_User::allow('tripdashboard')) {
                \Layout::add(View\FrontPageView::admin());
            } else {
                \Layout::add(View\FrontPageView::user());
            }
        }
    }

    public function getController(Request $request)
    {
        try {
            $controller = new Controller($this, $request);
            return $controller;
        } catch (\tripdashboard\Exception\PrivilegeMissing $e) {
            if ($request->isGet() && !$request->isAjax()) {
                $auth = \Current_User::getAuthorization();
                if (!empty($auth->login_link)) {
                    $url = $auth->login_link;
                } else {
                    $url = 'index.php?module=users&action=user&command=login_page';
                }
                \phpws\PHPWS_Core::reroute($url);
            } else {
                throw $e;
            }
        } catch (\Exception $e) {
            if (TRIPDASH_SYSTEM_SETTINGS['friendlyErrors']) {
                \phpws2\Error::log($e);
                $controller = new \tripdashboard\Controller\FriendlyErrorController($this);
                return $controller;
            } else {
                throw $e;
            }
        }
    }

}
