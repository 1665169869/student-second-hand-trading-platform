<template>
  <MainHeader />

  <router-view />

  <TabBar/>

</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue';
import TabBar from '@/components/TabBar.vue';

</script>

<style scoped></style>
