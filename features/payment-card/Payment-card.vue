<template>
  <div class="payment-card">
    <button class="payment-card__content">
      <div class="payment-card__icon">
        <SIconRender name="card-add" />
      </div>
      <div class="payment-card__text">Новой картой</div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender } from '@tumarsoft/ogogo-ui'
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.payment-card {
  &__content {
    background: transparent;
    border-radius: 8px;
    border: 1.5px solid $gray-200;
    text-align: center;
    padding: 13px 18px;
    cursor: pointer;
  }
  &__text {
    font-size: 12px;
    font-weight: 500;
  }
}
</style>
