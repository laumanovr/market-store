<template>
  <div class="favorite-container">
    <div class="s-text-h-2 s-mb-6 s-mt-6">Избранное</div>
    <div class="favorite-products">
      <ProductCard
        v-for="i in 8"
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
</template>

<script lang="ts" setup>
import ProductCard from '~/shared/components/product-card/ProductCard.vue'
const router = useRouter()
</script>

<style lang="scss" scoped>
.favorite-container {
  .favorite-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
  }
}
</style>
