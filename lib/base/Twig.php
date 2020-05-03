<?php

namespace Lib\Base;

use Timber\Menu;

class Twig
{
  public function register()
  {
    add_filter('timber_context', array($this, 'addContext'));
  }

  public function addContext($context)
  {

    $context['primary_menu'] = new Menu('main-navigation');

    return $context;
  }
}
