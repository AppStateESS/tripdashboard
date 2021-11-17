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
use phpws2\Database;

function tripdashboard_uninstall(&$content)
{
    $db = Database::getDB();

    $tbl = $db->addTable('tripdash_sites');
    $tbl->drop(true);
    $content[] = 'Dropped tripdash_sites table.';
    return true;
}
