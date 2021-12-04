import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/locate',
    name: 'Locate',
    component: () => import('../views/Locate.vue')
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import('../views/Favoritos.vue')
  },
  {
    path: '/:id',
    name: 'MyCard',
    component: () => import('@/components/MyCard')
  },
  {
    path: '/imagens',
    name: 'Imagens',
    component: () => import('../views/Imagens.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
