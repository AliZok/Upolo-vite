export default [
  {
    name: "Module 3",
    path: '/module-3',
    component: () => import('./Module3.vue'),
    priority: 5,
    is_parent_menu: true,
    menu_item: true,

  },
  {
    name: "Module 3 (Detailes)",
    path: '/module-3/details',
    component: () => import('./Module3Details.vue'),
    priority: 6,
    parent_menu: "Module 3",
    menu_item: true,

  }
]