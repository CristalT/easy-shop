<template>
  <q-page>
    <toolbar>
      <q-btn label="Nueva" flat dense @click="addCategory" icon="eva-plus-circle-outline" color="secondary" />
    </toolbar>

    <q-card class="q-ma-sm no-shadow" bordered>
      <q-card-section v-if="categories.length">
        <q-list v-for="item in categories" :key="item._id">
          <q-item clickable>
            <q-item-section>
              {{ item.name }}
            </q-item-section>
            <q-item-section side>
              <q-btn icon="eva-trash-outline" flat round dense size="sm" color="negative" @click="deleteCategory(item._id)" />
            </q-item-section>
            <q-item-section side>
              <q-btn icon="eva-edit-outline" flat round dense color="primary" @click="editCategory(item._id)" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section v-else>
        <q-banner class="bg-blue-2 text-blue-10">
          <q-icon name="eva-info-outline" class="q-mr-md" size="3em" />
          No se encontraron categorías.
        </q-banner>
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
      categories: []
    };
  },
  methods: {
    getAllCategories: async function() {
      const response = await this.$axios('category');
      this.categories = Object.values(response.data);
    },
    addCategory() {
      this.$q
        .dialog({
          title: 'Categoría',
          message: 'Ingrese el nombre de la categoría',
          prompt: {
            model: '',
            type: 'text'
          },
          cancel: true
        })
        .onOk(async data => {
          if (data && data.trim().length) {
            await this.$axios.put('category', {
              name: data
            });
            this.getAllCategories();
            this.$store.dispatch('main/fetchCategories');
          }
        });
    },
    editCategory(id) {
      const selectedCat = this.categories[id];
      if (!selectedCat) {
        this.notifyError('No se encuentra la categoría seleccionada');
        return;
      }
      this.$q
        .dialog({
          title: 'Categoría',
          message: 'Ingrese el nombre de la categoría',
          prompt: {
            model: selectedCat.name,
            type: 'text'
          },
          cancel: true
        })
        .onOk(async data => {
          await this.$axios.post('category/' + id, {
            name: data
          });
          this.getAllCategories();
          this.$store.dispatch('main/fetchCategories');
        });
    },
    deleteCategory(id) {
      this.$q
        .dialog({
          title: 'Borrar Categoria',
          message: '¿Confirma que desea borrar la categoría?',
          cancel: true
        })
        .onOk(() => {
          this.$axios.delete(`category/${id}`).then(() => {
            this.getAllCategories();
            this.$store.dispatch('main/fetchCategories');
          });
        });
    }
  },
  created() {
    this.getAllCategories();
  }
};
</script>
