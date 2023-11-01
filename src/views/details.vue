<template>
  <div>
    <nut-navbar title='商品详情' :fixed="true" :left-show="true" :border="true" @click-back="this.$router.back()">
      <template #right>
        <ShareN width="16px" />
      </template>
    </nut-navbar>


    <nut-cell>
      <template #title>
        <div class="user">
          <span class="title"><nut-skeleton :title="false" width="55%" height="20px" row="1" style="width: 100%;"
              :loading="!stage">这是一个测试账号</nut-skeleton></span>
          <span class=" sub-title">
            <nut-skeleton :title="false" width="100%" height="12px" row="2" :loading="!stage"
              style="width: 100%; margin-top: 5px;">
              若黯夜终临，吾必立于万万人前。横刀向渊，血染天穹!
            </nut-skeleton>
          </span>
        </div>
      </template>
      <template #icon>
        <nut-avatar size='large'>
          <nut-skeleton avatar avatar-size="60px" :title="false" row="0" :loading="!stage">
            <img
              src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          </nut-skeleton>

        </nut-avatar>
      </template>
    </nut-cell>

    <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">详细介绍</nut-divider>

    <nut-cell style="margin-bottom: 65px;">
      <template #default>
        <div class="detail" style="width: 100%;">
          <div class="title">
            <nut-skeleton :loading='!stage' :title="false" row="1" height="20px" style="width: 100%;" width="60%">
              <span>
                {{ obj.title }}
              </span>
            </nut-skeleton>
          </div>
          <div class="price">
            <nut-skeleton :loading='!stage' row="1" width="120px" height="25px" :title="false">
              <nut-price :price="15213.22" :decimal-digits="2" thousands size="large" style="color: #e64340;" />
            </nut-skeleton>
          </div>
          <div class="desc">
            <nut-skeleton :loading='!stage' :title="false" row="7" width="100%" height="18px" style="width: 100%;">
              {{ obj.shopDesc }}
            </nut-skeleton>
            <div class="shop-images" v-if="stage">
              <img v-for="item in obj.imgUrl" :src="item">
            </div>
          </div>

        </div>
      </template>
    </nut-cell>

    <nut-backtop :bottom="100" :z-index="4" />

    <div class="tabbar" v-if="stage">
      <div class="tab-item want-like">我想要</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { ShareN, Loading1 } from "@nutui/icons-vue"
const router = useRouter();
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const obj = {
  id: 1,
  imgUrl:
    [
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      'https://img30.360buyimg.com/sku/jfs/t1/94158/17/43012/553542/6515b3f3Fa2b74adb/1105ac44177286a6.png'
    ],
  title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '45',
  shopDesc: '习s华民族共同体意识，就是要引导各族人民牢固树立休戚与共、荣辱与共、生死与共、命运与共的共同体理念\n习s华民族共同体意识，就是要引导各族人民牢固树立休戚与共、荣辱与共、生死与共、命运与共的共同体理念',
  shopName: 'svent123'
}

const stage = ref(true);

onMounted(() => {
  setTimeout(() => {
    stage.value = true;
  }, 1000);

})

</script>
<style scoped lang="less">
.title {
  font-size: 18px;
}

.detail {
  text-align: left;

  .desc {
    margin-top: 10px;
    font-size: 15px;
    color: rgb(63, 63, 63);
  }

  .title {
    color: rgba(51, 51, 51, 1);
  }

  .shop-images>img {
    width: 100%;
    height: 100%;
  }

  &>div {
    margin-top: 5px;
  }

  .price {
    padding-top: 8px;

    // * {
    //   color: #e64340;
    // }
  }
}

.user {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 8px;

  // .title {

  // }

  .sub-title {
    font-size: 12px;
    color: #999;
    text-align: left;
    line-height: 18px;
  }
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  font-size: 14px;

  .tab-item {
    position: absolute;
    top: 5px;
  }

  .want-like {
    right: 20px;
    border-radius: 20px;
    color: #ffffff;
    background-color: rgb(25, 137, 250);
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>