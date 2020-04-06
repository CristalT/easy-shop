<template>
  <q-list>
    <q-item
      class="q-my-sm"
      v-for="(item, index) in data"
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

      <q-item-section side v-if="adminTools"> 
        <q-btn @click="$emit('remove', index)" flat color="negative" round icon="eva-trash-outline" />
      </q-item-section>
      <q-item-section side v-if="adminTools"> 
        <q-btn @click="$emit('edit', index)" flat color="primary" round icon="eva-edit-outline" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
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
  },
  methods: {
    openLink(link) {
      if (link) {
        if (link.indexOf('https') === 0) {
          window.open(link);
        }
      }
      return;
    }
  }
};
</script>
