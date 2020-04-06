<template>
  <swiper ref="brandsSwiper" :options="swiperOptions">
    <swiper-slide v-for="(slide, index) of slides" :key="index">
      <q-img :src="filesUrl + slide.filename" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  props: {
    slides: Array
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        speed: 400,
        spaceBetween: 20,
        slidesPerView: 3,
        autoplay: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      }
    };
  }
};
</script>
