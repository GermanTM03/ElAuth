import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import UserView from '@/views/UserView.vue'
// import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Usuarios',
      name: 'Usuarios',
      component: () => import('../views/BlogView.vue')

    },
    {
      path: '/Registro',
      name: 'Registro',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/UserLogin.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.path === '/Usuarios') {
    const tokenFromStorage = localStorage.getItem('token');
    const IDFromStorage = localStorage.getItem('ID');
    if (tokenFromStorage && IDFromStorage) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
