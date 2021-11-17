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

use Canopy\Request;
use tripdashboard\Factory\SearchFactory;

class Search extends SubController
{

    protected function viewHtml()
    {
        return \tripdashboard\View\SearchView::form();
    }

    protected function findJson(Request $request)
    {
        return SearchFactory::find($request->pullGetString('studentBannerId'));
    }

}
