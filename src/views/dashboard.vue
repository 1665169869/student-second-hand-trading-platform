<template>
  <div class="stage">
    <div id="itemList">
      <template v-for="item in Array(10)">
        <div class="commodity-item">
          <nut-card :img-url="state.imgUrl" :title="state.title" :price="state.price" :shopName="state.shopName">
            <template #prolist>
              <div class="search_prolist_attr">
                <span class="word">活鲜</span>
                <span class="word">礼盒</span>
                <span class="word">国产</span>
              </div>
            </template>
            <template #shop-tag>
              <div class="shop-dsec">
                <span class="word">{{ state.shopDesc }}</span>
              </div>
            </template>
            <template #price>
              <span>询价</span>
            </template>
            <template #origin>
              <span></span>
            </template>
          </nut-card>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '45',
  shopDesc: '简介简洁简12321321321312321321321介',
  shopName: 'svent123'
});

</script>

<style lang="less" scoped>
#itemList {
  text-align: left;
}

.commodity-item {
  background-color: #fff;
  position: relative;
  padding: 5px 0 5px 10px;

  &:not(:first-child):after {
    content: "";
    background-color: #e5e5e5;
    pointer-events: none;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    left: 130px;
    z-index: 1;
    transform: scaleY(.5);
    transform-origin: 50% 0;
  }
}

.shop-dsec {
  font-size: 12px;

  .word {
    color: #999;
  }
}
</style>

<style scoped>
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
}

.search_prolist_attr>span {
  float: left;
  padding: 0 5px;
  border-radius: 1px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  color: #999;
  background-color: #f2f2f7;
  margin-right: 5px;
}
</style>