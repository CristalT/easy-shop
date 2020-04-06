import { axiosInstance } from 'src/boot/axios';

/** Fetch all categories */
export async function fetchCategories({ commit }) {
  const request = await axiosInstance('category');
  commit('setCategories', request.data);
}

/** Count how many items exists on each category */
export async function fetchActiveCategories({ commit }) {
  const request = await axiosInstance('active-categories');
  commit('setActiveCategories', request.data);
}

/** Retrieve the main settings of the application */
export async function fetchSettings({ commit }) {
  const request = await axiosInstance('settings');
  commit('setSettings', request.data[0]);
}

/** Get the slides to fill home's carousel */
export async function fetchHomeCarouselSlides({ commit }) {
  const request = await axiosInstance('home-carousel/slides');
  commit('setHomeCarouselSlides', request.data);
}

/** Get About Us info */
export async function fetchAboutUs({ commit }) {
  const request = await axiosInstance('about');
  commit('setAboutUs', request.data[0]);
}


/** Get Contact Data */
export async function fetchContactData({ commit }) {
  const request = await axiosInstance('contact-data');
  commit('setContactData', request.data);
}

export async function fetchBrands({ commit }) {
  const response = await axiosInstance('brands-carousel');
  let brands = []
  console.log(response.data)
  if (response.data.slides) {
    brands = response.data.slides;
    commit('setBrands', brands);
  }
}
