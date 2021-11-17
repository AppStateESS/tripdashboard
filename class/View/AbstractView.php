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

namespace tripdashboard\View;

use Canopy\Request;
use phpws2\Template;

abstract class AbstractView
{

    const directory = PHPWS_SOURCE_DIR . 'mod/tripdashboard/';
    const http = PHPWS_SOURCE_HTTP . 'mod/tripdashboard/';

    protected static function getDirectory()
    {
        return self::directory;
    }

    protected static function getHttp()
    {
        return self::http;
    }

    private static function addScriptVars($vars)
    {
        if (empty($vars)) {
            return null;
        }
        foreach ($vars as $key => $value) {
            $varList[] = "const $key = " . json_encode($value, JSON_NUMERIC_CHECK) . ';';
        }
        return '<script type="text/javascript">' . implode('', $varList) . '</script>';
    }

    protected static function getScript($scriptName)
    {
        $jsDirectory = self::getHttp() . 'javascript/';
        if (TRIPDASH_SYSTEM_SETTINGS['productionMode']) {
            $path = $jsDirectory . 'build/' . self::getAssetPath($scriptName);
        } else {
            $path = "{$jsDirectory}dev/$scriptName.js";
        }
        $script = "<script type='text/javascript' src='$path'></script>";
        return $script;
    }

    protected static function getAssetPath($scriptName)
    {
        if (!is_file(self::getDirectory() . 'assets.json')) {
            exit('Missing assets.json file. Run "npm run build" in the tripdashboard directory.');
        }
        $jsonRaw = file_get_contents(self::getDirectory() . 'assets.json');
        $json = json_decode($jsonRaw, true);
        if (!isset($json[$scriptName]['js'])) {
            throw new \Exception('Script file not found among assets.');
        }
        return $json[$scriptName]['js'];
    }

    /**
     *
     * @staticvar boolean $vendor_included
     * @param string $view_name
     * @param boolean $add_anchor
     * @param array $vars
     * @return string
     */
    public static function scriptView($view_name, $vars = null)
    {
        static $vendor_included = false;
        if (!$vendor_included) {
            $script[] = self::getScript('vendor');
            $vendor_included = true;
        }
        if (!empty($vars)) {
            $script[] = self::addScriptVars($vars);
        }
        $script[] = self::getScript($view_name);
        $react = implode("\n", $script);
        \Layout::addJSHeader($react);
        $content = <<<EOF
<div id="$view_name"><p>Loading. Please wait.</p></div>
EOF;
        return $content;
    }

    private static function menuVars(string $active)
    {
        $vars = [];
        $vars['searchActive'] = null;
        $vars['settingActive'] = null;
        $vars['alert'] = false;

        switch ($active) {
            case 'search':
                $vars['searchActive'] = ' active';
                break;
            case 'setting':
                $vars['settingActive'] = ' active';
                break;
        }
        return $vars;
    }

    protected static function dashboardHTML(string $active, string $content)
    {
        $vars = self::menuVars($active);
        $vars['dashboard'] = $content;
        return self::dashboardTemplate($vars);
    }

    protected static function dashboardScript(string $active, string $script = null, array $scriptVars = [])
    {
        $vars = self::menuVars($active);
        $vars['dashboard'] = self::scriptView($script, $scriptVars);
        return self::dashboardTemplate($vars);
    }

    private static function dashboardTemplate(array $vars)
    {
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('tripdashboard', 'Dashboard.html');
        return $template->get();
    }

}
