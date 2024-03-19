<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="props.productImageUrl" alt="img" />
      <SIconRender name="FavoriteIcon" color="gray" />
    </div>
    <div class="product-info">
      <div class="product-price">{{ props.price }}</div>
      <div class="product-name">
        {{ props.productName }}
      </div>
      <div class="product-rating">
        <img src="~/assets/images/star.svg" alt="" />
        <span>{{ props.rating }}</span>
      </div>
      <div class="product-brand">
        <img :src="props.brandIconUrl" alt="" />
        <span>{{ props.brandName }}</span>
      </div>
      <SButton color="violet" class="w-100">В корзину</SButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from "@tumarsoft/ogogo-ui";

const props = defineProps({
  productImageUrl: {
    type: String,
  },
  price: {
    type: [Number, String],
  },
  productName: {
    type: String,
  },
  rating: {
    type: [Number, String],
  },
  brandIconUrl: {
    type: String,
  },
  brandName: {
    type: String,
  },
});
</script>

<style lang="scss">
@import "~/assets/style/colors.scss";
.product-card {
  width: 240px;
  .product-image {
    position: relative;
    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
    .favorite {
      position: absolute;
      top: 16px;
      right: 16px;
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
