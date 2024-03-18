<template>
  <div>
    <Header />
    <Profile />
    <hr />
    <ProductCard
      productImageUrl="_nuxt/assets/images/iphone-img.jpg"
      price="105 990"
      productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
      rating="4.6 (356)"
      brandIconUrl="_nuxt/assets/images/shop-logo.png"
      brandName="Мой телефон"
    />
  </div>
</template>

<script lang="ts" setup>
import Header from "../shared/header/Header.vue";
import Profile from "../shared/profile/Profile.vue";
import ProductCard from "../shared/product-card/ProductCard.vue";
</script>
