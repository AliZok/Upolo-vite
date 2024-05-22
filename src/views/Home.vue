<style scoped>
.sidebar-wrap {
  width: 260px;
  transition: 0.6s;
}
.content-wrap {
  width: calc(100% - 260px);
  transition: 0.6s;
}
.my-bg {
  background: #fafbfc;
}
@media only screen and (max-width: 992px) {
  .sidebar-wrap {
    width: 70px;
  }
  .content-wrap {
    width: calc(100% - 70px);
  }
}
@media only screen and (max-width: 576px) {
  .sidebar-wrap {
    width: 4px;
  }
  .content-wrap {
    width: calc(100% - 4px);
  }
}
</style>
<template>
  <div class="home">
    <div dir="rtl" class="main-wrap">
      <div class="header">
        <Header />
      </div>
      <div class="flex">
        <div class="sidebar-wrap">
          <SideBar />
        </div>
        <div class="content-wrap">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import Content from "../components/Content.vue";
</script>
