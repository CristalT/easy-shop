export const Product = {
  methods: {
    openProduct: async function(id) {
      const request = await this.$axios(`product/${id}`);
      return request.data;
    },
    getProducts: async function(category) {
      const uri = category ? 'products/' + category : 'products';
      const request = await this.$axios(uri);
      return request.data;
    }
  }
};
