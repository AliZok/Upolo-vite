

export default [
  {
    name: "Module 1",
    path: '/module-1',
    component: () => import('./Module1.vue'),
    priority: 10,
    is_parent_menu:true,
    menu_item:true,
  },
  {
    name: "Module 1 (Detailes)",
    path: '/module-1/details',
    component: () => import('./Module1Details.vue'),
    priority: 1,
    parent_menu: "Module 2",
    menu_item:true,
  }
]