import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home-item.vue')
  },
  {
    path: '/pisos-item',
    name: 'pisos',
    component: () => import('../views/pisos-item.vue')
  },
  {
    path: '/contratar-item',
    name: 'contratar',
    component: () => import('../views/contratar-item.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router