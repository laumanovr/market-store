<template>
  <div class="product-card">
    <div class="product-image">
      <img src="../../assets/images/iphone-img.jpg" alt="img" />
    </div>
    <div class="product-info">
      <div class="product-price">105 990</div>
      <div class="product-name">
        Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN
      </div>
      <div class="product-rating">
        <img src="../../assets/images/star.svg" alt="" />
        <span>4.6 (356)</span>
      </div>
      <div class="product-brand">
        <img src="../../assets/images/shop-logo.png" alt="" />
        <span>Мой телефон</span>
      </div>
      <SButton color="violet" class="w-100">В корзину</SButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton } from "@tumarsoft/ogogo-ui";
</script>

<style lang="scss">
@import "../../assets/style/colors.scss";
.product-card {
  width: 240px;
  .product-image {
    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
  }
  .product-info {
    margin-top: 24px;
  }
  .product-price {
    font-weight: 700;
    font-size: 20px;
  }
  .product-name {
    font-weight: 500;
    font-size: 14px;
    margin: 8px 0;
    max-height: 35px;
    overflow: hidden;
  }
  .product-rating {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 8px;
    }
  }
  .product-brand {
    display: flex;
    align-items: center;
    margin: 8px 0 24px;
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 8px;
      color: $gray-500;
    }
  }
}
</style>
