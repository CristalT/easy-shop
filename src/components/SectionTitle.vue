<template>
  <div class="section-title-container">
    <div class="title-box">
      <slot></slot>
    </div>
    <div class="title-shadow" :class="'bg-' + bgColor"></div>
    <div class="title-bg"></div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'white'
    }
  }
};
</script>

<style lang="sass" scoped>
$width: 300px;
$height: 50px;

.section-title-container
    position: relative
    border-bottom: 2px solid $primary
    background-color: transparent
    height: 110px
    margin-top: -110px


    .title-box
        position: absolute
        border: 2px solid $primary
        width: $width
        height: $height
        left: 200px
        bottom: -25px
        z-index: 2

        display: flex
        align-items: center
        justify-content: center

        font-size: 1.2em
        color: $primary
        text-transform: uppercase
        letter-spacing: 3px

        @media (max-width: 640px)
          left: 50%
          transform: translateX(-50%)
          font-size: 1em
          width: $width - 50px
          height: $height - 10px


    .title-shadow
        position: absolute
        width: 300px
        height: 50px
        left: 206px
        bottom: -31px
        z-index: 1

        @media (max-width: 640px)
          left: calc(50% + 3px)
          bottom: -28px
          transform: translateX(-50%)
          width: $width - 50px
          height: $height - 10px

    .title-bg
        position: absolute
        width: 300px
        height: 50px
        left: 200px
        bottom: -25px
        background-color: #fff
        z-index: 0

        @media (max-width: 640px)
          left: 50%
          transform: translateX(-50%)
          width: $width - 50px
          height: $height - 10px
</style>
