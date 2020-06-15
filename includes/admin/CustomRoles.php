<?php

namespace Zorrilla\Admin;

class CustomRoles
{
  protected $roles = [];

  public function register()
  {
    $this->setRoles();

    // do nothing if no roles are set.
    if (empty($this->roles)) return;

    $this->addCustomRoles();
  }

  public function setRoles()
  {
    $this->roles = [
      [
        'slug' => 'business',
        'display_name' => 'Business',
        'capabilities' => [
          'read' => true,
        ],
      ]
    ];
  }

  public function addCustomRoles()
  {
    foreach ($this->roles as $role) {
      add_role($role['slug'], $role['display_name'], $role['capabilities']);
    }
  }
}
