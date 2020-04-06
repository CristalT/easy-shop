<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created: async function() {
    this.$store.dispatch('main/fetchHomeCarouselSlides');
    this.$store.dispatch('main/fetchAboutUs');
    this.$store.dispatch('main/fetchContactData');
    this.$store.dispatch('main/fetchBrands');

    await this.$store.dispatch('main/fetchSettings');

    if (!this.settings) {
      return this.notifyError('Error al inicializar la APP. No se encontró la configuración inicial.');
    }

    if (this.settings.catalogOn) {
      this.$store.dispatch('main/fetchCategories');
      this.$store.dispatch('main/fetchActiveCategories');

      this.$store.commit('main/importOrderProducts');

      const mp = this.settings.paymentMethods.find(pm => pm.label === 'MercadoPago');
    }
  }
};
</script>
