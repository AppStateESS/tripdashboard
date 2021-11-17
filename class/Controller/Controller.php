<?php

/**
 * MIT License
 * Copyright (c) 2020 Electronic Student Services @ Appalachian State University
 *
 * See LICENSE file in root directory for copyright and distribution permissions.
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 * @license https://opensource.org/licenses/MIT
 */

namespace tripdashboard\Controller;

use Canopy\Request;
use phpws2\Database;
use tripdashboard\Factory\MemberFactory;

class Controller extends \phpws2\Http\Controller
{

    protected $role;
    protected $subcontroller;

    public function __construct(\Canopy\Module $module, Request $request)
    {
        parent::__construct($module);
        $this->loadSubController($request);
    }

    /**
     * Loads controller based on Role and Resource.
     * @param Request $request
     * @throws \tripdashboard\Exception\PrivilegeMissing
     * @throws \tripdashboard\Exception\BadCommand
     */
    private function loadSubController(Request $request)
    {
        $subController = filter_var($request->shiftCommand(), FILTER_SANITIZE_STRING);

        if (!\Current_User::allow('tripdashboard')) {
            throw new \tripdashboard\Exception\PrivilegeMissing;
        }

        if (empty($subController)) {
            throw new \tripdashboard\Exception\BadCommand('missing subcontroller');
        }

        $subControllerName = '\\tripdashboard\\Controller\\' . $subController;
        if (!class_exists($subControllerName)) {
            throw new \tripdashboard\Exception\BadCommand($subControllerName);
        }
        $this->subcontroller = new $subControllerName($this->role);
    }

    public function execute(Request $request)
    {
        try {
            return parent::execute($request);
        } catch (\tripdashboard\Exception\PrivilegeMissing $e) {
            \Current_User::requireLogin();
        } catch (\Exception $e) {
            if (TRIPDASH_SYSTEM_SETTINGS['friendlyErrors']) {
                \phpws2\Error::log($e);
                $controller = new \tripdashboard\Controller\FriendlyErrorController($this->getModule());
                return $controller->get($request);
            } else {
                throw $e;
            }
        }
    }

    public function post(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function patch(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function delete(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function put(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function get(Request $request)
    {
        if ($request->isAjax() || (bool) $request->pullGetBoolean('json', true)) {
            return $this->subcontroller->getJson($request);
        } else {
            return $this->subcontroller->getHtml($request);
        }
    }

}
