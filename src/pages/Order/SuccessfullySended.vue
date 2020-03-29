<template>
  <q-page padding class="flex items-center justify-center">
    <q-card class="text-center">
      <q-card-section>
        <q-icon name="eva-checkmark-circle-outline" color="positive" size="100px" />
      </q-card-section>
      <q-card-section>
        <div class="text-h5 text-grey-8">¡Gracias por tu compra!</div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 text-grey-8">
          Nos contactaremos a la brevedad <br> para coordinar la entrega.
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn @click="goto('/', 'home')" icon="eva-home-outline" color="primary" class="full-width" unelevated>Inicio</q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
