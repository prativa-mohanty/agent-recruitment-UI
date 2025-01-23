import { createRouter, createWebHistory } from 'vue-router'
import Recruitment from './views/Recruitment.vue'

const routes = [
  {
    path: '/recruitment',
    name: 'recruitment',
    component: Recruitment
  },
  // Redirect root to recruitment page
  {
    path: '/',
    redirect: '/recruitment'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router