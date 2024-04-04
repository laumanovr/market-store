<template>
  <div class="categories">
    <div class="categories__container">
      <div class="categories__content">
        <div class="categories__title">
          <h3>
            {{ title }}
          </h3>
        </div>
        <div class="categories__items">
          <Promotions v-for="item in 17" :key="item" @click="openPages" />
        </div>
        <div class="categories__title-categories">
          <h3>Популярные товары</h3>
          <div class="categories__btn">
            <Button color="gray">
              Все товары
              <template v-slot:rightIcon>
                <BaseIcon name="arrow" viewBox="0 0 14 11" />
              </template>
            </Button>
          </div>
        </div>
        <div class="categories__popular">
          <ProductCard
            v-for="i in 17"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Promotions } from '~/widgets/promotions'
import ProductCard from '~/shared/components/product-card/ProductCard.vue'
import Button from '~/shared/components/button/button.vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

const route = useRoute()
const router = useRouter()
const title = ref(route.params.id)

const openPages = () => {
  router.push('/filter-product/1')
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.categories {
  &__popular {
    grid-gap: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__items {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    grid-gap: 15px;
    margin-top: 36px;
  }
  &__title-categories {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__btn {
    width: 140px;
  }
  &__btn:deep(.button) {
    height: 40px;
    color: $gray-500;
    display: flex;
    align-items: center;
  }
  &__btn:deep(.button__text) {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.056px;
  }
}
</style>
