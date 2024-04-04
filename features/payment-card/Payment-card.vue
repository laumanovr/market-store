<template>
  <div class="payment-card">
    <div class="payment-card__content">
      <div class="payment-card__icon">
        <BaseIcon name="card" viewBox="0 0 24 24" class="icon-svg" />
      </div>
      <div class="payment-card__text">Новой картой</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.payment-card {
  &__content {
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
.icon-svg {
  width: 24px;
  height: 24px;
}
</style>
