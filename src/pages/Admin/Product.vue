<template>
  <q-page>
    <toolbar>
      <q-btn flat dense color="secondary" icon="eva-save-outline" label="Guardar" @click="saveProduct" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section>
<<<<<<< HEAD
        <q-toggle v-model="product.public" label="Visible al público" />
=======
        <div class="row">
          <div class="col">

        <q-toggle v-model="product.public" label="Visible al público" />
          </div>
          <div class="col">
            <q-toggle v-model="product.priceVisible" label="Precio visible" :disabled="!product.public" />
          </div>
        </div>
>>>>>>> 7349c49... initial commit
      </q-card-section>
      <q-separator />
      <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12">
          <q-input
            type="text"
            label="Nombre del Producto"
            v-model="product.name"
            :error="$v.product.name.$error"
            @blur="$v.product.name.$touch"
          />
        </div>
        <div class="col-xs-12 col-sm-4">
          <q-select
            :options="categories"
            label="Categoría"
            v-model="product.category"
            :error="$v.product.category.$error"
            @blur="$v.product.category.$touch"
          />
        </div>
        <div class="col-xs-12 col-sm-3">
          <q-input
            type="text"
            label="Código"
            v-model="product.code"
            :error="$v.product.code.$error"
            @blur="$v.product.code.$touch"
          />
        </div>
        <div class="col-xs-12 col-sm-2">
          <q-input
            type="text"
            label="Stock"
            v-model="product.stock"
            :error="$v.product.stock.$error"
            @blur="$v.product.stock.$touch"
          />
        </div>
        <div class="col-xs-12 col-sm-3">
          <q-input
<<<<<<< HEAD
            type="number"
=======
            type="text"
>>>>>>> 7349c49... initial commit
            label="Precio"
            v-model="product.price"
            :error="$v.product.price.$error"
            @blur="$v.product.price.$touch"
          />
        </div>
        <div class="col-xs-12">
          <q-input
            type="textarea"
            label="Descripción"
            v-model="product.description"
            :error="$v.product.description.$error"
            @blur="$v.product.description.$touch"
          />
        </div>
        <div class="col-xs-12" v-if="hasImagesSpace">
          <image-uploader
            :debug="1"
            :maxWidth="640"
            :quality="0.9"
            :preview="false"
            outputFormat="file"
            accept=".jpg"
            @input="uploadImage"
            @onUpload="$q.loading.show()"
          >
            <label for="fileInput" slot="upload-label" class="cursor-pointer">
              <div class="flex items-center text-accent">
                <q-icon name="eva-camera-outline" size="32px" />
                <span class="q-ml-sm">
                  AGREGAR IMAGEN

                  <q-tooltip>
                    Agregue imagen del producto
                  </q-tooltip>
                </span>
              </div>
            </label>
          </image-uploader>
        </div>
        <div class="col-xs-12" v-else>
          <q-banner class="bg-yellow-3">Se alcanzó el límite de imágenes por producto.</q-banner>
        </div>
      </div>
      <div class="row q-col-gutter-md q-mt-md">
        <div class="col-xs-12 col-sm-6 col-md-3" v-for="(image, index) of product.images" :key="index">
          <q-card>
            <q-img :src="filesUrl + image" class="img-product-preview" />
            <q-separator />
            <q-card-section class="text-right">
              <q-btn
                class="q-mr-sm"
                :flat="!isDefaultImg(image)"
                unelevated
                round
                dense
                icon="check"
                :color="isDefaultImg(image) ? 'green' : 'grey-8'"
                @click="setDefaultImg(image)"
              >
                <q-tooltip>
                  Establecer como imagen principal
                </q-tooltip>
              </q-btn>
              <q-btn flat round dense icon="eva-trash-outline" color="negative" @click="deleteImg(image)" />
            </q-card-section>
          </q-card>
        </div>
      </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { required, integer, decimal } from 'vuelidate/lib/validators';
import { Product } from 'src/mixins/products';
import Toolbar from 'src/components/Toolbar';
import ImageUploader from 'vue-image-upload-resize';
export default {
  components: {
    Toolbar,
    ImageUploader
  },
  mixins: [Product],
  data() {
    return {
      product: {
        public: true,
<<<<<<< HEAD
=======
        priceVisible: true,
>>>>>>> 7349c49... initial commit
        name: '',
        code: '',
        description: '',
        category: '',
        images: [],
        defaultImage: ''
      }
    };
  },
  validations: {
    product: {
      name: { required },
      code: { required },
      description: { required },
      price: { required, decimal },
      stock: { required, integer },
      category: { required },
      images: { required }
    }
  },
  methods: {
    saveProduct: async function() {
      /** Data validation */
      this.$v.product.$touch();
      if (this.$v.product.$invalid) {
        if (this.$v.product.images.$error) {
          this.notifyError('Debe subir las imágenes del producto.');
          return;
        }
        this.notifyError('Los campos en rojo son requeridos.');
        return;
      }

      if (!this.product.defaultImage.length) {
        this.product.defaultImage = this.product.images[0];
      }

      /** Everything is ok, lets send data to server */
      this.$q.loading.show();
      if (!this.$route.params.id) {
        await this.createProduct();
      } else {
        await this.updateProduct(this.$route.params.id);
      }
      this.$q.loading.hide();
      this.$router.push('/admin/products');
    },
    createProduct() {
      const product = this.product;
      return this.$axios
        .put('product', this.product)
        .then(() => {
          this.notifySuccess('Producto guardado correctamente.');
        })
        .catch(err => {
          this.notifyError('Ocurrió un error al guardar el producto.');
          console.error(err);
        });
    },
    updateProduct(id) {
      const product = this.product;
      return this.$axios
        .post('product/' + id, this.product)
        .then(() => {
          this.notifySuccess('Producto actualizado correctamente.');
        })
        .catch(err => {
          this.notifyError('Ocurrió un error al actualizar el producto.');
          console.error(err);
        });
    },
    uploadImage: async function(file) {
      const filename = await this.upload(file);
      this.addImage(filename);
      this.$q.loading.hide();
    },
    addImage(filename) {
      this.product.images.push(filename);
    },
    setDefaultImg(filename) {
      this.product.defaultImage = filename;
    },
    isDefaultImg(filename) {
      return filename === this.product.defaultImage;
    },
    deleteImg(filename) {
      const index = this.product.images.indexOf(filename);

      if (index > -1) {
        this.product.images.splice(index, 1);
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters['main/getCategories'];
    },
    hasImagesSpace() {
      return this.product.images.length < 4;
    }
  },
  created: async function() {
    this.$store.dispatch('main/fetchCategories');
    const id = this.$route.params.id;

    if (id) {
      this.product = await this.openProduct(id);
    }
  }
};
</script>

<style lang="sass">
#fileInput
  display: none
</style>
