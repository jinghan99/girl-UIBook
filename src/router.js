import Vue from 'vue';
import Router from 'vue-router';
import FootBar from './views/FootBar.vue';
import MyBook from './views/MyBook.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'footBar',
      component: FootBar,
      children: [
        {
          path: '',
          component: MyBook,
        },
        {
          path: '/rank',
          name: 'rank',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Rank.vue'),
        },
        {
          path: '/info',
          name: 'info',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/Info.vue'),
        },
      ],
    },
    {
      path: '/read',
      name: 'read',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Rank.vue'),
    },
  ],
});
