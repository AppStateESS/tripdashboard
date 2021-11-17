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

namespace tripdashboard\View;

use phpws2\Template;

class FrontPageView extends AbstractView
{

    public static function admin()
    {
        return SearchView::form();
    }

    public static function user()
    {
        $auth = \Current_User::getAuthorization();
        if (!empty($auth->login_link)) {
            $url = $auth->login_link;
        } else {
            $url = 'index.php?module=users&action=user&command=login_page';
        }
        $template = new Template(['url' => $url]);
        $template->setModuleTemplate('tripdashboard', 'Login.html');
        return $template->get();
    }

}
