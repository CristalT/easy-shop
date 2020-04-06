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
        <q-btn label="Enviar" color="primary" icon="eva-email-outline" unelevated @click="sendMessage" />
      </div>
    </div>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  validations: {
    contact: {
      name: { required },
      email: { required, email },
      message: { required }
    }
  },
  methods: {
    sendMessage() {
      const data = {
        from: {
          name: this.contact.name,
          email: this.contact.email
        },
        message: this.contact.message
      };

      this.$axios
        .post('mailing/contact-form', data)
        .then(() => {
          this.notifySuccess(
            'Tu mensaje fue enviado correctamente. Gracias por comunicarte. Responderemos a la brevedad.'
          );
        })
        .catch(err => {
          console.log(err);
          this.notifyError('Ocurrió un error al enviar tu mensaje.');
        });
    }
  }
};
</script>
