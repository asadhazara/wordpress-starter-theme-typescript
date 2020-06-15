<?php

use Dotenv\Dotenv;
use Zorrilla\Init;
use Timber\Timber;

if (!defined('ABSPATH')) exit; // Exit if accessed directly.

if (file_exists(dirname(__FILE__) . '/vendor/autoload.php'))
  require_once dirname(__FILE__) . '/vendor/autoload.php';

// load .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Constants
define('THEME_DIR', get_template_directory());
define('THEME_URI', get_template_directory_uri());
define('THEME_VERSION', '0.0.1');
define('THEME_LOCAL', $_ENV['LOCAL'] === '1');
define('THEME_TEXT_DOMAIN', 'zorrilla');
define('MY_ACF_PATH', THEME_DIR . '/vendor/advanced-custom-fields/advanced-custom-fields-pro/');
define('MY_ACF_URL', THEME_URI . '/vendor/advanced-custom-fields/advanced-custom-fields-pro/');

// Include the ACF plugin.
include_once(MY_ACF_PATH . 'acf.php');

// Initialize funtions
Init::registerServices();

// set timber view 
Timber::$dirname = array('views', 'views');

// Load Routes
$routes = glob(__DIR__ . '/lib/routes/*.php');

foreach ($routes as $route) require $route;
