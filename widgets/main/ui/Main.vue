<template>
  <div class="main">
    <div class="main__container">
      <div class="main__content">
        <div class="main__slider">
          <Slider :sliderItems="sliderItems" />
        </div>
        <div>
          <Promotions />
        </div>
        <div class="main__product product-card">
          <div class="product-card__new">
            <div class="product-card__title">
              <h3>Новинки месяца</h3>
              <div class="product-card__btn">
                <SButton type="secondary" size="small">
                  <span class="s-mr-2 s-text-tertiary-dark">Все товары</span>
                  <SIconRender name="chevron-right" class="s-text-gray-500" />
                </SButton>
              </div>
            </div>
            <div class="product-card__content">
              <ProductCard
                v-for="i in 5"
                :key="i"
                productImageUrl="images/iphone-img.jpg"
                price="105 990"
                productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
                rating="4.6 (356)"
                brandIconUrl="images/shop-logo.png"
                brandName="Мой телефон"
                @isOpenRouter="router.push('/product-card')"
              />
            </div>
          </div>
          <div class="product-card__recommend">
            <div class="product-card__title">
              <h3>Рекомендуем приобрести</h3>
              <div class="product-card__btn">
                <SButton type="secondary" size="small">
                  <span class="s-mr-2 s-text-tertiary-dark">Все товары</span>
                  <SIconRender name="chevron-right" class="s-text-gray-500" />
                </SButton>
              </div>
            </div>
            <div class="product-card__content">
              <ProductCard
                v-for="i in 5"
                :key="i"
                productImageUrl="images/iphone-img.jpg"
                price="105 990"
                productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
                rating="4.6 (356)"
                brandIconUrl="images/shop-logo.png"
                brandName="Мой телефон"
                @isOpenRouter="router.push('/product-card')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'
import { ref } from 'vue'
import Slider from '~/shared/components/slider/Slider.vue'
import { Promotions } from '~/widgets/promotions'
import ProductCard from '~/shared/components/product-card/ProductCard.vue'
const router = useRouter()

const sliderItems = ref<{ id: number; name: string; img: string }[]>([
  {
    id: 1,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png',
  },
  {
    id: 2,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png',
  },
  {
    id: 3,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png',
  },
  {
    id: 4,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png',
  },
  {
    id: 5,
    name: 'img1',
    img: '_nuxt/assets/images/slider1.png',
  },
])
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.main {
  &__slider {
    margin-top: 12px;
  }
}
.product-card {
  &__title {
    margin: 64px 0 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 0.32px;
      margin: 0;
      text-align: start;
      @media #{$sm} {
        font-size: 24px;
      }
    }
  }
  &__btn {
    width: 140px;
  }
  &__btn:deep(.SButton) {
    height: 40px;
    color: $gray-500;
    display: flex;
    align-items: center;
  }
  &__btn:deep(.SButton__text) {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.056px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
