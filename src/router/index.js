import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home, //.vue不可省略
    meta:{
      keepAlive: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: '/my',
        name: 'my',
        meta: {
          title: '我的'
        },
        component: () => import('@/views/my.vue')
      },
      {
        path: '/message',
        name: 'message',
        meta: {
          title: '消息'
        },
        component: () => import('@/views/message.vue')
      },
    ],
  },
  {
    path: '/details/:id',
    name: 'details',
    meta: {
      title: '商品详情页'
    },
    component: () => import('@/views/details.vue'),
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  const _title = to.meta.title;
  if (_title) {
    window.document.title = _title;
  }
})


export default router