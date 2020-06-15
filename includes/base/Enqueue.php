<?php

namespace Zorrilla\Base;

use Timber\Site;

class Enqueue
{
  public function register()
  {
    // disable all woocommerce styles
    add_action('wp_enqueue_scripts', array($this, 'cleanWoocommerceScripts'), 99);

    // admin scripts
    add_action('admin_enqueue_scripts', array($this, 'adminEnqueue'));

    // front-end scripts
    add_action('wp_enqueue_scripts', array($this, 'wpEnqueue'));
  }

  function cleanWoocommerceScripts()
  {
    wp_dequeue_style('woocommerce_frontend_styles');
    wp_dequeue_style('woocommerce-general');
    wp_dequeue_style('woocommerce-layout');
    wp_dequeue_style('woocommerce-smallscreen');
    wp_dequeue_style('woocommerce_fancybox_styles');
    wp_dequeue_style('woocommerce_chosen_styles');
    wp_dequeue_style('woocommerce_prettyPhoto_css');
    wp_dequeue_script('selectWoo');
    wp_deregister_script('selectWoo');
    wp_dequeue_script('wc-add-payment-method');
    wp_dequeue_script('wc-lost-password');
    wp_dequeue_script('wc_price_slider');
    wp_dequeue_script('wc-single-product');
    wp_dequeue_script('wc-add-to-cart');
    wp_dequeue_script('wc-cart-fragments');
    wp_dequeue_script('wc-credit-card-form');
    wp_dequeue_script('wc-checkout');
    wp_dequeue_script('wc-add-to-cart-variation');
    wp_dequeue_script('wc-single-product');
    wp_dequeue_script('wc-cart');
    wp_dequeue_script('wc-chosen');
    wp_dequeue_script('woocommerce');
    wp_dequeue_script('prettyPhoto');
    wp_dequeue_script('prettyPhoto-init');
    wp_dequeue_script('jquery-blockui');
    wp_dequeue_script('jquery-placeholder');
    wp_dequeue_script('jquery-payment');
    wp_dequeue_script('fancybox');
    wp_dequeue_script('jqueryui');
  }

  function adminEnqueue($hook)
  {
    wp_enqueue_script(
      'zorrilla.admin',
      THEME_URI . '/assets/js/admin.min.js',
      array('wp-blocks', 'wp-element', 'wp-components', 'wp-i18n'),
      THEME_VERSION,
      true
    );

    // only add rest when not on local machine
    if (THEME_LOCAL) return;

    wp_enqueue_style('zorrilla.admin', THEME_URI . '/assets/css/admin.min.css', array(), THEME_VERSION, 'all');
    wp_enqueue_style('zorrilla.utilities', THEME_URI . '/assets/css/utilities.min.css', array(), THEME_VERSION, 'all');
  }

  function wpEnqueue()
  {
    // enqueue all front-end scripts
    wp_enqueue_script('zorrilla', THEME_URI . '/assets/js/index.min.js', array('wp-element'), THEME_VERSION, true);

    // add wordpress site details
    wp_localize_script('zorrilla', 'site', get_object_vars(new Site));

    // only add rest when not on local machine
    if (THEME_LOCAL) return;

    wp_enqueue_style('zorrilla', THEME_URI . '/assets/css/index.min.css', array(), THEME_VERSION, 'all');
    wp_enqueue_style('zorrilla.utilities', THEME_URI . '/assets/css/utilities.min.css', array(), THEME_VERSION, 'all');
  }
}
