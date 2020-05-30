<?php

namespace Zorrilla\Admin;

class ACFSettings
{
  public function register()
  {
    // Customize the url setting to fix incorrect asset URLs.
    add_filter('acf/settings/url', array($this, 'acfSettingsUrl'));
  }

  public function acfSettingsUrl($url)
  {
    return MY_ACF_URL;
  }
}
