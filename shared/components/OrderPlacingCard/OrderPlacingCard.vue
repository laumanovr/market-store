<template>
  <div class="order-card">
    <div class="order-card__container">
      <div class="order-card__content">
        <div class="order-card__product product-order order-flex">
          <div class="product-order__title order-title">3 товара</div>
          <div class="product-order__text">128 487 сом</div>
        </div>
        <div class="order-card__sum sum-order order-flex">
          <div class="sum-order__title order-title">Сумма скидки</div>
          <div class="sum-order__text">-15 972 сом</div>
        </div>
        <div class="order-card__delivery delivery-order order-flex">
          <div class="delivery-order__title order-title">Доставка</div>
          <div class="delivery-order__text">200 сом</div>
        </div>
        <div class="order-card__total total-order order-flex">
          <div class="total-order__title">Итого:</div>
          <div class="total-order__text">112 715 сом</div>
        </div>
        <div class="order-card__btn">
          <SButton color="violet" disabled size="large"
            >Подтвердить заказ</SButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton } from '@tumarsoft/ogogo-ui'
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.order-card {
  &:deep(.button) {
    width: 100%;
  }
  &__content {
    padding: 24px;
    box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
    border-radius: 16px;
    font-size: 14px;
    font-weight: 500;
    color: $black;
  }
  &__btn {
    margin-top: 28px;
  }
}

.order {
  &-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  &-title {
    color: $gray-500;
  }
}

.sum-order__text {
  color: $red-600;
}

.total-order {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.28px;
}
</style>
