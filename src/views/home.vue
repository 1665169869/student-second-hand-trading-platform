<template>
  <nut-navbar :title='title' :fixed="true"></nut-navbar>

  <router-view></router-view>
  <TabBar />
</template>

<script setup>
import { ref, onUpdated, onMounted } from "vue";
import { useRoute } from "vue-router";
import TabBar from '@/components/TabBar.vue';


const title = ref('首页');
const route = useRoute();

const handler = () => {
  title.value = route.meta.title;
}
onUpdated(handler);
onMounted(handler);




</script>

<style scoped></style>
