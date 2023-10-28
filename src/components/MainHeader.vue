<template>
  <div class="header w">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped lang="less">
@height: 48px;

.header {
  background-color: var(--nut-primary-color, #2c68ff);
  height: @height;
  padding: 5px 0;
  box-sizing: border-box;


  h1 {
    font-size: 28px;
    color: #fff;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }
}
</style>

<script setup>
const props = defineProps({ title: { type: String, default: 'Vue3' } })
</script>
