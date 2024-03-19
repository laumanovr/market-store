<template>
  <div class="cart-container">
    <h2 class="head-title">Корзина</h2>
    <div class="cart-empty">
      <div class="empty-block">
        <img src="~/assets/images/cart.png" alt="img" />
        <div class="cart-empty-title">В корзине пока пусто</div>
        <SButton color="violet" size="large">Перейти на главную</SButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton } from "@tumarsoft/ogogo-ui";
</script>

<style lang="scss">
.cart-container {
  .cart-empty {
    display: flex;
    justify-content: center;
    .empty-block {
      text-align: center;
    }
    .cart-empty-title {
      font-weight: 700;
      font-size: 20px;
      margin: 8px 0 20px;
      text-align: center;
    }
    .button {
      margin: 0 auto;
    }
  }
}
</style>
