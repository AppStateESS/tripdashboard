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

class SiteFactory
{

    /**
     * Checks for the existence of a branch directory
     * @param string $directory
     */
    public static function checkDirectory(string $directory)
    {
        $realPath = realpath($directory);
        if ($realPath === false) {
            return ['success' => false, 'message' => 'Directory not found.'];
        }
        $realPath .= preg_match('@/$@', $realPath) ? '' : '/';

        if (!is_dir($realPath)) {
            return ['success' => false, 'message' => 'Directory not found.'];
        }

        if (self::getByDirectory($realPath)) {
            return ['success' => false, 'message' => 'Branch site already exists.'];
        }

        $configFile = self::getConfigFile($realPath);
        if (!is_file($configFile)) {
            return ['success' => false, 'message' => 'Branch configuration file not found.'];
        }
        if (!self::checkTripTables($configFile)) {
            return ['success' => false, 'message' => 'Trip Track is not installed on this site.'];
        }
        return ['success' => true, 'branchDirectory' => $realPath];
    }

    private static function checkTripTables($configFile)
    {
        $db = self::loadSiteDBByConfig($configFile);
        return $db->tableExists('trip_trip');
    }

    public static function delete(int $siteId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('tripdash_sites');
        $tbl->addFieldConditional('id', $siteId);
        $db->delete();
    }

    private static function getConfigFile(string $branchDirectory)
    {
        return $branchDirectory . 'config/core/config.php';
    }

    public static function getByDirectory(string $directory)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('tripdash_sites');
        $tbl->addFieldConditional('branchDirectory', $directory);
        return $db->selectOneRow();
    }

    public static function getDSNFromConfig(string $configFile)
    {
        $content = file_get_contents($configFile);
        $lines = explode("\n", $content);
        foreach ($lines as $l) {
            if (preg_match("@^define\('PHPWS_DSN@", $l)) {
                return preg_replace("@define\('PHPWS_DSN\', ?'([^']+)'\);@", '\\1', $l);
            }
        }
    }

    public static function getMember($branchDirectory, $bannerId)
    {
        $siteDB = self::loadSiteDB($branchDirectory);
        $member = $siteDB->addTable('trip_member');
        $member->addFieldConditional('bannerId', $bannerId);
        return $siteDB->selectOneRow();
    }

    public static function getTrips(string $branchDirectory, string $bannerId)
    {
        $member = self::getMember($branchDirectory, $bannerId);
        if (empty($member)) {
            return null;
        }
        $siteDB = self::loadSiteDB($branchDirectory);
        $memToTrip = $siteDB->addTable('trip_membertotrip', null, false);
        $tripTbl = $siteDB->addTable('trip_trip');
        $tripTbl->addFieldConditional('timeDeparting', time(), '<');
        $tripTbl->addFieldConditional('timeReturn', time(), '>');
        $memToTrip->addFieldConditional('memberId', $member['id']);
        $cond = new Database\Conditional($siteDB, $tripTbl->getField('id'), $memToTrip->getField('tripId'), '=');
        $siteDB->joinResources($tripTbl, $memToTrip, $cond, 'left');
        return $siteDB->select();
    }

    public static function list()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('tripdash_sites');
        return $db->select();
    }

    public static function loadSiteDBByConfig($configFile)
    {
        $dsnString = self::getDSNFromConfig($configFile);
        $dsnArray = Database::parseDSN($dsnString);
        extract($dsnArray);
        $db = Database::getDB(new Database\DSN($dbtype, $dbuser, $dbpass, $dbname, $dbhost));
        return $db;
    }

    public static function loadSiteDB(string $branchDirectory)
    {
        $configFile = self::getConfigFile($branchDirectory);
        return self::loadSiteDBByConfig($configFile);
    }

    public static function save(string $branchDirectory)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('tripdash_sites');
        $tbl->addValue('branchDirectory', $branchDirectory);
        $db->insert();
    }

}
