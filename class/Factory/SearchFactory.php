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

namespace tripdashboard\Factory;

use phpws2\Database;

class SearchFactory
{

    public static function find(string $bannerId)
    {
        $sites = SiteFactory::list();
        if (empty($sites)) {
            return;
        }

        $allTrips = [];
        $student = null;
        foreach ($sites as $site) {
            if (empty($student)) {
                $student = SiteFactory::getMember($site['branchDirectory'], $bannerId);
            }
            $trips = SiteFactory::getTrips($site['branchDirectory'], $bannerId);
            if (!empty($trips)) {
                $allTrips = array_merge($allTrips, $trips);
            }
        }
        return ['student' => $student, 'trips' => $allTrips];
    }

}
