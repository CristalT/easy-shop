export function getCategories(state) {
  const categories = [];

  for (const id in state.categories) {
    categories.push(state.categories[id].name);
  }
  return categories;
}

export function getActiveCategories(state) {
  return state.activeCategories.filter(item => item.productsCount > 0).map(item => item.category);
}

export function getOrderProductsCount(state) {
  return state.order.products.length;
}

export function getOrderProducts(state) {
  return state.order.products;
}

export function getSettings(state) {
  return state.settings;
}

export function getHomeCarouselSlides(state) {
  return state.homeCarouselSlides;
}
