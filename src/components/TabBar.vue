<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch" bottom safe-area-inset-bottom placeholder>
    <nut-tabbar-item v-for="(item, index) in items" :to="item.path" :name="item.name" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script setup>
import { ref, h,onMounted } from 'vue';
import { Home, My, Message } from '@nutui/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const items = ref([
  {
    path: '/dashboard',
    title: '首页',
    icon: h(Home),
    name: 'home',
  },
  {
    path: '/message',
    title: '消息',
    icon: h(Message),
    name: 'message',
  },
  {
    path: '/my',
    title: '我的',
    icon: h(My),
    name: 'my'
  },
]);

const activeName = ref('home');

const tabSwitch = (item, index) => {
  console.log(item, index);
};


onMounted(() => {
  
  const path = router.currentRoute.value.path;
  const index = items.value.findIndex(item => item.path === path);
  activeName.value = items.value[index].name;

})

</script>
<style scoped>

</style>