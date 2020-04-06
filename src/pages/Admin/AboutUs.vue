<template>
  <q-page>
    <toolbar>
      <q-btn flat color="secondary" dense @click="saveChanges" label="Guardar" icon="eva-save-outline" />
    </toolbar>
    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section>
        <div class="sutil-title">Sobre Nosotros</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row">
          <div class="col-xs-12">
            <q-input type="textarea" v-model="About.text" label="Texto" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Toolbar from 'src/components/Toolbar';
export default {
  name: 'AboutIndexPage',
  components: {
    Toolbar
  },
  data() {
    return {
      About: {
        _id: 'about',
        text: ''
      }
    };
  },
  methods: {
    getAbout() {
      this.$axios('about').then(res => {
        if (res.data.length) {
          this.About = res.data[0];
        }
      });
    },
    saveChanges() {
      this.$axios
        .post('about', this.About)
        .then(res => {
          this.notifySuccess('Sección "Sobre Nosotros" actualizada correctamente.');
        })
        .catch(err => {
          this.notifyError('Ocurrió un error al guardar los cambios.');
        });
    }
  },
  created() {
    this.getAbout();
  }
};
</script>
