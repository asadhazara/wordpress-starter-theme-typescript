<?php

namespace Zorrilla\Base;

class NavMenu
{
  protected $menus = array();

  public function register()
  {
    $this->setMenus();

    if (!empty($this->menus)) {
      add_action('after_setup_theme', array($this, 'registerMenus'));
    }
  }

  public function setMenus()
  {
    $this->menus = array(
      array(
        'location'      => 'primary',
        'description'   => 'Primary Navigation Menu',
      ),
    );
  }

  public function registerMenus()
  {
    foreach ($this->menus as $menu) register_nav_menu($menu['location'], $menu['description']);
  }
}
