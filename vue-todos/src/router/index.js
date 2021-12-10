import Vue from 'vue'
import VueRouter from 'vue-router'
import netClient from '../netClient/config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Список дел',
      layout: 'main-layout'
    },
    component: () => import('@/pages/HomePage')
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: 'Информация',
      layout: 'main-layout'
    },
    component: () => import('@/pages/InfoPage')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Вход',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/LoginPage')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {
      title: 'Регистрация',
      layout: 'auth-layout'
    },
    component: () => import('@/pages/RegistrationPage')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Защита роутов
router.beforeEach((to, from, next) => {
  const { accessToken } = localStorage
  if (accessToken || to.name === 'Login' || to.name === 'Registration') {
    next();
  } else {
    next('/login')
  }
})

export default router