<template>
    <div class="slider__wrapper">
      <div
        class="slider"
        :style="{'margin-left': '-' + (100 * currentSlide) + '%'}"
        >
        <div v-for="item in sliderItems" :key="sliderItems.id" class="slider__photo">
            <img :src="item.img" alt="Main photo"/>
            <Transition>
                <div class="slider__content" v-if="currentSlide == 0">
                    <div class="slider__title">
                        <h2>Игра начинается</h2>
                    </div>
                    <div class="slider__text"><p>С выгодой на геймерские телефоны от магазина SoftTech»</p></div>
                    <div class="slider__btn">
                        <SButton color="black" size="large" class="w-100">
                            Смотреть
                        </SButton>
                    </div>
                </div>
            </Transition>
        </div>

      </div>
        <button class="btn__left btn" @click="prevSlide">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                <path d="M28 15L19.2101 23.5098C19.1435 23.5742 19.0907 23.6506 19.0546 23.7347C19.0186 23.8188 19 23.9089 19 24C19 24.0911 19.0186 24.1812 19.0546 24.2653C19.0907 24.3494 19.1435 24.4258 19.2101 24.4902L28 33" stroke="#141619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="btn__right btn" @click="nextSlide">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                <path d="M19 15L27.7899 23.5098C27.8565 23.5742 27.9093 23.6506 27.9454 23.7347C27.9814 23.8188 28 23.9089 28 24C28 24.0911 27.9814 24.1812 27.9454 24.2653C27.9093 24.3494 27.8565 24.4258 27.7899 24.4902L19 33" stroke="#141619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref,onMounted } from 'vue'
import { SButton } from "@tumarsoft/ogogo-ui";

const props = defineProps(['sliderItems']);

const currentSlide = ref(0);
const interval = ref(5000);

const prevSlide = ():void => {
    if (currentSlide.value > 0) {
    currentSlide.value--
    }
};

onMounted(() => {
        if (interval.value > 0) {
        setInterval(() => {
            nextSlide();
        }, interval.value);
        }
    });

const nextSlide = ():void => {
    if (currentSlide.value >= props.sliderItems.length - 1) {
    currentSlide.value = 0
    } else {
    currentSlide.value++
    }
};
  
</script>
  
<style lang="scss" scoped>
    .slider {
        width: 1360px;
        display: flex;
        align-items: center;
        transition: all ease .8s;
        &__wrapper {
            width: 1360px;
            overflow: hidden;
            margin: 0 auto;
            border-radius: 16px;
            position: relative;
        }
        &__photo {
            height: 360px;
            position: relative;
        }
        &__photo img {
            width: 1360px;
            height: 360px;
        }
        &__content{
            width: 32%;
            position: absolute;
            left: 200px;
            top: 80px;
        }
        &__title h2 {
            font-size: 44px;
            font-weight: 700;
            letter-spacing: 0.44px;
            margin: 0;
        }
        &__text p{
            font-size: 18px;
            font-weight: 500;
            margin: 0;
        }
        &__text {
            margin: 12px 0 24px 0;
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
        transition: opacity 2s ease;
    }

    .v-leave-active {
        transition: opacity 0.2s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>