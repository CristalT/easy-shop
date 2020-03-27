<template>
  <q-layout no-padding view="hHh lpR fFf">
    <q-header class="bg-white text-blue-8" id="main-header">
      <q-toolbar>
        <q-btn flat icon="menu" round @click="drawer = !drawer" />
        <q-toolbar-title>
          <div id="navbar-brand">
            <img src="statics/navbar-brand.jpg" id="navbar-brand" />
          </div>
        </q-toolbar-title>
        <q-btn @click="viewSite" label="Ver Sitio" flat icon="launch" rounded />
        <q-btn label="Cerrar Sesión" flat icon="power_settings_new" color="grey-8" rounded />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :breakpoint="500" bordered content-class="bg-grey-3">
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuList" :key="index">
          <q-item :to="'/admin/' + menuItem.to" clickable v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label.toUpperCase() }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      menuList: [
        {
          icon: 'shopping_basket',
          label: 'Órdenes de Compra',
          to: 'orders',
          separator: true
        },
        {
          icon: 'view_carousel',
          label: 'Carrusel',
          to: 'home-carousel-slides'
        },
        {
          icon: 'list',
          label: 'Categorías',
          to: 'categories'
        },
        {
          icon: 'shopping_cart',
          label: 'Productos',
          to: 'products',
          separator: true
        },
        {
          icon: 'settings',
          label: 'Configuración',
          to: 'settings'
        }
      ]
    };
  },
  methods: {
    viewSite() {
      window.location = '/'
    }
  }
};
</script>
