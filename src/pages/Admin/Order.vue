<template>
  <q-page>
    <toolbar> </toolbar>
    <q-card class="no-shadow q-ma-sm bg-transparent">
      <div class="row justify-end">
        <div class="q-col">
          <q-chip icon="credit_card" color="warning" text-color="white">{{ order.payment.status }}</q-chip>
        </div>
        <div class="q-col">
          <q-chip icon="local_shipping" color="info" text-color="white">{{ order.payment.status }} </q-chip>
        </div>
      </div>
    </q-card>
    <q-card class="no-shadow q-ma-sm" bordered>
      <q-card-section>
        <div class="sutil-title">
          Datos del Comprador
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12"></div>
          <div class="col-xs-12">
            <b>Nombre y Apellido</b> <br />
            {{ order.payer.firstName }} {{ order.payer.lastName }}
          </div>
          <div class="col-sm-5">
            <b>Dirección</b> <br />
            {{ order.payer.address.streetName }} {{ order.payer.address.streetNumber }}
          </div>
          <div class="col-xs-3 col-sm-3">
            <b>Código Postal</b> <br />
            {{ order.payer.address.zipCode }}
          </div>
          <div class="col-xs-9 col-sm-4">
            <b>Localidad</b> <br />
            {{ order.payer.address.city }}
          </div>
          <div class="col-xs-12 col-sm-5">
            <b>Teléfono</b> <br />
            {{ order.payer.phone.areaCode }} {{ order.payer.phone.number }}
          </div>
          <div class="col-xs-12 col-sm-7">
            <b>Email</b> <br />
            {{ order.payer.email }}
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section>
        <div class="sutil-title">
          Artículos
        </div>
      </q-card-section>
      <q-separator />
      <q-section>
        <q-list>
          <q-item v-for="(product, index) of order.products" :key="index">
            <q-item-section side>
              {{ product.code }}
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
      </q-section>
    </q-card>
  </q-page>
</template>

<script>
import Toolbar from 'src/components/Toolbar';
export default {
  components: {
    Toolbar
  },
  data() {
    return {
      order: {
        payer: {}
      }
    };
  },
  methods: {
    openOrder(id) {
      this.$axios('order/' + id).then(res => {
        this.order = res.data;
      });
    },
    calcAmount(product) {
      return product.price * product.qty;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.openOrder(id);
  }
};
</script>
