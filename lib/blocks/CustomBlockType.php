<?php

namespace Lib\Blocks;

class CustomBlockType
{
  protected $custom_block_types = array();

  public function register()
  {
    if (!function_exists('register_block_type')) return;

    $this->setCustomBlockTypes();

    if (!empty($this->custom_block_types)) {
      add_action('init', array($this, 'registerCustomBlockTypes'));
    }
  }

  public function setCustomBlockTypes()
  {
    // $this->custom_block_types = array(
    //   array(
    //     'block_name' => 'zorrilla/hero',
    //     'render_callback' => array($this, 'heroBlockCallback'),
    //     'attributes' => array(),
    //   ),
    // );
  }

  // public function heroBlockCallback($attributes)
  // {
  //   return '<pre>Hero' . json_encode($attributes) . '</pre>';
  // }

  public function registerCustomBlockTypes()
  {
    foreach ($this->custom_block_types as $block_type) {
      register_block_type($block_type['block_name'], array(
        'render_callback'   => $block_type['render_callback'],
        'attributes'        => $block_type['attributes'],
      ));
    }
  }
}
