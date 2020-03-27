<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-8">
        <q-card bordered class="no-shadow">
          <q-card-section>
            <div class="sutil-title">
              Tus Datos
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-xs-12 col-sm-5">
                <q-input
                  type="text"
                  label="Nombre"
                  v-model="payer.firstName"
                  :error="$v.payer.firstName.$error"
                  @blur="$v.payer.firstName.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-5">
                <q-input
                  type="text"
                  label="Apellido"
                  v-model="payer.lastName"
                  :error="$v.payer.lastName.$error"
                  @blur="$v.payer.lastName.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-2">
                <q-input
                  type="number"
                  label="Documento"
                  v-model="payer.document"
                  :error="$v.payer.document.$error"
                  @blur="$v.payer.document.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-4 col-sm-2">
                <q-input
                  type="tel"
                  label="Cod. Área"
                  v-model="payer.phone.areaCode"
                  :error="$v.payer.phone.areaCode.$error"
                  @blur="$v.payer.phone.areaCode.$touch"
                  :dense="$q.platform.is.mobile"
                />
              </div>
              <div class="col-xs-8 col-sm-4">
                <q-input
                  type="tel"
                  label="Teléfono"
                  v-model="payer.phone.number"
                  :error="$v.payer.phone.number.$error"
                  @blur="$v.payer.phone.number.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-6">
                <q-input
                  type="email"
                  label="Email"
                  v-model="payer.email"
                  :error="$v.payer.email.$error"
                  @blur="$v.payer.email.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-9 col-sm-8">
                <q-input
                  type="text"
                  label="Calle"
                  v-model="payer.address.streetName"
                  :error="$v.payer.address.streetName.$error"
                  @blur="$v.payer.address.streetName.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-3 col-sm-2">
                <q-input
                  type="text"
                  label="Nro."
                  v-model="payer.address.streetNumber"
                  :error="$v.payer.address.streetNumber.$error"
                  @blur="$v.payer.address.streetNumber.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-2">
                <q-input
                  type="text"
                  label="Piso y Dpto."
                  v-model="payer.address.apartment"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-4">
                <q-input
                  type="text"
                  label="Código Postal"
                  v-model="payer.address.zipCode"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
              <div class="col-xs-12 col-sm-8">
                <q-input
                  type="text"
                  label="Localidad"
                  v-model="payer.address.city"
                  :error="$v.payer.address.city.$error"
                  @blur="$v.payer.address.city.$touch"
                  :dense="$q.platform.is.mobile"
                ></q-input>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-card class="q-mt-sm no-shadow" bordered>
          <q-card-section>
            <div class="sutil-title">
              Tu compra
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section v-if="!products.length">
            <q-banner class="bg-yellow-2">
              <template v-slot:avatar>
                <q-icon name="shopping_cart" color="primary" />
              </template>
              Todavía no agregaste ningún artículo a tu compra.
              <template v-slot:action>
                <q-btn flat color="primary" label="Ir al Catálogo" @click="goto('/catalog', false)" />
              </template>
            </q-banner>
          </q-card-section>
          <q-card-section v-if="products.length">
            <q-list>
              <q-item v-for="product of products" :key="product._id">
                <q-item-section top side>
                  <q-btn
                    @click="deleteFromOrder(product._id)"
                    icon="eva-trash-outline"
                    color="grey-8"
                    flat
                    round
                    dense
                  ></q-btn>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6">{{ product.name }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>Cantidad</q-item-label>
                  <q-item-label class="text-h6">{{ product.qty }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>Precio</q-item-label>
                  <q-item-label class="text-h6"> $ {{ product.price }} </q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>Importe</q-item-label>
                  <q-item-label class="text-h6"> $ {{ calcAmount(product) }} </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4">
        <q-card class="no-shadow" bordered>
          <q-card-section>
            <div class="sutil-title q-mb-sm">Pagás</div>
            <q-item-label class="text-h5 text-grey-8 text-center"> $ {{ total }} </q-item-label>
          </q-card-section>
          <q-card-section>
            <q-select label="Forma de Pago" :options="paymentMethods" v-model="paymentMethod" />
          </q-card-section>
          <q-card-section>
            <q-btn
              label="Finalizar Compra"
              :disabled="!paymentMethod"
              color="accent"
              class="full-width"
              @click="finishOrder"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { round } from 'src/helpers';
import { required, integer, email, requiredIf } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      paymentMethod: null,
      payer: {
        firstName: '',
        lastName: '',
        document: '',
        email: '',
        address: {
          city: '',
          zipCode: '',
          streetName: '',
          streetNumber: '',
          apartment: ''
        },
        phone: {
          areaCode: '',
          number: ''
        }
      }
    };
  },
  validations: {
    payer: {
      firstName: { required },
      lastName: { required },
      document: { required, integer },
      email: {
        required: requiredIf(function() {
          this.paymentMethod !== 'Acuerdo con el vendedor';
        }),
        email
      },
      address: {
        city: { required },
        streetName: { required },
        streetNumber: { required, integer }
      },
      phone: {
        areaCode: { required, integer },
        number: { required, integer }
      }
    }
  },
  methods: {
    calcAmount(product) {
      return product.price * product.qty;
    },
    deleteFromOrder(id) {
      this.$q
        .dialog({
          title: 'Borrar artículo',
          message: 'Estás por borrar el artículo de tu lista de compra. ¿Confirmás?',
          cancel: true
        })
        .onOk(() => {
          const index = this.$store.commit('main/deleteFromOrder', id);
        });
    },
    finishOrder() {
      const payload = {
        payer: this.payer,
        products: this.products,
        payment: {
          method: this.paymentMethod,
          status: 'PENDING'
        }
      };
      this.$axios.put('order', payload).then(() => {
        localStorage.setItem('payerData', JSON.stringify(this.payer))
      });
    }
  },
  computed: {
    paymentMethods() {
      return this.settings.paymentMethods.map(pm => pm.label);
    },
    products() {
      return this.$store.getters['main/getOrderProducts'];
    },
    total() {
      return round(
        this.products.reduce((acc, item) => {
          acc += Number(item.price * item.qty);
          return acc;
        }, 0),
        2
      );
    }
  },
  created() {
    const localData = localStorage.getItem('payerData');

    if (localData) {
      this.payer = JSON.parse(localData)
    }
  }
};
</script>
