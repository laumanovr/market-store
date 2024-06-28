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
@import '~/assets/style/screens.scss';
.shop-container {
  .head-title {
    font-size: 24px;
  }
  .shops {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    @media #{$xs} {
      gap: 8px;
    }
    .shop {
      width: 213px;
      min-height: 168px;
      padding: 16px;
      border-radius: 16px;
      background: $gray-50;
      text-decoration: none;
      color: $black;
      @media #{$sm} {
        width: 172px;
      }
      @media #{$xs} {
        width: 104px;
        min-height: 104px;
      }
    }
    .shop-image {
      width: 80px;
      height: 80px;
      @media #{$xs} {
        width: 36px;
        height: 36px;
      }
    }
    .shop-name {
      margin-top: 16px;
      font-weight: 600;
      font-size: 16px;
      @media #{$xs} {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }
}
</style>
