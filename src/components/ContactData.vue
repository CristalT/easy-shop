<template>
  <q-list>
    <q-item
      class="q-my-sm"
      v-for="(item, index) in contactData"
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
    </q-item>
  </q-list>
</template>

<script>
import { contactData } from "src/components/contact-data";
export default {
  data() {
    return {
      contactData: contactData
    };
  },
  methods: {
    openLink(link) {
      if (link) {
        if (link.indexOf("https") === 0) {
          window.open(link);
        }
      }
      return;
    }
  }
};
</script>
