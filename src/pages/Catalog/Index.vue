<template>
  <q-page>
    <toolbar>
      <q-btn
        @click="goto('/catalog', '#' + category, 0)"
        flat
        color="grey-9"
        :label="category"
        v-for="(category, index) of categories"
        :key="index"
      />
    </toolbar>
    <div class="menu-spacer"></div>

    <section :id="cat" class="section" v-for="(cat, index) in categories" :key="index" data-aos="fade-up">
<<<<<<< HEAD
      <section-title>{{ cat }}</section-title>
=======
      <section-title :bg-color="sectionTitleColor">{{ cat }}</section-title>
>>>>>>> 7349c49... initial commit
      <div class="container q-py-xl">
        <div class="row q-col-gutter-md">
          <div class="col-md-3" v-for="(product, index) in productsByCategory(cat)" :key="index">
            <q-card @click="$router.push('/product/' + product._id)" class="cursor-pointer">
              <q-img :src="filesUrl + product.defaultImage" class="catalog-img" />
              <q-card-section class="text-grey-10">
                <div class="text-h6">{{ product.name }}</div>
                <div class="text-subtitle2">{{ wordLimit(product.description, 5) }}</div>
              </q-card-section>
              <q-card-section class="text-grey-10 text-center">
<<<<<<< HEAD
                <div class="text-h5">{{ product.price | currency }}</div>
=======
                <div class="text-h5" v-if="product.priceVisible && product.price > 0">{{ product.price | currency }}</div>
>>>>>>> 7349c49... initial commit
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-page>
</template>
<script>
import SectionTitle from 'src/components/SectionTitle';
import { Product } from 'src/mixins/products';
import Toolbar from 'src/components/Toolbar';
import { wordLimit } from 'src/helpers';
export default {
  components: {
    SectionTitle,
    Toolbar
  },
  mixins: [Product],
  data() {
    return {
      products: []
    };
  },
  methods: {
    productsByCategory(category) {
      return this.products.filter(p => p.category === category);
    },
    wordLimit: wordLimit
  },
  computed: {
    categories() {
      return this.$store.getters['main/getActiveCategories'];
    }
  },
  filters: {
    currency(val) {
      return new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'ARS'
      }).format(val);
    }
  },
  created: async function() {
    const products = await this.getProducts()
    this.products = Object.values(products)
  }
};
</script>
