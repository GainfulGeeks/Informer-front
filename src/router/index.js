import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthenticatedLayout from "../components/AuthenticatedLayout.vue";
import LoginPage from '../views/LoginPage.vue'

function isAuthenticated() {
  //  authentication logic should be  here
  return localStorage.getItem('accessToken') !== null;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: '',
      component: AuthenticatedLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },

        {
          path: '/employees',
          name: 'employees',
          component: () => import('../views/EmployeeList.vue')
        }
      ],
      meta: { requiresAuth: true }
    },

    {
      path: '/login',
      name: 'login',
      component: () => {
        if(localStorage.getItem('accessToken')) return AuthenticatedLayout
        else return LoginPage
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // If the route requires authentication and user is not authenticated, redirect to login
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
})

export default router
