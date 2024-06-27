<template>
  <div class="slider__wrapper">
    <div
      class="slider"
      :style="{ 'margin-left': '-' + 100 * currentSlide + '%' }"
    >
      <div v-for="item in sliderItems" :key="item" class="slider__photo">
        <img :src="item.img" alt="Main photo" />
        <Transition>
          <div class="slider__content" v-if="currentSlide == 0">
            <div class="slider__title">
              <h2>Игра начинается</h2>
            </div>
            <div class="slider__text">
              <p>С выгодой на геймерские телефоны от магазина SoftTech»</p>
            </div>
            <div class="slider__btn">
              <SButton size="large" class="wp-100"> Смотреть </SButton>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <button class="btn__left btn" @click="prevSlide">
      <BaseIcon name="arrowRoundLeft" viewBox="0 0 48 48" />
    </button>
    <button class="btn__right btn" @click="nextSlide">
      <BaseIcon name="arrowRoundRight" viewBox="0 0 48 48" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SButton } from '@tumarsoft/ogogo-ui'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

const props = defineProps(['sliderItems'])

const currentSlide = ref(0)
const interval = ref(5000)

const prevSlide = (): void => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

// onMounted(() => {
//   if (interval.value > 0) {
//     setInterval(() => {
//       nextSlide()
//     }, interval.value)
//   }
// })

const nextSlide = (): void => {
  if (currentSlide.value >= props.sliderItems.length - 1) {
    currentSlide.value = 0
  } else {
    currentSlide.value++
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/screens.scss';
.slider {
  width: 100%;
  display: flex;
  align-items: center;
  transition: all ease 0.8s;
  &__wrapper {
    max-width: 1360px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 16px;
    position: relative;
  }
  &__photo {
    min-width: 100%;
    height: 360px;
    position: relative;
    @media #{$lg} {
      height: 220px;
    }
    @media #{$sm} {
      height: 140px;
    }
  }
  &__photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media #{$lg} {
      object-fit: unset;
    }
  }
  &__content {
    width: 32%;
    position: absolute;
    left: 200px;
    top: 80px;
    @media #{$sm} {
      height: 100%;
      width: 45%;
      top: 5px;
      left: 5px;
    }
  }
  &__title h2 {
    font-size: 44px;
    font-weight: 700;
    letter-spacing: 0.44px;
    margin: 0;
    @media #{$lg} {
      font-size: 36px;
    }
    @media #{$sm} {
      font-size: 20px;
    }
  }
  &__text p {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    @media #{$sm} {
      font-size: 14px;
    }
    @media #{$xs} {
      font-size: 10px;
    }
  }
  &__text {
    margin: 12px 0 24px 0;
    @media #{$sm} {
      margin: 5px 0;
    }
  }
  &__btn {
    width: 30%;
  }
}

.btn {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  & svg {
    width: 48px;
    height: 48px;
  }
  &__left {
    position: absolute;
    left: 24px;
    top: 42%;
  }
  &__right {
    position: absolute;
    right: 24px;
    top: 42%;
  }
}

.v-enter-active {
  transition: opacity 0.2s ease;
}

.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
