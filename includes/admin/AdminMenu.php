<?php

namespace Zorrilla\Admin;

class AdminMenu
{
  protected $pages = array();

  protected $subpages = array();

  public function register()
  {
    $this->setPages();

    $this->setSubPages();

    if (!empty($this->pages) || !empty($this->subpages)) {
      add_action('admin_menu', array($this, 'addAdminMenu'));
    }
  }

  protected function setPages()
  {
    $this->pages = array(
      array(
        'page_title' => 'Zorrilla',
        'menu_title' => 'Zorrilla',
        'capability' => 'manage_options',
        'menu_slug' => 'zorrilla',
        'callback' => false,
        'icon_url' => 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.03226 13.6932H14.8495V16H5L10.957 6.32955H5.13978V4H15L9.03226 13.6932Z" fill="#F42C04" /></svg>'),
        'position' => 1
      )
    );
  }

  protected function setSubPages()
  {
    // $this->withSubPage('Zorrilla');

    // $this->subpages = array_merge($this->subpages, array(
    //   array(
    //     'parent_slug' => 'edit.php?post_type=sta-op-stoelen',
    //     'page_title' => 'Relaxstoelen',
    //     'menu_title' => 'Relaxstoelen',
    //     'capability' => 'manage_options',
    //     'menu_slug' => 'edit.php?post_type=relaxstoelen',
    //     'callback' => false
    //   ),
    // ));
  }

  public function withSubPage(string $title = null)
  {

    if (empty($this->pages)) {
      return $this;
    }

    $pages = $this->pages[0];

    $subpage = array(
      array(
        'parent_slug' => $pages['menu_slug'],
        'page_title' => $pages['page_title'],
        'menu_title' => ($title) ? $title : $pages['menu_title'],
        'capability' => $pages['capability'],
        'menu_slug' => $pages['menu_slug'],
        'callback' => $pages['callback']
      )
    );

    $this->subpages = $subpage;

    return $this;
  }

  public function addAdminMenu()
  {
    foreach ($this->pages as $page) {
      add_menu_page(
        $page['page_title'],
        $page['menu_title'],
        $page['capability'],
        $page['menu_slug'],
        $page['callback'],
        $page['icon_url'],
        $page['position']
      );
    }

    foreach ($this->subpages as $page) {
      add_submenu_page(
        $page['parent_slug'],
        $page['page_title'],
        $page['menu_title'],
        $page['capability'],
        $page['menu_slug'],
        $page['callback']
      );
    }
  }
}
