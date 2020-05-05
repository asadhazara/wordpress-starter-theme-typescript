<?php

namespace Lib\Posts;

class CustomPostType
{
  protected $custom_post_types = array();

  protected $post_types = array();

  public function register()
  {
    $this->setPostTypes();

    if (!empty($this->post_types)) {
      $this->storeCustomPostTypes();

      add_action('init', array($this, 'registerCustomPostTypes'));
    }
  }

  public function setPostTypes()
  {
    $this->post_types = array(
      array(
        'post_type'             => 'cases',
        'plural_name'           => 'Cases',
        'singular_name'         => 'Case',
        'show_in_menu'          => 'zorrilla',
      ),
    );
  }

  protected function storeCustomPostTypes()
  {
    foreach ($this->post_types as $type) {
      $this->custom_post_types[] = array(
        'post_type'             => $type['post_type'],
        'name'                  => _x($type['plural_name'], 'Post Type General Name', THEME_TEXT_DOMAIN),
        'singular_name'         => _x($type['singular_name'], 'Post Type Singular Name', THEME_TEXT_DOMAIN),
        'menu_name'             => __($type['plural_name'], THEME_TEXT_DOMAIN),
        'name_admin_bar'        => __($type['singular_name'], THEME_TEXT_DOMAIN),
        'archives'              => __($type['singular_name'] . ' Archives', THEME_TEXT_DOMAIN),
        'attributes'            => __($type['singular_name'] . ' Attributes', THEME_TEXT_DOMAIN),
        'parent_item_colon'     => __('Parent ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'all_items'             => __('All ' . $type['plural_name'], THEME_TEXT_DOMAIN),
        'add_new_item'          => __('Add New ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'add_new'               => __('Add ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'new_item'              => __('New ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'edit_item'             => __('Edit ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'update_item'           => __('Update ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'view_item'             => __('View ' . $type['singular_name'], THEME_TEXT_DOMAIN),
        'view_items'            => __('View ' . $type['plural_name'], THEME_TEXT_DOMAIN),
        'search_items'          => __('Search ' . $type['plural_name'], THEME_TEXT_DOMAIN),
        'not_found'             => __('No ' . $type['singular_name'] . ' Found', THEME_TEXT_DOMAIN),
        'not_found_in_trash'    => __('No ' . $type['singular_name'] . ' Found in Trash', THEME_TEXT_DOMAIN),
        'items_list'            => __($type['plural_name'] . ' List', THEME_TEXT_DOMAIN),
        'items_list_navigation' => __($type['plural_name'] . ' List Navigation', THEME_TEXT_DOMAIN),
        'filter_items_list'     => __('Filter' . $type['plural_name'] . ' List', THEME_TEXT_DOMAIN),
        'label'                 => __($type['singular_name'], THEME_TEXT_DOMAIN),
        'description'           => __($type['plural_name'] . ' Custom Post Type', THEME_TEXT_DOMAIN),
        'supports'              => $type['supports'] ?? array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields'),
        'taxonomies'            => $type['taxonomies'] ?? array(),
        'hierarchical'          => $type['hierarchical'] ?? false,
        'public'                => $type['public'] ?? true,
        'show_ui'               => $type['show_ui'] ?? true,
        'show_in_menu'          => $type['show_in_menu'],
        'menu_position'         => $type['menu_position'] ?? -1,
        'show_in_admin_bar'     => $type['show_in_admin_bar'] ?? true,
        'show_in_nav_menus'     => $type['show_in_nav_menus'] ?? true,
        'can_export'            => $type['can_export'] ?? true,
        'has_archive'           => $type['public'] ?? true,
        'exclude_from_search'   => $type['exclude_from_search'] ?? false,
        'publicly_queryable'    => $type['publicly_queryable'] ?? true,
        'show_in_rest'          => $type['show_in_rest'] ?? true,
        'rest_base'             => $type['post_type'],
        'capability_type'       => 'post',
        'menu_icon'             => $type['menu_icon'] ?? 'dashicons-menu'
      );
    }
  }

  public function registerCustomPostTypes()
  {
    foreach ($this->custom_post_types as $post_type) {
      register_post_type(
        $post_type['post_type'],
        array(
          'labels' => array(
            'name'                  => $post_type['name'],
            'singular_name'         => $post_type['singular_name'],
            'menu_name'             => $post_type['menu_name'],
            'name_admin_bar'        => $post_type['name_admin_bar'],
            'archives'              => $post_type['archives'],
            'attributes'            => $post_type['attributes'],
            'parent_item_colon'     => $post_type['parent_item_colon'],
            'all_items'             => $post_type['all_items'],
            'add_new_item'          => $post_type['add_new_item'],
            'add_new'               => $post_type['add_new'],
            'new_item'              => $post_type['new_item'],
            'edit_item'             => $post_type['edit_item'],
            'update_item'           => $post_type['update_item'],
            'view_item'             => $post_type['view_item'],
            'view_items'            => $post_type['view_items'],
            'search_items'          => $post_type['search_items'],
            'not_found'             => $post_type['not_found'],
            'not_found_in_trash'    => $post_type['not_found_in_trash'],
            'items_list'            => $post_type['items_list'],
            'items_list_navigation' => $post_type['items_list_navigation'],
            'filter_items_list'     => $post_type['filter_items_list']
          ),
          'label'                     => $post_type['label'],
          'description'               => $post_type['description'],
          'supports'                  => $post_type['supports'],
          'taxonomies'                => $post_type['taxonomies'],
          'hierarchical'              => $post_type['hierarchical'],
          'public'                    => $post_type['public'],
          'show_ui'                   => $post_type['show_ui'],
          'show_in_menu'              => $post_type['show_in_menu'],
          'menu_position'             => $post_type['menu_position'],
          'show_in_admin_bar'         => $post_type['show_in_admin_bar'],
          'show_in_nav_menus'         => $post_type['show_in_nav_menus'],
          'can_export'                => $post_type['can_export'],
          'has_archive'               => $post_type['has_archive'],
          'exclude_from_search'       => $post_type['exclude_from_search'],
          'publicly_queryable'        => $post_type['publicly_queryable'],
          'capability_type'           => $post_type['capability_type'],
          'show_in_rest'              => $post_type['show_in_rest'],
          'menu_icon'                 => $post_type['menu_icon'],
        )
      );
    }
  }
}
