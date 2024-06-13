<template>
  <div class="cart-container">
    <h2 class="head-title">Корзина</h2>
    <template v-if="hasOrders">
      <div class="cart-order-container" v-for="i in 2" :key="i">
        <div class="cart-head-title">
          <span>Заказ из магазина</span>
          <div class="order-brand">
            <img src="~/assets/images/shop-logo.png" alt="img" />
            Мой телефон
          </div>
        </div>
        <div class="cart-order-items">
          <div class="cart-order-products">
            <div class="cart-order-item" v-for="i in 3" :key="i">
              <img
                src="~/assets/images/iphone-img.jpg"
                class="order-image"
                alt="img"
              />
              <div class="cart-order-info">
                <div class="order-product-name">
                  Рюкзак мужской городской дорожный вместительный 20л для
                  ноутбука 15.6" Mark Ryden MR1981 Черный влагостойкий с USB
                  портом молодежный
                </div>
                <div class="order-brand">
                  <img src="~/assets/images/shop-logo.png" alt="img" />
                  Мой телефон
                </div>
                <div class="order-actions">
                  <SIconRender name="FavoriteIcon" />
                  <SIconRender name="TrashIcon" />
                </div>
              </div>
              <div class="cart-price-count">
                <div class="order-price">105 990 сом</div>
                <div class="order-old-price">121 800 сом</div>
                <div class="order-count">
                  <img src="~/assets/images/minus.png" alt="" />
                  <span>1</span>
                  <img src="~/assets/images/plus.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="total-price-container">
            <div class="price-info">
              <span class="label">3 товара</span>
              <span class="sum">128 500 сом</span>
            </div>
            <div class="price-info">
              <span class="label">Сумма скидки</span>
              <span class="sum discount">-15 972 сом</span>
            </div>
            <div class="price-info">
              <div class="price-total-block">
                <span>Итого:</span><span>150 480 сом</span>
              </div>
            </div>
            <div class="light">
              <SButton
                size="large"
                class="wp-100"
                @click="router.push({ path: '/order-placing' })"
              >
                Перейти к оформлению
              </SButton>
              <SButton type="secondary" size="large" class="wp-100">
                Оформить кредит
              </SButton>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="cart-empty">
        <div class="empty-block">
          <img src="~/assets/images/cart.png" alt="img" />
          <div class="cart-empty-title">В корзине пока пусто</div>
          <SButton color="violet" size="large">Перейти на главную</SButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'

const router = useRouter()
const hasOrders = ref(true)
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
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

  .cart-order-container {
    .cart-head-title {
      font-weight: 700;
      font-size: 20px;
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      span {
        display: inline-block;
        margin-right: 12px;
      }
    }
    .order-brand {
      display: flex;
      align-items: center;
      color: $gray-500;
      font-weight: 500;
      font-size: 12px;
      img {
        width: 20px;
        height: 20px;
        object-fit: cover;
        margin-right: 8px;
      }
    }
    .cart-order-item {
      display: flex;
      margin-bottom: 30px;
    }
    .order-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    .cart-order-info {
      margin-left: 12px;
      .order-brand {
        margin: 5px 0 32px;
      }
    }
    .order-product-name {
      font-weight: 500;
      font-size: 14px;
      max-width: 518px;
      max-height: 36px;
      overflow-y: hidden;
    }

    .order-actions {
      svg {
        margin-right: 12px;
      }
    }

    .cart-order-items {
      display: flex;
    }

    .cart-price-count {
      margin-left: 24px;
      .order-price {
        font-weight: 700;
        font-size: 16px;
      }
      .order-old-price {
        font-weight: 500;
        font-size: 14px;
        color: $red-500;
        margin: 5px 0 35px;
        text-decoration: line-through;
      }
      .order-count {
        display: flex;
        align-items: center;
        background: $gray-150;
        border-radius: 8px;
        padding: 8px;
        img {
          cursor: pointer;
        }
        span {
          font-weight: 600;
          font-size: 16px;
          padding: 0 18px;
        }
      }
    }
  }

  .total-price-container {
    padding: 24px;
    border-radius: 16px;
    margin-left: 40px;
    min-width: 360px;
    height: 280px;
    box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
    .price-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      .label {
        font-weight: 500;
        font-size: 14px;
        color: $gray-500;
      }
      .sum {
        font-weight: 500;
        font-size: 14px;
        &.discount {
          color: $red-600;
        }
      }
      .price-total-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 25px;
      }
    }
    .button {
      margin-bottom: 8px;
    }
  }
}
</style>
