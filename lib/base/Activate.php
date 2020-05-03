<?php

namespace Lib\Base;

class Activate
{
  public function register()
  {
    // The code that runs during the theme activation
    add_action("after_switch_theme", array($this, 'activate'));
  }

  public function activate()
  {
    flush_rewrite_rules();
  }
}
