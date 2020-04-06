<template>
  <q-layout no-padding view="hHh lpR fFf">
    <q-header class="bg-white text-blue-8" id="main-header">
      <menu-toolbar :menu-options="menuOptions" @showDrawer="drawer = !drawer" />
    </q-header>

    <q-drawer v-model="drawer" overlay side="right" :breakpoint="500" content-class="bg-primary text-white">
      <q-scroll-area class="fit">
        <q-list v-for="(menuItem, index) in menuOptions" :key="index">
          <q-item @click="goto(menuItem.route, menuItem.anchor), drawer = false" clickable v-ripple>
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

    <main-footer />
  </q-layout>
</template>

<script>
import MenuToolbar from 'src/components/MenuToolbar'
import MainFooter from 'src/components/MainFooter';

export default {
  components: {
    MenuToolbar,
    MainFooter
  },
  data() {
    return {
      drawer: false,
      menuOptions: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.menuOptions = [
        {
          label: 'Inicio',
          route: '/',
          anchor: '#home',
          name: 'home',
          visible: true
        },
        {
          label: 'Catálogo',
          route: '/catalog',
          anchor: false,
          name: 'catalog',
          visible: this.settings.catalogOn
        },
        {
          label: 'Contacto',
          route: '/',
          anchor: '#contact',
          name: 'contact',
          visible: this.contactFormEnabled || this.contactData.length
        }
      ];
    }, 1000);
  }
};
</script>
