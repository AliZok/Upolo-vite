import { createRouter, createWebHistory } from 'vue-router'
import modulesConfig from '../modules.json';
var myModules_controller = modulesConfig.modules
const moduleContext = import.meta.glob('../modules/**/*.js');

var Modules_list = []
const getNewRoutes = async () => {
  for (const key in moduleContext) {
    const module = await moduleContext[key]();
    Modules_list = [...Modules_list, ...module.default]
  }
}
let routes = []
export function loadModuleRoutes() {
  routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Content.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/Test.vue'),
    },
  ]
  
  getNewRoutes().then(() => {
    myModules_controller.forEach((module_controll) => {
      if (module_controll.isActive) {
        Modules_list.forEach(element => {
          if(element.folder_name == module_controll.folder_name){
            router.addRoute(element);
          }
        });
      }
    });
  })
  return routes
}


const router = createRouter({
  history: createWebHistory(),
  routes: loadModuleRoutes()
})

export default router

