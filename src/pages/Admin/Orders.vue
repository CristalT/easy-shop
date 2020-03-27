<template>
  <q-page>
    <toolbar></toolbar>
    <q-card class="no-shadow q-ma-sm" bordered>
      <q-card-section>
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
      orders: []
    };
  },
  methods: {
    getOrders: async function() {
      const request = await this.$axios('orders');
      this.orders = request.data;
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
