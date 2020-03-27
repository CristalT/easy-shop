<template>
  <q-layout no-padding view="hHh lpR fFf">
    <q-header class="bg-white text-blue-8" id="main-header">
      <menu-toolbar />
    </q-header>

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
  }
};
</script>
