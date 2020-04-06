<template>
  <q-page>
    <toolbar>
      <q-btn flat dense color="secondary" icon="eva-save-outline" label="Guardar" @click="saveSettings" />
    </toolbar>
    <div class="q-pa-md">
      <q-card>
        <q-card-section>
          <div class="sutil-title filled semi-rounded">Catálogo</div>
          <div class="row">
            <div class="col">
              <q-toggle v-model="Settings.catalogOn" label="Catálogo habilitado" />
            </div>
            <div class="col">
              <q-toggle v-model="Settings.salesOn" :disabled="!Settings.catalogOn" label="Ventas Online habilitadas" />
            </div>
          </div>
          <fieldset>
            <legend>Medios de Pago</legend>
            <div v-for="(method, index) of Settings.paymentMethods" :key="index">
              <q-checkbox v-model="method.value" :label="method.label" />
            </div>
          </fieldset>
        </q-card-section>
        <q-card-section>
          <div class="sutil-title filled">Credenciales MercadoPago</div>
          <div class="row q-col-gutter-sm">
            <div class="col-xs-12 col-sm-6">
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
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                :disabled="!hasMpEnabled"
                :readonly="!hasMpEnabled"
                class="q-mx-sm"
                type="text"
                v-model="Settings.mercadoPagoCredentials.accessToken"
                label="Access Token"
                :error="$v.Settings.mercadoPagoCredentials.accessToken.$error"
                @blur="$v.Settings.mercadoPagoCredentials.accessToken.$touch"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="sutil-title filled">Mailing</div>
          <fieldset>
            <legend>
              Configuración de Mailjet
            </legend>
            <div class="row q-col-gutter-sm">
              <div class="col-xs-12 col-sm-6">
                <q-input type="text" label="Public Key" v-model="Settings.mailing.mailjet.publicKey" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input type="text" label="Private Key" v-model="Settings.mailing.mailjet.privateKey" />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Envíos de Mail</legend>
            <div class="row q-col-gutter-sm">
              <div class="col-xs-12 col-sm-6">
                <q-input class="col" type="email" label="Email Remitente" v-model="Settings.mailing.from.email" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input class="col" type="text" label="Nombre Remitente" v-model="Settings.mailing.from.name" />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Formulario de Contacto</legend>
            <div class="row q-col-gutter-sm flex items-center">
              <div class="col-xs-12 col-sm-6">
                <q-toggle class="col" label="Mostrar" v-model="Settings.contactForm.enabled" />
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input
                  class="col"
                  type="text"
                  label="Email Destinatario"
                  v-model="Settings.contactForm.emailTo"
                  :error="$v.Settings.contactForm.emailTo.$error"
                  @blur="$v.Settings.contactForm.emailTo.$touch"
                />
              </div>
            </div>
          </fieldset>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import Toolbar from 'src/components/Toolbar';
import { requiredIf, email } from 'vuelidate/lib/validators';
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
        salesOn: false,
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
          publicKey: '',
          accessToken: ''
        },
        mailing: {
          mailjet: {
            publicKey: '',
            privateKey: ''
          },
          from: {
            name: '',
            email: ''
          }
        },
        contactForm: {
          enabled: false,
          emailTo: ''
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
        },
        accessToken: {
          required: requiredIf(function() {
            return this.hasMpEnabled;
          })
        }
      },
      contactForm: {
        emailTo: {
          required: requiredIf(function() {
            return this.hasContactFormEnabled;
          }),
          email
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
    },
    hasContactFormEnabled() {
      return this.Settings.contactForm.enabled;
    }
  },
  created() {
    this.getSettings();
  }
};
</script>
