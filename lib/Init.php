<?php

namespace Lib;

use Lib\Base\Activate;
use Lib\Base\NavMenu;
use Lib\Base\Enqueue;
use Lib\Base\Support;
use Lib\Base\Twig;
use Timber\Timber;

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
      Timber::class,
      Enqueue::class,
      Support::class,
      NavMenu::class,
      Twig::class,
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
