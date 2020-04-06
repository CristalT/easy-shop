<template>
  <q-page>
    <toolbar>
      <q-btn flat dense color="secondary" icon="eva-save-outline" label="Guardar" @click="saveContactData" />
    </toolbar>
    <q-card bordered class="q-ma-sm no-shadow">
      <q-card-section>
        <div class="sutil-title">Datos de Contacto</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12 col-sm-4">
            <q-input type="text" v-model="model.title" label="Nombre" />
          </div>
          <div class="col-xs-12 col-sm-4">
            <q-input type="text" v-model="model.label" label="Descripción" />
          </div>
          <div class="col-xs-12 col-sm-4">
            <q-input type="text" v-model="model.link" label="Link" />
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="bg-grey-1">
        <div class="sutil-title text-center divided q-mb-md">Icono</div>
        <div class="col-xs-12">
          <div class="flex justify-around">
            <q-btn
              @click="model.icon = icon"
              flat
              round
              v-for="(icon, index) in icons"
              :key="index"
              :icon="icon"
              :color="model.icon == icon ? 'accent' : 'grey-8'"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="text-center">
        <q-btn
          :label="editing ? 'Guardar Cambios' : 'Agregar'"
          unelevated
          color="secondary"
          @click="addContactDataItem"
        />
      </q-card-section>
    </q-card>
    <q-card class="q-ma-sm no-shadow" bordered v-if="ContactData.items.length">
      <q-card-section>
        <contact-data :data="ContactData.items" admin-tools @remove="deleteItem" @edit="editItem" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import Toolbar from 'src/components/Toolbar';
import ContactData from 'src/components/ContactData';
import { required } from 'vuelidate/lib/validators';
export default {
  name: 'ContactAdminPage',
  components: {
    Toolbar,
    ContactData
  },
  data() {
    return {
      editing: false,
      model: {
        title: '',
        label: '',
        icon: '',
        link: ''
      },
      ContactData: {
        _id: 'contactData',
        items: []
      },
      icons: [
        'eva-facebook',
        'eva-camera',
        'location_on',
        'eva-pin-outline',
        'eva-phone-outline',
        'eva-phone',
        'eva-twitter',
        'map',
        'email',
        'eva-email-outline',
        'alternate_email'
      ]
    };
  },
  validations: {
    model: {
      title: { required },
      label: { required }
    }
  },
  methods: {
    addContactDataItem() {
      this.$v.model.$touch();

      if (this.$v.model.$invalid) {
        return;
      }

      if (this.model.__index === undefined) {
        this.ContactData.items.push(this.model);
      } else {
        const { __index, ...item } = this.model;
        this.ContactData.items[__index] = item;
      }

      this.model = {
        title: '',
        icon: '',
        label: '',
        link: ''
      };
      this.editing = false;
      this.$v.$reset();
    },
    saveContactData() {
      this.$axios
        .post('contact-data', this.ContactData)
        .then(res => {
          this.notifySuccess('Datos de contacto guardados correctamente.');
        })
        .catch(err => {
          this.notifyError('Ocurrió un error al guardar los datos de contacto.');
        });
    },
    deleteItem(index) {
      this.ContactData.items.splice(index, 1);
    },
    editItem(index) {
      this.model = this.ContactData.items[index];
      this.model.__index = index;
      this.editing = true;
    }
  },
  created: async function() {
    const contactData = await this.getContactData();
    if (contactData) {
      this.ContactData.items = contactData;
    }
  }
};
</script>
