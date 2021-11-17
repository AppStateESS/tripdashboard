<?php

declare(strict_types=1);
/**
 * MIT License
 * Copyright (c) 2021 Electronic Student Services @ Appalachian State University
 *
 * See LICENSE file in root directory for copyright and distribution permissions.
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 * @license https://opensource.org/licenses/MIT
 */

namespace tripdashboard\Controller;

use tripdashboard\Controller\SubController;
use tripdashboard\Factory\SiteFactory;
use Canopy\Request;

class Setting extends SubController
{

    protected function viewHtml()
    {
        return \tripdashboard\View\SettingView::form();
    }

    protected function saveDirectoryJson(Request $request)
    {
        $directory = $request->pullGetString('directory');

        $result = SiteFactory::checkDirectory($directory);
        if ($result['success']) {
            SiteFactory::save($result['branchDirectory']);
        }
        return $result;
    }

}
