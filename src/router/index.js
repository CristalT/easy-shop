import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const Router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE
});

Router.beforeEach((to, from, next) => {
  const admin = sessionStorage.getItem('adminToken');

  const requiresAdminAuth = to.matched.some(record => record.meta.requiresAdminAuth);

  if (requiresAdminAuth && !admin) next('/admin/login');
  // else if (!requiresAdminAuth && admin) next('/');
  else next();
});

export default Router;
