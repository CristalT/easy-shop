<template>
  <q-toolbar>
    <q-toolbar-title>
      <div id="navbar-brand">
        <img src="statics/navbar-brand.jpg" id="navbar-brand" />
      </div>
    </q-toolbar-title>
    <q-btn
      v-for="item in menuTop"
      :key="item.name"
      class="menu-option"
      :class="{ 'active-route': isActive(item) }"
      @click="goto(item.route, item.anchor)"
      :label="item.label"
      flat
      stretch
      color="primary"
    />
    <q-btn v-if="settings.catalogOn" @click="goto('/order', false)" icon="eva-shopping-cart-outline" flat color="grey-8" round class="q-ml-md">
      <q-badge color="red" floating v-if="orderProductsCount">{{ orderProductsCount }}</q-badge>
      <q-tooltip>Mi Compra</q-tooltip>
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menuOptions: [
        {
          label: 'Inicio',
          route: '/',
          anchor: '#home',
          name: 'home'
        },
        {
          label: 'Catálogo',
          route: '/catalog',
          anchor: false,
          name: 'catalog',
          settings: 'catalogOn'
        },
        {
          label: 'Contacto',
          route: '/',
          anchor: '#contact',
          name: 'contact'
        }
      ]
    };
  },
  computed: {
    menuTop() {
      if (!this.$q.screen.lt.md) {
        return this.menuOptions.filter(m => !m.settings || this.settings[m.settings]);
      }
      return [];
    },
    orderProductsCount() {
      return this.$store.getters['main/getOrderProductsCount'];
    }
  }
};
</script>

<style lang="sass" scoped>
.menu-option
    transition: all .5s ease
.active-route
    font-size: 1.3em
</style>
