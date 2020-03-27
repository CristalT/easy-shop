<template>
  <div class="section-title-container">
    <div class="title-box">
      <slot></slot>
    </div>
    <div class="title-shadow" :class="'bg-' + shadowColor"></div>
    <div class="title-bg"></div>
  </div>
</template>

<script>
export default {
  props: {
    shadowColor: {
      type: String,
      default: 'yellow-3'
    }
  }
}
</script>


<style lang="sass" scoped>
.section-title-container
    position: relative
    border-bottom: 2px solid $primary
    background-color: transparent
    height: 110px
    margin-top: -110px

    .title-box
        position: absolute
        border: 2px solid $primary
        width: 300px
        height: 50px
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

    .title-shadow
        position: absolute
        width: 300px
        height: 50px
        left: 206px
        bottom: -31px
        z-index: 1

    .title-bg
        position: absolute
        width: 300px
        height: 50px
        left: 200px
        bottom: -25px
        background-color: #fff
        z-index: 0
</style>
