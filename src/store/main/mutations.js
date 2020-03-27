export function setActiveRoute(state, route) {
  state.activeRoute = route;
}

export function setCategories(state, categories) {
  state.categories = categories;
}

export function setActiveCategories(state, activeCategories) {
  state.activeCategories = activeCategories;
}

export function addProductToOrder(state, product) {
  state.order.products.push(product);
}

export function deleteFromOrder(state, productId) {
  const index = state.order.products.findIndex(p => p._id === productId);
  state.order.products.splice(index, 1);
}

export function setSettings(state, settings) {
  state.settings = settings;
}

export function setMercadoPagoCredentials(state, mpCredentials) {
  Mercadopago.setPublishableKey(mpCredentials.publicKey);
}

export function setHomeCarouselSlides(state, slides) {
  state.homeCarouselSlides = Object.values(slides);
}
