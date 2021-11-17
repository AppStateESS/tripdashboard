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

function tripdashboard_install(&$content)
{
    $db = Database::getDB();
    $tbl = $db->buildTable('tripdash_sites');
    $tbl->addDataType('branchDirectory', 'varchar', 255);
    $tbl->addPrimaryIndexId();
    $tbl->create();
    $content[] = 'Site table created.';
    return true;
}
