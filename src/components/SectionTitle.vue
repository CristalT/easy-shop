<template>
  <div class="section-title-container">
    <div class="title-box">
      <slot></slot>
    </div>
<<<<<<< HEAD
    <div class="title-shadow" :class="'bg-' + shadowColor"></div>
=======
    <div class="title-shadow" :class="'bg-' + bgColor"></div>
>>>>>>> 7349c49... initial commit
    <div class="title-bg"></div>
  </div>
</template>

<script>
export default {
  props: {
<<<<<<< HEAD
    shadowColor: {
      type: String,
      default: 'yellow-3'
    }
  }
}
</script>


<style lang="sass" scoped>
=======
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

>>>>>>> 7349c49... initial commit
.section-title-container
    position: relative
    border-bottom: 2px solid $primary
    background-color: transparent
    height: 110px
    margin-top: -110px

<<<<<<< HEAD
    .title-box
        position: absolute
        border: 2px solid $primary
        width: 300px
        height: 50px
=======

    .title-box
        position: absolute
        border: 2px solid $primary
        width: $width
        height: $height
>>>>>>> 7349c49... initial commit
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

<<<<<<< HEAD
=======
        @media (max-width: 640px)
          left: 50%
          transform: translateX(-50%)
          font-size: 1em
          width: $width - 50px
          height: $height - 10px


>>>>>>> 7349c49... initial commit
    .title-shadow
        position: absolute
        width: 300px
        height: 50px
        left: 206px
        bottom: -31px
        z-index: 1

<<<<<<< HEAD
=======
        @media (max-width: 640px)
          left: calc(50% + 3px)
          bottom: -28px
          transform: translateX(-50%)
          width: $width - 50px
          height: $height - 10px

>>>>>>> 7349c49... initial commit
    .title-bg
        position: absolute
        width: 300px
        height: 50px
        left: 200px
        bottom: -25px
        background-color: #fff
        z-index: 0
<<<<<<< HEAD
=======

        @media (max-width: 640px)
          left: 50%
          transform: translateX(-50%)
          width: $width - 50px
          height: $height - 10px
>>>>>>> 7349c49... initial commit
</style>
