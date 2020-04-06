<template>
  <q-page>
    <toolbar>
      <q-btn dense flat color="secondary" icon="eva-save-outline" label="Guardar" @click="saveBrandsCarousel" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section>
        <div class="sutil-title">Carrusel de Marcas</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="col-xs-12">
          <image-uploader
            :debug="1"
            :maxWidth="660"
            :maxHeight="180"
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
          <small class="text-grey-8 text-italic">Tamaño recomendado: 660 x 180px</small>
        </div>
      </q-card-section>
    </q-card>
    <div class="row">
      <!-- slides preview -->
      <div class="col-xs-12 col-sm-3" v-for="(slide, index) of slides" :key="index">
        <q-card class="no-shadow q-ma-xs" bordered>
          <q-img :src="filesUrl + slide.filename" />
          <q-separator />
          <q-card-section class="text-right">
            <q-btn class="q-mr-sm" flat round icon="eva-trash-outline" dense size="sm" color="negative" @click="deleteSlide(index)" />
            <!-- <q-btn flat round icon="eva-edit-outline" dense size="sm" color="primary" /> -->
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Toolbar from 'src/components/Toolbar'
import ImageUploader from 'vue-image-upload-resize';
export default {
  name: 'BrandsCarouselAdminPage',
  components: {
    Toolbar,
    ImageUploader
  },
  data() {
    return {
      slides: []
    };
  },
  methods: {
    async getBrandsCarousel() {
      const response = await this.$axios('brands-carousel');
      console.log(response)
      if (response.data.slides) {
        this.slides = response.data.slides
      }
    },
    async saveBrandsCarousel() {
      const brandsCarousel = {
        _id: 'brandsCarousel',
        slides: this.slides
      };

      try {
        await this.$axios.post('brands-carousel', brandsCarousel);
        this.notifySuccess('Carrusel de marcas actualizado')
      } catch (err) {
        console.log(err)
        this.notifyError('Ocurrió un error al actualizar los datos.');
      }
    },
    async uploadImage(file) {
      try {
        const filename = await this.upload(file);
        this.slides.push({
          filename: filename
        })
      } catch (err) {
        this.notifyError('Error al subir imagen.');
      }
      this.$q.loading.hide();
    },
    deleteSlide(index) {
      this.slides.splice(index, 1)
    }
  },
  created() {
    this.getBrandsCarousel()
  }
};
</script>

<style lang="sass">
#fileInput
  display: none
</style>
