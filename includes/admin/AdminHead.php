<?php

namespace Zorrilla\Admin;

class AdminHead
{
  public function register()
  {
    add_action('login_head', array($this, 'addFavicon'));
    add_action('admin_head', array($this, 'addFavicon'));
  }

  public function addFavicon()
  {
    echo '<link rel="icon" type="image/png" href="' . THEME_URI . '/assets/images/favicon/favicon.png" />';
  }
}
