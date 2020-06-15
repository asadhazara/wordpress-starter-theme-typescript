<?php

namespace Zorrilla\WooCommerce;

class RestApi
{

  public function register()
  {
    add_action('rest_api_init', array($this, 'registerRestRoutes'), 10);
  }

  public function registerRestRoutes()
  {
    //
  }
}
