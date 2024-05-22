<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

td {
  text-align: center;
}
.my-row-mobile {
  display: none;
}
.page-btn{
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
@media only screen and (max-width: 1024px) {
  .my-row,
  thead {
    display: none;
  }
  .my-row-mobile {
    display: block;
  }
  table td {
    display: block;
    text-align: right;
    padding-right: 50%;
  }
  table td::after {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    right: 10px;
  }

}
</style>

<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-3">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead class="text-white uppercase bg-blue-500">
          <tr>
            <th
              v-for="mob_col in columns"
              :key="mob_col"
              scope="col"
              class="px-6 py-4 text-center"
            >
              {{ mob_col }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(my_row, idx) in 10"
            :key="idx"
            :class="idx % 2 == 0 ? 'bg-blue-100' : 'bg-white'"
            class="text-xs my-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td v-for="col in 7" :key="col" class="px-6 py-2 text-center">
              تست
            </td>
            <td class="px-6 py-2 text-center">
              <div class="font-medium text-white">
                <div class="detail-btn bg-blue-500 rounded p-2">جزئیات</div>
              </div>
            </td>
          </tr>

          <tr
            v-for="(my_row, idx) in 10"
            :key="idx"
            :class="idx % 2 == 0 ? 'bg-blue-100' : 'bg-white'"
            class="my-row-mobile w-100 mb-2 py-2"
          >
            <td
              v-for="mob_col in columns"
              :key="mob_col"
              :data-label="mob_col"
              class="pb-1 px-3"
            >
              hellp
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="flex">
        <div class="font-medium text-white ml-3">
          <div class="bg-blue-500 rounded ml-2 cursor-pointer page-btn">1</div>
        </div>
        <div class="font-medium ml-3 cursor-pointer">
          <div class="rounded page-btn">2</div>
        </div>
        <div class="font-medium ml-3">
          <div class="rounded page-btn">...</div>
        </div>
        <div class="font-medium ml-3 cursor-pointer">
          <div class="rounded page-btn">9</div>
        </div>
        <div class="font-medium ml-3 cursor-pointer">
          <div class="rounded page-btn">10</div>
        </div>
        <div class="font-medium ml-3 cursor-pointer">
          <div class="rounded page-btn">
            <i class="fas fa-angle-left text-blue-500" style="font-size: 15px"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const columns = ref([
  "شماره تراکنش",
  "پذیرنده",
  "تاریخ پرداخت",
  "مبلغ ",
  "شناسه",
  "موبایل",
  "وضعیت",
  "جزئیات",
]);
const rows = ref(
  new Array(12).fill(null).map((_, index) => Array(8).fill(`Row ${index + 1}`))
);
const pageSize = ref(5);
const currentPage = ref(0);

const paginatedRows = computed(() => {
  const start = currentPage.value * pageSize.value;
  return rows.value.slice(start, start + pageSize.value);
});

const totalPages = computed(() =>
  Math.ceil(rows.value.length / pageSize.value)
);

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
</script>
 