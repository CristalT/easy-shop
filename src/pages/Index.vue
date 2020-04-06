<template>
  <q-page>
    <section id="home">
      <q-carousel
        v-if="homeCarouselSlides.length"
        no-padding
        height="100vh"
        animated
        v-model="slide"
        infinite
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
      >
        <q-carousel-slide v-for="(slide, index) in homeCarouselSlides" :name="index" :key="slide._id" :img-src="filesUrl + slide.image">
          <div class="absolute-bottom slide-caption">
            <div class="slide-title">{{ slide.title }}</div>
            <div class="text-subtitle1">
              {{slide.text}}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="q-py-lg" v-else></div>
    </section>
<<<<<<< HEAD
    <section id="about" class="section" data-aos="fade-up">
      <section-title>Sobre Nosotros</section-title>
      <div class="container text-h6 text-grey-10 q-pt-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus facere aut eos earum adipisci,
        recusandae quibusdam impedit totam, hic in ea non perferendis praesentium laboriosam iure molestiae alias nemo?
      </div>
    </section>
    <section id="brands" class="section" data-aos="fade-up">
      <section-title shadowColor="pink-2">Marcas</section-title>
      <div class="bg-white">
        <div class="container q-pt-xl">
          <brands-carousel />
        </div>
      </div>
    </section>
    <section id="contact" class="section" data-aos="fade-up">
      <section-title shadow-color="teal-2">Contacto</section-title>
      <div class="container">
        <div class="row">
          <div class="col-md-6 flex items-center">
            <contact-data />
          </div>
          <div class="col-md-6 flex items-center">
            <contact-form />
=======

    <!-- ABOUT US -->
    <section id="about" class="section" data-aos="fade-up" v-if="aboutUs && aboutUs.text && aboutUs.text.length">
      <section-title :bg-color="sectionTitleColor">Sobre Nosotros</section-title>
      <div class="container text-h6 text-grey-10 q-pt-md">
          {{ aboutUs.text }}
      </div>
    </section>

    <!-- BRANDS CAROUSEL -->
    <section id="brands" class="section" data-aos="fade-up" v-if="brands.length">
      <section-title :bg-color="sectionTitleColor">Marcas</section-title>
      <div class="bg-white">
        <div class="container q-pt-xl">
          <brands-carousel :slides="brands" />
        </div>
      </div>
    </section>

    <!-- CONTACT DATA & CONTACT FORM -->
    <section id="contact" class="section" data-aos="fade-up" v-if="contactFormEnabled || contactData.length">
      <section-title :bg-color="sectionTitleColor">Contacto</section-title>
      <div class="container">
        <div class="row">
          <div class="col-md-6 flex items-center">
            <contact-data :data="contactData" />
          </div>
          <div class="col-md-6 flex items-center">
            <contact-form v-if="contactFormEnabled"/>
>>>>>>> 7349c49... initial commit
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import SectionTitle from 'src/components/SectionTitle';
import BrandsCarousel from 'src/components/BrandsCarousel';
import ContactData from 'src/components/ContactData';
import ContactForm from 'src/components/ContactForm';
export default {
  name: 'IndexPage',
  components: {
    SectionTitle,
    BrandsCarousel,
    ContactData,
    ContactForm
  },
  data() {
    return {
      slide: 1
    };
  },
<<<<<<< HEAD
  computed: {
    homeCarouselSlides() {
      return this.$store.getters['main/getHomeCarouselSlides']
    }
  },
=======
>>>>>>> 7349c49... initial commit
  mounted() {
    const anchor = this.$store.state.main.activeRoute.anchor;
    const route = this.$store.state.main.activeRoute.route;

    if (anchor && route) {
      this.goto(route, anchor)
    }
  }
};
</script>
