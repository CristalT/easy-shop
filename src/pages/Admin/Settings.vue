<template>
  <q-page>
    <toolbar>
      <q-btn flat dense color="secondary" icon="eva-save-outline" label="Guardar" @click="saveSettings" />
    </toolbar>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="sutil-title">Catálogo</div>
          <q-toggle v-model="Settings.catalogOn" label="Catálogo habilitado" />
        </q-card-section>
        <q-card-section>
          <div class="sutil-title">Medios de Pago Habilitados</div>
          <div v-for="(method, index) of Settings.paymentMethods" :key="index">
            <q-checkbox v-model="method.value" :label="method.label" />
          </div>
        </q-card-section>
        <q-card-section>
          <div class="sutil-title">Credenciales MercadoPago</div>
          <q-input
            :disabled="!hasMpEnabled"
            :readonly="!hasMpEnabled"
            class="q-mx-sm"
            type="text"
            v-model="Settings.mercadoPagoCredentials.publicKey"
            label="Public Key"
            :error="$v.Settings.mercadoPagoCredentials.publicKey.$error"
            @blur="$v.Settings.mercadoPagoCredentials.publicKey.$touch"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import Toolbar from 'src/components/Toolbar';
import { requiredIf } from 'vuelidate/lib/validators';
export default {
  name: 'SettingsPage',
  components: {
    Toolbar
  },
  data() {
    return {
      Settings: {
        _id: 'settings',
        catalogOn: true,
        paymentMethods: [
          {
            label: 'MercadoPago',
            value: false
          },
          {
            label: 'Acuerdo con el vendedor',
            value: false
          }
        ],
        mercadoPagoCredentials: {
          publicKey: ''
        }
      }
    };
  },
  validations: {
    Settings: {
      mercadoPagoCredentials: {
        publicKey: {
          required: requiredIf(function() {
            return this.hasMpEnabled;
          })
        }
      }
    }
  },
  methods: {
    getSettings: async function() {
      const request = await this.$axios('settings');
      if (request.data.length) {
        const settings = request.data[0];
        for (let index in settings) {
          if (this.Settings[index]) {
            this.Settings[index] = settings[index];
          }
        }
      }
    },
    saveSettings() {
      this.$v.Settings.$touch();
      if (this.$v.Settings.$invalid) {
        return;
      }
      
      this.$axios
        .post('settings', this.Settings)
        .then(() => {
          this.notifySuccess('Configuración guardada correctamente.');
        })
        .catch(err => {
          console.log(err);
          this.notifyError('Ocurrió un error al guardar la configuración.');
        });
    }
  },
  computed: {
    hasMpEnabled() {
      return this.Settings.paymentMethods.find(pm => pm.label === 'MercadoPago').value;
    }
  },
  created() {
    this.getSettings();
  }
};
</script>
