<template>
  <q-page padding class="flex items-center justify-center">
    <form>
      <q-card>
        <q-card-section>
          <div class="sutil-title">Acceso Administrador</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input type="email" v-model="user.email" label="Email" autocomplete="username">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <q-input type="password" v-model="user.password" label="Contraseña" @keyup.enter="login" autocomplete="current-password">
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
          </q-input>
        </q-card-section>
        <q-separator />
        <q-card-section class="text-center bg-grey-3">
          <q-btn color="primary" unelevated @click="login">
            <span v-if="!sending">Aceptar</span>
            <q-spinner-dots v-else></q-spinner-dots>
          </q-btn>
        </q-card-section>
      </q-card>
    </form>
  </q-page>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
  name: 'AdminLoginPage',
  data() {
    return {
      sending: false,
      user: {
        email: '',
        password: ''
      }
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    async login() {
      this.$v.user.$touch();

      if (this.$v.user.$invalid) {
        return null;
      }

      this.sending = true;

      await this.$axios.post('user/login', this.user).then(res => {
        this.$store.commit('main/setAdminToken', res.data.token);
        this.$axios.defaults.headers.common = {
          Authorization: 'Bearer ' + res.data.token
        };
        this.$router.push('/admin');
      }).catch(err => {
        console.log(err)
        this.notifyError('Ocurrió un error al iniciar sesión')
      });

      this.sending = false;
    }
  }
};
</script>
