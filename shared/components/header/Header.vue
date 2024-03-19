<template>
  <div class="header-container">
    <div class="logo">
      <img src="~/assets/images/Ogogo-logo.png" alt="" class="img" />
      <SSwitchButton />
    </div>
    <SInput isSearchable placeHolder="Поиск" width="100%" />
    <div class="menu-items">
      <div class="menu-item">
        <NuxtLink to="/favorite">
          <SIconRender name="FavoriteIcon" color="gray" />
          <span>Избранное</span>
        </NuxtLink>
      </div>
      <div class="menu-item">
        <SIconRender name="BoxIcon" />
        <span>Заказы</span>
      </div>
      <div class="menu-item">
        <NuxtLink to="/cart">
          <SIconRender name="CartIcon" color="gray" />
          <span>Корзина</span>
        </NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/profile">
          <img src="~/assets/images/empty-ava.svg" alt="ava" />
          <span>Иван</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender, SInput, SSwitchButton } from "@tumarsoft/ogogo-ui";
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  .logo {
    display: flex;
    align-items: center;
    margin-right: 24px;
    .img {
      margin-right: 24px;
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    .menu-item {
      text-align: center;
      margin-left: 30px;
      cursor: pointer;
      span {
        display: block;
        font-weight: 500;
        font-size: 12px;
        color: $gray-500;
      }
      a {
        display: block;
        text-decoration: none;
      }
    }
  }
}
</style>
