<template>
  <div class="favorite-container">
    <div class="head-title">Избранное</div>
    <div class="favorite-products">
      <ProductCard
        v-for="i in 8"
        :key="i"
        productImageUrl="_nuxt/assets/images/iphone-img.jpg"
        price="105 990"
        productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
        rating="4.6 (356)"
        brandIconUrl="_nuxt/assets/images/shop-logo.png"
        brandName="Мой телефон"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "~/shared/components/product-card/ProductCard.vue";
</script>

<style lang="scss">
.favorite-container {
  .favorite-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
  }
}
</style>
