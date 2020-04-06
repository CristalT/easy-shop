<template>
  <q-list>
    <q-item
      class="q-my-sm"
<<<<<<< HEAD
      v-for="(item, index) in contactData"
=======
      v-for="(item, index) in data"
>>>>>>> 7349c49... initial commit
      :key="index"
      @click="openLink(item.link)"
      :clickable="Boolean(item.link)"
    >
      <q-item-section avatar>
        <q-avatar>
          <q-icon color="primary" :name="item.icon" size="30px" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6 text-grey-10">{{ item.title }}</q-item-label>
        <q-item-label caption lines="1">{{ item.label }}</q-item-label>
      </q-item-section>
<<<<<<< HEAD
=======

      <q-item-section side v-if="adminTools"> 
        <q-btn @click="$emit('remove', index)" flat color="negative" round icon="eva-trash-outline" />
      </q-item-section>
      <q-item-section side v-if="adminTools"> 
        <q-btn @click="$emit('edit', index)" flat color="primary" round icon="eva-edit-outline" />
      </q-item-section>
>>>>>>> 7349c49... initial commit
    </q-item>
  </q-list>
</template>

<script>
<<<<<<< HEAD
import { contactData } from "src/components/contact-data";
export default {
  data() {
    return {
      contactData: contactData
    };
=======
export default {
  name: 'ContactDataComponent',
  props: {
    data: {
      type: Array
    },
    adminTools: {
      type: Boolean,
      default: false
    }
>>>>>>> 7349c49... initial commit
  },
  methods: {
    openLink(link) {
      if (link) {
<<<<<<< HEAD
        if (link.indexOf("https") === 0) {
=======
        if (link.indexOf('https') === 0) {
>>>>>>> 7349c49... initial commit
          window.open(link);
        }
      }
      return;
    }
  }
};
</script>
