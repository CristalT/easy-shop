<template>
  <nav class="toolbar">
    <slot></slot>
    <q-input type="text" label="Buscar ..." dense class="toolbar_finder" outlined v-if="finder" v-model="terms" />
    <q-select
      :options="categories"
      label="Categoría"
      dense
      class="toolbar_filter"
      outlined
      v-if="finder"
      v-model="filterCategory"
    />
  </nav>
</template>

<script>
export default {
  props: {
    finder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      terms: '',
      filterCategory: ''
    };
  },
  watch: {
    terms(v) {
      if (v) {
        this.$emit('search', v);
      }
    },
    filterCategory(v) {
      if (v) {
        this.$emit('search', v);
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters['main/getCategories'];
    }
  }
};
</script>

<style lang="sass" scoped>
.toolbar
    position: sticky
    position: -webkit-sticky;
    top: 65px
    height: 52px
    padding: 10px
    border-bottom: 1px solid #ccc
    background-color: #fff
    z-index: 9

.toolbar_finder
    display: inline
    position: absolute
    width: 200px
    right: 210px
    top: 4px

.toolbar_filter
    display: inline
    position: absolute
    width: 200px
    right: 5px
    top: 4px
</style>
