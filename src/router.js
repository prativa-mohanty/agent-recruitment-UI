// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import AssessmentDashboard from './views/AssessmentDashboard.vue'

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
    path: '/mainDashboard',
    name: 'recruitmentDashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/assessmentDashboard',
    name: 'assessmentDashboard',
    component: AssessmentDashboard,
    meta: { 
      requiresAuth: true,
      title: 'Assessment Dashboard'
    }
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
  
  // Update document title if available
  document.title = to.meta.title || 'Recruitment Portal'
  
  // If route requires auth and user isn't authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  }
  // If user is authenticated and trying to access login or signup page
  else if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    next('/mainDashboard')
  }
  else {
    next()
  }
})

export default router