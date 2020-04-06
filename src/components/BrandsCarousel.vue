<template>
<<<<<<< HEAD
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="primary"
    padding
    arrows
    autoplay
    infinite
    height="120px"
  >
    <q-carousel-slide :name="1">
      <div
        class="row q-col-gutter"
      >
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/amphora.png"
        />
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/cat.png"
        />
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/good_company.png"
        />
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/nat_geo.png"
        />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2">
      <div
        class="row"
      >
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/primicia.png"
        />
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/quaglia.png"
        />
        <q-img
          class="col-xs-6 col-sm-4 col-md-3"
          src="statics/brands/xl.png"
        />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
    data() {
        return  {
            slide: 1
        }
    }
}
=======
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
>>>>>>> 7349c49... initial commit
</script>
