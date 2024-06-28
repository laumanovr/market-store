<template>
  <div class="mobile-menu-container">
    <NuxtLink to="/" class="menu-item">
      <img src="~/assets/icons/home.svg" alt="icon" />
      <div class="menu-item__name">Главная</div>
    </NuxtLink>
    <NuxtLink to="/" class="menu-item">
      <img src="~/assets/icons/catalog.svg" alt="icon" />
      <div class="menu-item__name">Каталог</div>
    </NuxtLink>
    <NuxtLink to="/cart" class="menu-item">
      <SIconRender name="CartIcon" color="gray" />
      <div class="menu-item__name">Корзина</div>
    </NuxtLink>
    <NuxtLink to="/shops" class="menu-item">
      <SIconRender name="ShopIcon" />
      <div class="menu-item__name">Магазины</div>
    </NuxtLink>
    <NuxtLink to="/profile" class="menu-item">
      <SIconRender name="ProfileEditIcon" color="gray" />
      <div class="menu-item__name">Профиль</div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender } from '@tumarsoft/ogogo-ui'
</script>

<style lang="scss">
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.mobile-menu-container {
  display: none;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background: $gray-50;
  padding: 8px 16px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  @media #{$sm} {
    display: flex;
  }
  @media #{$xs} {
    padding: 8px;
  }
  .menu-item {
    text-align: center;
    text-decoration: none;
    &__name {
      font-size: 12px;
      font-weight: 500;
      color: $gray-500;
    }
  }
}
</style>
