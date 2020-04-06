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
<<<<<<< HEAD
          <q-btn label="Enviar" color="primary" icon="eva-email-outline" unelevated />
=======
        <q-btn label="Enviar" color="primary" icon="eva-email-outline" unelevated @click="sendMessage" />
>>>>>>> 7349c49... initial commit
      </div>
    </div>
  </form>
</template>

<script>
<<<<<<< HEAD
=======
import { required, email } from 'vuelidate/lib/validators';
>>>>>>> 7349c49... initial commit
export default {
  data() {
    return {
      contact: {
<<<<<<< HEAD
        name: "",
        email: "",
        message: ""
      }
    };
=======
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
>>>>>>> 7349c49... initial commit
  }
};
</script>
