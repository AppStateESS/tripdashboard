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
use phpws2\Database;

class Site extends SubController
{

    protected function listJson(Request $request)
    {
        return SiteFactory::list();
    }

    protected function delete(Request $request)
    {
        SiteFactory::delete($this->id);
        return ['success' => 1];
    }

}
