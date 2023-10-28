<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch" bottom safe-area-inset-bottom placeholder>
    <nut-tabbar-item v-for="(item, index) in items" @click="router.push(item.path)" :name="item.name" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import { ref, h } from 'vue';
import { Home, My } from '@nutui/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    path: '/',
    title: '首页',
    icon: h(Home),
    name: 'home',
  },
  {
    path: '/user',
    title: '我的',
    icon: h(My),
    name: 'user'
  },
]);

const activeName = ref('home');

const tabSwitch = (item, index) => {
  console.log(item, index);
};
</script>
<style scoped>

</style>