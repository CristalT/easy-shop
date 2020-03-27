<template>
  <q-page padding>
    <div class="container">
      <q-card data-aos="fade-up">
        <q-card-section class="no-padding">
          <div class="row">
            <div class="col-6">
              <q-carousel height="500px" no-padding v-model="slide" swipeable thumbnails infinite animated>
                <q-carousel-slide
                  v-for="(img, index) of images"
                  :key="index"
                  :name="index"
                  :img-src="uploadsUrl + img"
                />
              </q-carousel>
            </div>
            <div class="col-6 q-pa-md">
              <div class="relative-position full-height" v-if="product">
                <div class="row q-col-gutter-sm">
                  <div class="col-12">
                    <div class="text-h5 text-grey-10">{{ product.name }}</div>
                    <div class="text-subtitle1 text-grey-9">
                      {{ product.description }}
                    </div>
                    <div class="q-mt-md">
                      <span class="text-h4">$ {{ product.price }}</span>
                    </div>
                  </div>
                </div>
                <div class="buy-options">
                  <q-input type="number" v-model="qty" filled bottom-slots label="Cantidad" stack-label dense>
                    <template v-slot:prepend>
                      <q-icon name="eva-shopping-cart-outline" class="cursor-pointer" />
                    </template>
                    <template v-slot:after>
                      <q-btn outline label="Comprar" @click="addToCart(product)" />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { Product } from 'src/mixins/products';
export default {
  mixins: [Product],
  data() {
    return {
      slide: 0,
      qty: 1,
      product: null
    };
  },
  methods: {
    addToCart(item) {
      const exists = this.$store.state.main.order.products.findIndex(p => p._id === item._id);

      if (exists > -1) {
        this.$q.dialog({
          title: 'Compra repetida',
          message: 'El artículo seleccionado ya se encuentra en su carrito de compras.'
        });
        return;
      }

      this.$store.commit('main/addProductToOrder', {
        _id: item._id,
        code: item.code,
        name: item.name,
        qty: this.qty,
        price: item.price
      });
      this.notifySuccess('El artículo fue agregado a tu carrito de compras');
    }
  },
  computed: {
    uploadsUrl() {
      return process.env.UPLOADS_URL;
    },
    images() {
      if (this.product) {
        return this.product.images;
      }
      return [];
    }
  },
  created: async function() {
    const productId = this.$route.params.id;
    this.product = await this.openProduct(productId);
    this.slide = this.product.images.indexOf(this.product.defaultImage);
  }
};
</script>

<style lang="sass" scoped>
.buy-options
    position: absolute
    width: 100%
    bottom: 0
</style>
