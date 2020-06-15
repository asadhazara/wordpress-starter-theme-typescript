<?php

namespace Zorrilla;

use Zorrilla\Admin\ACFSettings;
use Zorrilla\Admin\AdminHead;
use Zorrilla\Admin\AdminMenu;
use Zorrilla\Base\Activate;
use Zorrilla\Base\NavMenu;
use Zorrilla\Base\Enqueue;
use Zorrilla\Base\Support;
use Zorrilla\Base\Twig;
use Zorrilla\Blocks\BlockCategory;
use Zorrilla\Blocks\CustomBlockType;
use Zorrilla\Posts\CustomPostType;
use Timber\Timber;
use Zorrilla\Admin\CustomRoles;
use Zorrilla\WooCommerce\RestApi;

final class Init
{
  /**
   * Store all the classes inside an array
   * @return array Full list of classes
   */
  public static function getServices()
  {
    return [
      Activate::class,

      AdminHead::class,
      AdminMenu::class,
      ACFSettings::class,
      CustomRoles::class,

      Timber::class,
      Enqueue::class,
      Support::class,
      NavMenu::class,
      Twig::class,
      BlockCategory::class,
      CustomBlockType::class,
      CustomPostType::class,

      // RestApi::class,
    ];
  }

  /**
   * Loop through the classes, initialize them,
   * and call the register() method if it exists
   * @return
   */
  public static function registerServices()
  {
    foreach (self::getServices() as $class) {
      $service = self::instantiate($class);
      if (method_exists($service, 'register')) {
        $service->register();
      }
    }
  }

  /**
   * Initialize the class
   * @param  class $class class from the services array
   * @return class instance new instance of the class
   */
  private static function instantiate($class)
  {
    $service = new $class();

    return $service;
  }
}
