import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/blackwhite',
      component: () => import('../views/blackwhite/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/blackwhite/index.vue')
      // redirect: '/blackwhite'
    },
    {
      path: '/cute',
      component: () => import('@/views/cute/index.vue')
      // redirect: "/blackwhite",
    },
    {
      path: '/waterfall',
      component: () => import('@/views/waterfall/index.vue')
      // redirect: "/blackwhite",
    }
  ]
})

export default router
