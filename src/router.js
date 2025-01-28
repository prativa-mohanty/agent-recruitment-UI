// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Recruitment from './views/Recruitment.vue'
import Login from './views/Login.vue'

// Define public routes that don't require authentication
const publicRoutes = ['/login', '/signup']

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/signup',
    name: 'signup',
    component: Login, // Using the same component since we have toggle functionality
    meta: { requiresAuth: false }
  },
  {
    path: '/recruitment',
    name: 'recruitment',
    component: Recruitment,
    meta: { requiresAuth: true }
  },
  // Redirect root to login page initially
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token')
  
  // If route requires auth and user isn't authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }
  // If user is authenticated and trying to access login or signup page
  else if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    next('/recruitment')
  }
  else {
    next()
  }
})

export default router