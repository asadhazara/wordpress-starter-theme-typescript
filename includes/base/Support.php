<?php

namespace Zorrilla\Base;

class Support
{
  public function register()
  {
    add_action('after_setup_theme', array($this, 'addSupports'));
  }

  public function addSupports()
  {
    // add gutenberg supports
    add_theme_support('align-wide');

    add_theme_support('editor-styles');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    add_theme_support('html5', array('comment-form', 'comment-list', 'gallery', 'caption'));

    // woocommerce
    add_theme_support('woocommerce');
  }
}
