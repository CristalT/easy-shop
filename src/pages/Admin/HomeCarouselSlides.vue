<template>
  <q-page>
    <toolbar>
      <q-btn flat dense label="Nuevo" color="secondary" icon="eva-plus-circle-outline" to="slide" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section v-if="slides.length">
        <q-list>
          <q-item clickable v-for="slide in slides" :key="slide._id">
            <q-item-section avatar>
              <q-avatar>
                <img :src="uploadsUrl + slide.image" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ slide.title }}</q-item-label>
              <q-item-label caption>{{ wordLimit(slide.text, 4) }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn icon="eva-trash-outline" flat round color="negative" @click="deleteSlide(slide._id)" size="sm" />
            </q-item-section>
            <q-item-section side>
              <q-btn icon="eva-edit-outline" flat round color="primary" :to="'slide/' + slide._id" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section v-if="!loading && !slides.length">
        <q-banner class="bg-blue-2 text-blue-10">
          <q-icon name="eva-info-outline" class="q-mr-md" size="3em"/>
          No se encontraron slides en su carrusel de inicio.
        </q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { wordLimit } from 'src/helpers';
import Toolbar from 'src/components/Toolbar';
export default {
  components: {
    Toolbar
  },
  data() {
    return {
      loading: true,
      slides: []
    };
  },
  methods: {
    getSlides: async function() {
      this.loading = true;
      const request = await this.$axios.get('home-carousel/slides');
      this.slides = Object.values(request.data);
      this.loading = false;
    },
    deleteSlide(id) {
      this.$q
        .dialog({
          title: 'Borrar slide',
          message: 'Está por eliminar el slide seleccionado. ¿Continuar?',
          cancel: true
        })
        .onOk(async () => {
          await this.$axios.delete(`home-carousel/slide/${id}`);
          this.getSlides();
        });
    },
    wordLimit: wordLimit
  },
  computed: {
    uploadsUrl() {
      return process.env.UPLOADS_URL;
    }
  },
  created() {
    this.getSlides();
  }
};
</script>
