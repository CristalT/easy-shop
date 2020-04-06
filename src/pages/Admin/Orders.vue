<template>
  <q-page>
    <toolbar></toolbar>
    <q-card class="no-shadow q-ma-sm" bordered>
<<<<<<< HEAD
      <q-card-section>
=======
      <q-card-section v-if="!loading && orders.length">
>>>>>>> 7349c49... initial commit
        <q-list v-for="(order, index) in orders" :key="index">
          <q-item clickable v-ripple :to="'order/' + order._id">
            <q-item-section>
              <q-item-label class="text-grey-10 text-h6">
                {{ order.payer.firstName }} {{ order.payer.lastName }}
              </q-item-label>
              <q-item-label caption>
                <div class="row">
                  <div class="col">
                    Total <br />
                    <b> $ {{ totalOrder(order.products) }} </b>
                  </div>
                  <div class="col">
                    Forma de Pago <br />
                    <b>
                      {{ order.payment.method }}
                    </b>
                  </div>
                  <div class="col">
                    Estado del Pago <br />
                    <b>
                      {{ order.payment.status }}
                    </b>
                  </div>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
<<<<<<< HEAD
=======
      <q-card-section v-if="loading" class="text-center">
        <q-spinner-dots size="2em" color="secondary" />
      </q-card-section>
      <q-card-section v-if="!loading && !orders.length">
        <q-banner class="bg-blue-2 text-blue-10">
          <q-icon name="eva-info-outline" size="3em" class="q-mr-md"></q-icon>No se encontraron resultados.</q-banner>
      </q-card-section>
>>>>>>> 7349c49... initial commit
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
<<<<<<< HEAD
=======
      loading: true,
>>>>>>> 7349c49... initial commit
      orders: []
    };
  },
  methods: {
    getOrders: async function() {
<<<<<<< HEAD
      const request = await this.$axios('orders');
      this.orders = request.data;
=======
      try {
        const request = await this.$axios('orders');
        this.orders = request.data;
      } catch (err) {
        this.notifyError('Ocurrió un error al obtener las órdenes de compra.')
      }
      this.loading = false;
>>>>>>> 7349c49... initial commit
    },
    totalOrder(products) {
      return products.reduce((acc, item) => {
        acc += Number(item.price * item.qty);
        return acc;
      }, 0);
    }
  },
  computed: {},
  created() {
    this.getOrders();
  }
};
</script>
