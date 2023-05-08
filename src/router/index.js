import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from "../views/HomeView.vue";
import DefaultLayout from '../layouts/DefaultLayout.vue';
import routes from '@/configs/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: 'home-parent',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: routes.movie,
          name: 'popular movies',
          component: () => import('../components/AdvancedSearch.vue'),
        },
        {
          path: routes.tv,
          name: 'popular tv shows',
          component: () => import('../components/AdvancedSearch.vue'),
        },
        {
          path: routes.detail,
          name: 'media detail',
          component: () => import('../views/MediaDetailView.vue'),
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
