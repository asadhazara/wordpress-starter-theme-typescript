<?php

namespace Lib\Blocks;

class BlockCategory
{

  public function register()
  {
    add_filter('block_categories', array($this, 'registerBlockCategory'), 10, 2);
  }

  public function registerBlockCategory($categories)
  {
    return array_merge(
      $categories,
      array(
        array(
          'slug' => 'zorrilla',
          'title' => __('Zorrilla', 'zorrilla'),
        ),
      )
    );
  }
}
