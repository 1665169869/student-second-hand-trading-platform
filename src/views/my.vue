<template>
  <nut-row>
    <nut-cell>
      <template #title>
        <span class="title">这是一个测试账号</span>
        <span class="sub-title">若黯夜终临，吾必立于万万人前。横刀向渊，血染天穹!</span>
      </template>
      <template #icon>
        <nut-avatar size='large'>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        </nut-avatar>
      </template>
      <template #link>
        <Setting />
      </template>
    </nut-cell>
  </nut-row>
  <nut-row>
    <nut-grid>
      <nut-grid-item text="我发布的">
        <Shop class="icon" />
      </nut-grid-item>
      <nut-grid-item text="购买记录">
        <Cart class="icon" />
      </nut-grid-item>
      <nut-grid-item text="我的足迹">
        <Footprint class="icon" />
      </nut-grid-item>
      <nut-grid-item text="设置">
        <Setting class="icon" />
      </nut-grid-item>
    </nut-grid>
  </nut-row>
</template>

<script setup>
import { Shop, Footprint, Cart, Setting } from "@nutui/icons-vue";
</script>
<style scoped lang="less">
.icon {
  width: 24px;
  height: 24px;
}

.title {
  text-align: left;
  padding-left: 8px;
  font-size: 18px;
}

.sub-title {
  font-size: 12px;
  color: #999;
  text-align: left;
  padding-left: 8px;
}
</style>