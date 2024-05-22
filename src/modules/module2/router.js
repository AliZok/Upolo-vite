export default [
  {
    name: "Module 2",
    path: '/module-2',
    component: () => import('@/modules/module2/Module2.vue'),
    is_parent_menu: true,
    menu_item: true,
    priority: 10,

  },
  {
    name: "Module 2 (Detailes)",
    path: '/module-2/details',
    component: () => import('@/modules/module2/Module2Details.vue'),
    parent_menu: "Module 2",
    menu_item: true,
    priority: 10,

  },
  {
    name: "Module 2 (Plus)",
    path: '/module-2-plus',
    component: () => import('@/modules/module2/Module2Plus.vue'),
    parent_menu: "Module 2",
    menu_item: true,

  },
]