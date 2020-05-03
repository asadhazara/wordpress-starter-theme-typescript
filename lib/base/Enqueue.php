<?php

namespace Lib\Base;

class Enqueue
{
  public function register()
  {
    // admin scripts
    add_action('admin_enqueue_scripts', array($this, 'adminEnqueue'));

    // front-end scripts
    add_action('wp_enqueue_scripts', array($this, 'wpEnqueue'));
  }

  function adminEnqueue($hook)
  {
    // enqueue all admin scripts
    // wp_enqueue_style('zorrilla-admin', THEME_URI . '/assets/css/admin.min.css');

    // wp_enqueue_script(
    //   'zorrilla-admin',
    //   THEME_URI . '/assets/js/admin.min.js',
    //   array('wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'),
    //   THEME_VERSION,
    //   true
    // );
  }

  function wpEnqueue()
  {
    // enqueue all front-end scripts
    wp_enqueue_style('zorrilla', THEME_URI . '/assets/css/index.min.css', array(), THEME_VERSION, 'all');

    wp_enqueue_script(
      'zorrilla',
      THEME_URI . '/assets/js/index.min.js',
      array('wp-element'),
      THEME_VERSION,
      true
    );

    // add wordpress site details
    // wp_localize_script('zorrilla-scripts', 'SITE', get_object_vars(new \Timber\Site));
  }
}
