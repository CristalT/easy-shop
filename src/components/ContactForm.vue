<template>
  <form class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-input type="text" v-model="contact.name" label="Nombre" outlined />
      </div>
      <div class="col-12">
        <q-input type="email" v-model="contact.email" label="Email" outlined />
      </div>
      <div class="col-12">
        <q-input type="textarea" v-model="contact.message" label="Mensaje" outlined />
      </div>
      <div class="col-12 text-center">
          <q-btn label="Enviar" color="primary" icon="eva-email-outline" unelevated />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      }
    };
  }
};
</script>
