<template>
  <q-page>
    <toolbar finder @search="filterProducts">
      <q-btn flat dense label="Nuevo" color="secondary" icon="eva-plus-circle-outline" to="product" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow" bordered>
<<<<<<< HEAD
      <q-card-section>
=======
      <q-card-section v-if="filteredProducts.length">
>>>>>>> 7349c49... initial commit
        <q-list v-for="product in filteredProducts" :key="product._id">
          <q-item clickable :class="{ 'bg-grey-4': !product.public }" class="q-ma-sm">
            <q-item-section avatar>
              <q-avatar>
                <img :src="uploadsUrl + product.defaultImage" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ product.name }}</q-item-label>
              <q-item-label caption>{{ wordLimit(product.description, 4) }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-item-label caption>Stock: {{ product.stock }}</q-item-label>
            </q-item-section>
            <q-item-section class="text-right" side>
              <q-item-label> $ {{ product.price | numberFormat }} </q-item-label>
            </q-item-section>
            <q-item-section side>
<<<<<<< HEAD
              <q-btn icon="eva-trash-outline" @click="deleteProduct(product._id)" flat round color="negative" />
=======
              <q-btn icon="eva-trash-outline" @click="deleteProduct(product._id)" flat round color="negative" size="sm" />
>>>>>>> 7349c49... initial commit
            </q-item-section>
            <q-item-section side>
              <q-btn icon="eva-edit-outline" :to="'product/' + product._id" flat round color="primary" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
<<<<<<< HEAD
=======
      <q-card-section v-else>
         <q-banner class="bg-blue-2 text-blue-10">
          <q-icon name="eva-info-outline" class="q-mr-md" size="3em" />
          Sin resultados.
        </q-banner>
      </q-card-section>
>>>>>>> 7349c49... initial commit
    </q-card>
  </q-page>
</template>

<script>
import { wordLimit, numberFormat } from 'src/helpers';
import { Product } from 'src/mixins/products';
import Toolbar from 'src/components/Toolbar';
export default {
  components: {
    Toolbar
  },
  mixins: [Product],
  data() {
    return {
      products: [],
      filteredProducts: []
    };
  },
  methods: {
    fetchProducts: async function() {
      const products = await this.getProductsAdmin();
      this.products = Object.values(products);
      this.filteredProducts = Object.values(products);
    },
    getProductsAdmin() {
      return this.$axios('products-admin').then(res => res.data);
    },
    filterProducts(value) {
      if (value.length) {
        const products = this.products;
        const terms = value.toString().split(' ');
        this.filteredProducts = products.filter(p =>
          Object.values(p).some(col =>
            terms.some(
              t =>
                col
                  .toString()
                  .toLowerCase()
                  .indexOf(t.toLowerCase()) > -1
            )
          )
        );
      } else {
        this.filteredProducts = this.products;
      }
    },
    deleteProduct(id) {
      this.$q
        .dialog({
          title: 'Borrar producto',
          message: 'Está por eliminar el producto seleccionado. ¿Continuar?',
          cancel: true
        })
        .onOk(async () => {
          await this.$axios.delete(`product/${id}`);
          this.fetchProducts();
        });
    },
    wordLimit: wordLimit
  },
  computed: {
    uploadsUrl() {
      return process.env.UPLOADS_URL;
    }
  },
  filters: {
    numberFormat: numberFormat
  },
  created() {
    this.fetchProducts();
  }
};
</script>
