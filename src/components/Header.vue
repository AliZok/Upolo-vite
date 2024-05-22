<template>
    <div class="Header my-bg">
        <router-link :to="'/'">
            <div class="flex flex-row-reverse px-3 py-3">
                <i class='far fa-smile' style='font-size:25px'></i>
            </div>
        </router-link>
    </div>
</template>
<style scoped>
.Header {
    box-shadow: 0px 2px 5px #ebe4e4;
    margin-bottom: 4px;
}
</style>