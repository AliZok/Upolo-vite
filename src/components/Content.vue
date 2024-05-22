<style scoped>
.Content {
}


</style>
<template>
  <div class="Content my-bg px-5 py-3 text-right">
    <h2 class="text-xl font-bold mb-3 custom-font">پیشخوان</h2>
    <div class="mb-4">
      <div class="flex w-full mb-2 flex-col md:flex-row">
        <div class="w-full md:w-1/2 md:pl-1 mb-2 md:mb-0">
          <div class="p-3 bg-white shadow-md rounded">
            <h4 class="mb-3">کل دریافتی</h4>
            <div>1000000</div>
          </div>
        </div>
        <div class="w-full md:w-1/2 md:pr-1">
          <div class="p-3 bg-white shadow-md rounded">
            <h4 class="mb-3">دریافتی امروز</h4>
            <div>1000000</div>
          </div>
        </div>
      </div>
      <div class="flex w-full  flex-col md:flex-row">
        <div class="w-full md:w-1/2 pl-0 md:pl-1 mb-2 md:mb-0">
          <div class="p-3 bg-white shadow-md rounded">
            <h4 class="mb-3">گزارش کل</h4>
            <div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-green-700"
              >
                <div>پرداخت شده</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-yellow-700"
              >
                <div>در انتظار پرداخت</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-blue-700"
              >
                <div>استرداد شده</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full pt-2 text-sm text-red-700"
              >
                <div>نا موفق</div>
                <div>11113 تراکنش</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 pr-0 md:pr-1">
          <div class="p-3 bg-white shadow-md rounded">
            <h4 class="mb-3">گزارش امروز</h4>
            <div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-green-700"
              >
                <div>پرداخت شده</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-yellow-700"
              >
                <div>در انتظار پرداخت</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full border-b py-2 text-sm text-blue-700"
              >
                <div>استرداد شده</div>
                <div>11113 تراکنش</div>
              </div>
              <div
                class="flex justify-between w-full pt-2 text-sm text-red-700"
              >
                <div>نا موفق</div>
                <div>11113 تراکنش</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <div class="flex">
        <div class="ml-2">
          <i
            class="fas fa-exclamation-triangle text-yellow-600"
            style="font-size: 15px"
          ></i>
        </div>
        <div class="text-xs pt-1 border-b border-dotted border-blue-500">
          3 تراکنش نیاز به بررسی دارند
        </div>
      </div>
    </div>
    <div class="p-3 bg-white shadow-md rounded  ">
      <div class="relative mb-3">
        <input
          type="text"
          placeholder="جستجو"
          class="pr-8 pr-6 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <div  class="absolute right-3 top-1 h-5 w-5 text-gray-400">
          <i class="fa fa-search"></i>
        </div>

      </div>
      <div>
        <Table />
      </div>
    </div>
  </div>

</template>
<script setup>
import Table from "./Table.vue";

import { ref } from "vue";
</script>