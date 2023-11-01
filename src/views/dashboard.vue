<template>
  <NutSearchbar v-model='searchValue'>
    <template #leftin>
      <Search />
    </template>
    <template #rightout>
      <Uploader />
    </template>
  </NutSearchbar>

  <div class="stage">
    <nut-pull-refresh v-model='refresh' @refresh="refreshFun">
      <div id="itemList" v-if="arr.length !== 0">
        <template v-for="(item, index) in arr">
          <div class="commodity-item" style="cursor: default;">
            <nut-card :img-url="item.imgUrl" :title="item.title" :price="item.price" :shopName="item.shopName"
              :data-id="item.id" @click="getDetail(index)">
              <template #prolist>
                <div class="search_prolist_attr">
                  <span class="word">活鲜</span>
                  <span class="word">礼盒</span>
                  <span class="word">国产</span>
                </div>
              </template>
              <template #shop-tag>
                <div class="shop-dsec">
                  <span class="word">{{ item.shopDesc }}</span>
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
        <nut-backtop :bottom="100" :z-index="4" />
      </div>
      <template v-else>
        <nut-empty description="目前没有商品 来上传一个吧" ref="empty" :style="{ height: emptyHeight + 'px' }"></nut-empty>
      </template>

    </nut-pull-refresh>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { Search, Uploader } from '@nutui/icons-vue'

const router = useRouter();

const searchValue = ref('');
const arr = ref([]);

const obj = {
  id: 1,
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '45',
  shopDesc: '习近平在集体学习时强调，铸牢中华民族共同体意识，就是要引导各族人民牢固树立休戚与共、荣辱与共、生死与共、命运与共的共同体理念',
  shopName: 'svent123'
}



const refreshFun = () => {
  console.log('触发刷新事件');
  new Promise(resolve => setTimeout(() => {
    refresh.value = false;
    arr.value = [obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj, obj];
    resolve()
  }, 1000));
}

let empty = ref(null);
let emptyHeight;

const refresh = ref(false);

onMounted(() => {
  let height = empty.value.$el.clientHeight;
  emptyHeight = ref(height + 50);

  refresh.value = true;
  refreshFun();
})

const getDetail = (id) => {
  router.push(`/details/${id}`)
}




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
    margin-right: 15px;
    color: #999;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
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