<template>
  <div :class="['basket', `basket_${size}`]">
    <div :class="[`cont_${size}`]">
      <div class="basket__price price-basket">
        <div :class="['price-basket__value', `price-basket__value_${size}`]">
          {{ item.price }} сом
        </div>
        <div v-if="item.discount" class="price-basket__discount">
          <SBadge :content="`-${item.discount}%`" color="red" is-rounded />
        </div>
      </div>
      <div
        v-if="item.previousPrice"
        :class="['basket__previous-price', `basket__previous-price_${size}`]"
      >
        {{ item.previousPrice }} сом
      </div>
    </div>
    <div v-if="size == 'default'" class="basket__shop shop-info">
      <div class="shop-info__logo">
        <img :src="item.logo" alt="" />
      </div>
      <div class="shop-info__name">{{ item.name }}</div>

      <div class="shop-info__rating rating-info">
        <div class="rating-info__svg">
          <BaseIcon name="star" viewBox="0 0 16 16" />
        </div>
        <div class="rating-info__value">
          {{ item.rating }}
        </div>
      </div>
      <div class="shop-info__model">•••</div>
    </div>
    <div :class="['basket__btn', `basket__btn_${size}`]">
      <Button color="gray" v-if="addedProduct">
        <template v-slot:leftIcon>
          <BaseIcon @click="removeProduct" name="minus" viewBox="0 0 16 2" />
        </template>
        {{ addedProduct }}
        <template v-slot:rightIcon>
          <BaseIcon @click="addingProduct" name="plus" viewBox="0 0 16 16" />
        </template>
      </Button>
      <SButton
        v-if="(!addedProduct && size == 'small') || size == 'default'"
        color="violet"
        class="wp-100"
        @click="addingProduct"
        >В корзину</SButton
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SButton, SBadge } from '@tumarsoft/ogogo-ui'
import Button from '~/shared/components/button/button.vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

interface Props {
  size?: 'default'
}

const props = defineProps<Props>()
const { size = 'small' | 'default' } = props

const item: {
  text: string
  price: string
  logo: string
  name: string
  rating: number
  discount: number
  previousPrice: string
} = {
  text: '',
  price: '105 990',
  logo: '_nuxt/assets/images/shop-logo.png',
  name: 'Мой телефон',
  rating: 4.6,
  discount: 15,
  previousPrice: '121 888',
}

const addedProduct = ref(0)

const addingProduct = (): void => {
  addedProduct.value += 1
}

const removeProduct = (): void => {
  if (addedProduct.value !== 0) {
    addedProduct.value -= 1
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.basket {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 16px;
  background: $white;
  box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
  &__price {
    display: flex;
    align-items: center;
    height: 35px;
    grid-gap: 8px;
  }
  &__previous-price {
    text-decoration: line-through;
    color: $red-600;
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0 12px 0;
    &_small {
      margin: 0;
    }
  }
  &__btn {
    display: flex;
    grid-gap: 10px;
    &:deep(.button) {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    &_small {
      height: 52px;
      width: 131px;
    }
    &_small:deep(.button) {
      height: 100%;
    }
  }
}
.basket.basket_small {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  box-shadow: none;
}

.price-basket {
  &__value {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.24px;
    color: $black;
    &_small {
      font-size: 20px;
    }
  }
}
.price-basket__discount {
  display: flex;
  align-items: center;
}
.price-basket__discount:deep(.badge) {
  font-size: 8px;
}

.shop-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 20px;
  grid-gap: 8px;
  margin-bottom: 32px;
  &__logo {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo img {
    width: 20px;
    height: 20px;
  }
  &__name {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: $gray-500;
    letter-spacing: 0.048px;
  }
  &__model {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0px 2.667px;
    background: $gray-150;
    border-radius: 4px;
    color: $gray-400;
    font-size: 10px;
  }
  &__model svg {
    padding: 6px;
  }
}

.rating-info {
  display: flex;
  align-items: center;
  grid-gap: 8px;
  &__svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__value {
    font-size: 12px;
    font-weight: 500;
  }
}
.btn-adding svg {
  cursor: pointer;
}
.cont_small {
  margin-right: 24px;
}
</style>
