<style scoped>
.SideBar {
  border-left: solid 2px #e7e8e9;
}

.menu-icon {
  align-items: center;
  justify-content: start;
  width: 35px;
  height: 35px;
  display: flex;
}

.user-image {
  width: 40px;
}

.my-bg {
  background: #fafbfc;
}

.slide-icon {
  top: 34px;
  left: -13px;
}

.slide-icon-wrap {
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
}

@media only screen and (max-width: 992px) {
  .tablet-hide {
    display: none;
  }

  .menu-icon {
    justify-content: center;
  }

  .user-image {
    margin-left: 0;
    margin-right: 6px;
  }
}

@media only screen and (max-width: 576px) {
  .mobile-hide {
    display: none;
  }

}
</style>
<template>
  <div class="SideBar h-full my-bg sm:px-2 px-0 py-3 text-right relative">
    <div class="flex mb-3">
      <div class="user-image ml-3 mobile-hide">
        <img class="w-100 rounded" src="../assets/images/user.png" alt="" />
      </div>
      <div class="tablet-hide">
        <div class="mb-1">علی ذکائی</div>
        <div class="text-xs">آپولو</div>
      </div>
    </div>
    <div>
      <div v-for="(item, idx) in menu_modules" :key="idx">
        <router-link :to="item.path">
          <div class="flex p-2 hover:bg-gray-100 hover:text-blue-500 rounded cursor-pointer">
            <div class="menu-icon mobile-hide">
              <i class="" :class="'far fa-star'" style="font-size: 19px"></i>
            </div>
            <div class="tablet-hide">
              {{ item.name }}
            </div>
          </div>
        </router-link>
        <div v-if="item.is_parent_menu">
          <div v-for="(sub_item, sub_item_idx) in item.subMenus" :key="idx">
            <router-link :to="sub_item.path">
              {{ sub_item.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-icon absolute">
      <div class="slide-icon-wrap flex rounded-full bg-white cursor-pointer shadow-md border-gray-300">
        <i class="fas fa-angle-left" style="font-size: 15px"></i>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import $ from '@/store/newStore';
import modulesConfig from '@/modules.json';
const myModules_controller = ref(modulesConfig.modules)
const moduleContext = import.meta.glob('../modules/**/*.js');

const menu_modules = ref([]);
const Modules_list = ref([]);

const test = async () => {
  for (const key in moduleContext) {
    const moduleName = key.split('modules/')[1].split('/router.js')[0]
    const module = await moduleContext[key]();
    module.default.map(i => i.folder_name = moduleName)
    Modules_list.value = [...Modules_list.value, ...module.default]
  }

  myModules_controller.value.forEach((module_controll) => {

    if (module_controll.isActive) {

      Modules_list.value.forEach((module_item, idx) => {
        if (module_item.folder_name == module_controll.folder_name && !!module_item.menu_item) {
          menu_modules.value.push(module_item)
        }
      })

    }
  });
  menu_modules.value = $.sortByPriorityModule(menu_modules.value)
  menu_modules.value.forEach((module_item, idx) => {
    if (module_item.is_parent_menu) {
      module_item.subMenus = []

      menu_modules.value.forEach((i, sub_index) => {

        if (module_item.name == i.parent_menu) {
          module_item.subMenus.push(i)
          // menu_modules.value.splice(sub_index, 1)
        }
      });
    }
  });
  menu_modules.value = menu_modules.value.filter(item => item.is_parent_menu);
}
test()







</script>
