<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created: async function() {
    await this.$store.dispatch('main/fetchSettings');
    await this.$store.dispatch('main/fetchHomeCarouselSlides')

    if (this.settings.catalogOn) {
      this.$store.dispatch('main/fetchCategories');
      this.$store.dispatch('main/fetchActiveCategories');

      const mp = this.settings.paymentMethods.find(pm => pm.label === 'MercadoPago')
      
      if (mp.value) {
        this.$store.commit('main/setMercadoPagoCredentials', this.settings.mercadoPagoCredentials)
      }
    }
  }
};
</script>
