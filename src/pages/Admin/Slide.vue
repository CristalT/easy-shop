<template>
  <q-page>
    <toolbar>
      <q-btn flat dense color="secondary" icon="eva-save-outline" label="Guardar" @click="saveSlide" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow q-pa-md" bordered>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12">
          <q-input type="text" label="Título" v-model="slide.title" />
        </div>
        <div class="col-xs-12">
          <q-input type="textarea" v-model="slide.text" label="Texto" />
        </div>

        <div class="col-xs-12">
          <image-uploader
            :debug="1"
            :maxWidth="1000"
            :quality="0.9"
            outputFormat="file"
            accept=".jpg, .png"
            :preview="false"
            @input="uploadImage"
            @onUpload="$q.loading.show()"
          >
            <label for="fileInput" slot="upload-label" class="cursor-pointer">
              <div class="flex items-center text-accent">
                <q-icon name="eva-camera-outline" size="32px" />
                <span class="q-ml-sm">
                  SELECCIONAR IMAGEN
                  <q-tooltip>
                    Agregue imagen del producto
                  </q-tooltip>
                </span>
              </div>
            </label>
          </image-uploader>
        </div>
        <div class="col-xs-12" v-if="slide.image">
<<<<<<< HEAD
          <q-img :src="filesUrl + slide.image" style="max-height: 400px"/>
=======
          <q-img :src="filesUrl + slide.image" style="max-height: 400px" />
>>>>>>> 7349c49... initial commit
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
<<<<<<< HEAD
import Toolbar from 'src/components/Toolbar'
=======
import Toolbar from 'src/components/Toolbar';
>>>>>>> 7349c49... initial commit
import ImageUploader from 'vue-image-upload-resize';

export default {
  components: {
    Toolbar,
    ImageUploader
  },
  data() {
    return {
      slide: {
        title: '',
        text: '',
        image: null
      }
    };
  },
  methods: {
    openSlide: async function(id) {
      const request = await this.$axios(`home-carousel/slide/${id}`);
      this.slide = request.data;
    },
    uploadImage: async function(file) {
<<<<<<< HEAD
      console.log('Uploading image', file)
      const filename = await this.upload(file);
      this.slide.image = filename;
      this.$q.loading.hide()
=======
      console.log('Uploading image', file);
      try {
        const filename = await this.upload(file);
        this.slide.image = filename;
      } catch (err) {
        this.notifyError('Ocurrió un error al subir la imagen. Intente nuevamente.');
      }
      this.$q.loading.hide();
>>>>>>> 7349c49... initial commit
    },
    saveSlide: async function() {
      if (!this.$route.params.id) {
        await this.$axios
          .put('home-carousel/slide', this.slide)
          .then(() => {
            this.notifySuccess('Slide creado exitosamente.');
          })
          .catch(err => {
            console.log(err);
            this.notifyError('Ocurrió un error al crear el slide.');
          });
      } else {
        await this.$axios
          .post(`home-carousel/slide/${this.$route.params.id}`, this.slide)
          .then(() => {
            this.notifySuccess('Slide actualizado existosamente.');
          })
          .catch(err => {
            console.log(err);
            this.notifyError('Ocurrió un error al actualizar el slide.');
          });
      }

<<<<<<< HEAD
      this.$router.push('/admin/home-carousel-slides')
=======
      this.$router.push('/admin/home-carousel-slides');
>>>>>>> 7349c49... initial commit
    }
  },
  computed: {
    uploadUrl() {
      return process.env.API_URL + 'upload';
    }
  },
  created() {
    const id = this.$route.params.id;

    if (id) {
      this.openSlide(id);
    }
  }
};
</script>
<style lang="sass">
#fileInput
  display: none
</style>
