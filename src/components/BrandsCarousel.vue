<template>
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
</script>
