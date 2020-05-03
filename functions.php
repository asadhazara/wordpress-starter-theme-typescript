<?php

use Lib\Init;
use Timber\Timber;

if (!defined('ABSPATH')) exit; // Exit if accessed directly.

if (file_exists(dirname(__FILE__) . '/vendor/autoload.php'))
    require_once dirname(__FILE__) . '/vendor/autoload.php';

// Constants
define('THEME_DIR', get_template_directory());
define('THEME_URI', get_template_directory_uri());
define('THEME_VERSION', '0.0.1');

// Initialize funtions
Init::registerServices();

// set timber view 
Timber::$dirname = array('templates', 'views');

// Load Routes
$routes = glob(__DIR__ . '/lib/routes/*.php');

foreach ($routes as $route) require $route;
