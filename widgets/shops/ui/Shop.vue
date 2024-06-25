<template>
  <div class="shop-container">
    <div class="head-title">Магазины</div>
    <div class="shops">
      <NuxtLink to="/shops/2" class="shop" v-for="i in 11" :key="i">
        <img src="~/assets/images/moi-tel.png" alt="img" class="shop-image" />
        <div class="shop-name">Мой телефон</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '~/assets/style/colors.scss';
.shop-container {
  .shops {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    .shop {
      width: 213px;
      min-height: 168px;
      padding: 16px;
      border-radius: 16px;
      background: $gray-50;
      text-decoration: none;
      color: $black;
    }
    .shop-image {
      width: 80px;
      height: 80px;
    }
    .shop-name {
      margin-top: 16px;
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
