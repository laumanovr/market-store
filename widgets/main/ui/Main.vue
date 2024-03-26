<template>
  <div class="main">
    <div class="main__container">
      <div class="main__content">
        <div class="main__slider">
          <Slider :sliderItems='sliderItems'/>
        </div>
        <div class="main__principal">
          
        </div>
        <div class="main__product product-card">
          <div class="product-card__new">

          </div>
          <div class="product-card__recommend">

          </div>
          <div class="product-card__cashback">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Slider from '~/shared/components/slider/Slider.vue'

const sliderItems = ref([
  {
    id: 1,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png'
  },
  {
    id: 2,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png'
  },
  {
    id: 3,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png'
  },
  {
    id: 4,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png'
  },
  {
    id: 5,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png'
  },
])
</script>

<style lang="scss" scoped>
  .main {
    &__slider {
      margin-top: 12px;
    }
  }
</style>
  