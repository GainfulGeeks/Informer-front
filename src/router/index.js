import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthenticatedLayout from "../components/AuthenticatedLayout.vue";


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
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
