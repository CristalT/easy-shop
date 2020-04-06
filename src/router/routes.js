const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'catalog', component: () => import('pages/Catalog/Index.vue') },
      { path: 'product/:id', component: () => import('pages/Catalog/Product.vue') },
      { path: 'order', component: () => import('pages/Order/Index.vue') },
      { path: 'order/successfully-sended', component: () => import('pages/Order/SuccessfullySended.vue')}
    ]
  },
  {
<<<<<<< HEAD
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
=======
    path: '/admin/login',
    component: () => import('layouts/AdminLoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/Login.vue')},
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: {
      requiresAdminAuth: true
    },
>>>>>>> 7349c49... initial commit
    children: [
      { path: '', component: () => import('pages/Admin/Index.vue') },
      { path: 'categories', component: () => import('pages/Admin/Categories.vue') },
      { path: 'product/:id?', component: () => import('pages/Admin/Product.vue') },
      { path: 'products', component: () => import('pages/Admin/Products.vue') },
      { path: 'settings', component: () => import('pages/Admin/Settings.vue') },
      { path: 'home-carousel-slides', component: () => import('pages/Admin/HomeCarouselSlides.vue') },
<<<<<<< HEAD
      { path: 'slide/:id?', component: () => import('pages/Admin/Slide.vue') },
      { path: 'orders', component: () => import('pages/Admin/Orders.vue') },
      { path: 'order/:id', component: () => import('pages/Admin/Order.vue')}
=======
      { path: 'brands-carousel', component: () => import('pages/Admin/BrandsCarousel.vue') },
      { path: 'slide/:id?', component: () => import('pages/Admin/Slide.vue') },
      { path: 'orders', component: () => import('pages/Admin/Orders.vue') },
      { path: 'order/:id', component: () => import('pages/Admin/Order.vue')},
      { path: 'about-us', component: () => import('pages/Admin/AboutUs.vue')},
      { path: 'contact', component:() => import('pages/Admin/Contact.vue') }
>>>>>>> 7349c49... initial commit
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
