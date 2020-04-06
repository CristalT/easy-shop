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
  localStorage.setItem('orderProducts', JSON.stringify(state.order.products));
}

export function importOrderProducts(state) {
  const local = localStorage.getItem('orderProducts');

  if (local) {
    state.order.products = JSON.parse(local);
  }
}

export function deleteFromOrder(state, productId) {
  const index = state.order.products.findIndex(p => p._id === productId);
  state.order.products.splice(index, 1);
}

export function setSettings(state, settings) {
  state.settings = settings;
}

export function setHomeCarouselSlides(state, slides) {
  state.homeCarouselSlides = Object.values(slides);
}

export function setAboutUs(state, data) {
  state.aboutUs = data;
}

export function setAdminToken(state, data) {
  state.adminToken = data;
  sessionStorage.setItem('adminToken', data);
}

export function setContactData(state, data) {
  state.contactData = data;
}

export function setBrands(state, data) {
  state.brands = data;
}
