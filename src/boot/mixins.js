const Common = {
  methods: {
    notifyError(message) {
      this.$q.notify({
        message: message,
        color: 'negative',
        progress: true,
        icon: 'warning',
        position: 'bottom-right',
        actions: [{ icon: 'close', flat: true, round: true, dense: true, color: 'white' }]
      });
    },
    notifySuccess(message) {
      this.$q.notify({
        message: message,
        color: 'positive',
        icon: 'eva-checkmark-circle-outline',
        progress: true,
        position: 'bottom-right',
        actions: [{ icon: 'close', flat: true, round: true, dense: true, color: 'white' }]
      });
    },
    goto(route, anchor, offset = 50) {
      if (anchor && route === this.$route.path) {
        const anchorId = anchor.replace('#', '');
        const anchorElement = document.getElementById(anchorId);
        window.scrollTo(0, anchorElement.offsetTop + offset);
      } else {
        if (this.$route.path !== route) {
          this.$router.push(route);
        }
      }

      this.$store.commit('main/setActiveRoute', {
        route: route,
        anchor: anchor
      });
    },
    isActive(menuRoute) {
      const activeRoute = this.$store.state.main.activeRoute;
      if (menuRoute.route === activeRoute.route && menuRoute.anchor === activeRoute.anchor) {
        return true;
      }
      return false;
    },
    upload(file) {
      const formData = new FormData();
      formData.append(file.name, file);
      return this.$axios({
        method: 'POST',
        url: this.uploadUrl,
        data: formData,
        headers: {
          'Content-type': 'multipart/form-data'
        },
        timeout: 15000
      }).then(res => res.data.filename);
    },
    getContactData: async function() {
      try {
        const response = await this.$axios('contact-data');
        return response.data;
      } catch (err) {
        this.notifyError('Ocurrió un error al obtener los datos de contacto.');
      }
    }
  },
  computed: {
    uploadUrl() {
      return process.env.API_URL + 'upload';
    },
    filesUrl() {
      return process.env.UPLOADS_URL;
    },
    settings() {
      return this.$store.getters['main/getSettings'];
    },
    sectionTitleColor() {
      return this.$store.getters['template/getSectionTitleColor'];
    },
    contactData() {
      return this.$store.getters['main/contactData'];
    },
    homeCarouselSlides() {
      return this.$store.getters['main/getHomeCarouselSlides'];
    },
    brands() {
      return this.$store.getters['main/getBrands'];
    },
    aboutUs() {
      return this.$store.getters['main/getAboutUs'];
    },
    contactData() {
      return this.$store.getters['main/getContactData'];
    },
    contactFormEnabled() {
      return this.settings && this.settings.contactForm && this.settings.contactForm.enabled;
    },
    adminEnabled() {
      const admin = sessionStorage.getItem('adminToken');
      if (admin) {
        return true;
      }
      return false;
    }
  }
};
export default async ({ Vue }) => {
  Vue.mixin(Common);
};
