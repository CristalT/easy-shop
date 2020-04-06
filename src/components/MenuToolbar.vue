<template>
  <q-toolbar>
    <q-toolbar-title>
      <div id="navbar-brand">
        <img src="statics/navbar-brand.jpg" id="navbar-brand" />
      </div>
    </q-toolbar-title>
<<<<<<< HEAD
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
=======
    <div v-if="largeScreen">
      <q-btn
        v-for="item in menuTop"
        :key="item.name"
        class="menu-option"
        :class="{ 'active-route': isActive(item) }"
        @click="goto(item.route, item.anchor)"
        :label="item.label"
        flat
        color="primary"
      />
      <q-btn
        v-if="settings.catalogOn && settings.salesOn"
        @click="goto('/order', false)"
        icon="eva-shopping-cart-outline"
        flat
        color="grey-8"
        round
        class="q-ml-md"
      >
        <q-badge color="red" floating v-if="orderProductsCount">{{ orderProductsCount }}</q-badge>
        <q-tooltip>Mi Compra</q-tooltip>
      </q-btn>
      <q-btn v-if="adminEnabled" to="/admin" icon="eva-settings-outline" flat round>
        <q-tooltip>
          Ir al panel de administración
        </q-tooltip>
      </q-btn>
    </div>
    <q-btn flat icon="menu" round @click="$emit('showDrawer')" v-if="!largeScreen" />
>>>>>>> 7349c49... initial commit
  </q-toolbar>
</template>

<script>
export default {
<<<<<<< HEAD
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
=======
  props: ['menuOptions'],
  computed: {
    menuTop() {
      return this.menuOptions.filter(m => m.visible);
    },
    largeScreen() {
      return !this.$q.screen.lt.md;
>>>>>>> 7349c49... initial commit
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
