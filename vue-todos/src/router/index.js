import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'ToDo'
    },
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: 'Info'
    },
    component: () => import('@/pages/InfoPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router