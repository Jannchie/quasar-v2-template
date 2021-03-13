import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'about',
        component: () => import('pages/About.vue'),
      },
      {
        path: 'home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
      },
      {
        path: 'chat',
        component: () => import('pages/Chat.vue'),
      },
      {
        path: 'author',
        component: () => import('pages/Author.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
