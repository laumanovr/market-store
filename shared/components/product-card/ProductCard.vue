<template>
  <div :class="['product-card', { cardRow: row }]">
    <div class="product-card__body" @click="emit('isOpenRouter')">
      <div class="product-image">
        <div class="product-image__photo">
          <img :src="source" alt="img" />
          <SIconRender name="heart" class="heart" />
        </div>
        <div v-if="props.row" class="product-image__info">
          <div class="product-name">
            {{ props.productName }}
          </div>
          <div class="product-rating">
            <img src="~/assets/images/star.svg" alt="" />
            <span>{{ props.rating }}</span>
          </div>
          <div class="product-info">
            <div class="product-info__text">
              <span class="product-info__title">Экран:</span>
              <span class="product-info__info">
                6.1" (2556x1179) OLED 120 Гц
              </span>
            </div>
            <div class="product-info__text">
              <span class="product-info__title">Память:</span>
              <span class="product-info__info">встроенная 256 ГБ</span>
            </div>
            <div class="product-info__text">
              <span class="product-info__title">Фото:</span>
              <span class="product-info__info">3 камеры, основная 48 МП</span>
            </div>
            <div class="product-info__text">
              <span class="product-info__title">Процессор:</span>
              <span class="product-info__info">Inter core i7</span>
            </div>
            <div class="product-info__text">
              <span class="product-info__title">Sim-карты:</span>
              <span class="product-info__info">Dual еSIM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="product-info-price">
        <div class="product-price">
          <div class="product-price__after">
            {{ props.price + ' ' + 'сом' }}
          </div>
          <div class="product-price__before">120 000 сом</div>
        </div>
        <div v-if="!props.row" class="product-name">
          {{ props.productName }}
        </div>
        <div v-if="!props.row" class="product-rating">
          <img src="~/assets/images/star.svg" alt="" />
          <span>{{ props.rating }}</span>
        </div>
        <div class="product-brand">
          <img :src="sourceBrand" alt="" />
          <span>{{ props.brandName }}</span>
        </div>
      </div>
    </div>
    <div class="product-card__btn">
      <SButton
        type="secondary"
        class="s-w-full s-text-gray-300"
        v-if="addedProduct"
      >
        <SIconRender name="minus" @click="removeProduct" />
        {{ addedProduct }}
        <SIconRender name="plus" @click="addingProduct" />
      </SButton>
      <SButton v-else @click="addingProduct" class="s-w-full">
        В корзину
      </SButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'

const props = defineProps({
  productImageUrl: {
    type: String,
  },
  price: {
    type: [Number, String],
  },
  productName: {
    type: String,
  },
  rating: {
    type: [Number, String],
  },
  brandIconUrl: {
    type: String,
  },
  brandName: {
    type: String,
  },
  row: {
    type: Boolean,
  },
})

const emit = defineEmits(['isOpenRouter'])

const addedProduct = ref(0)

const addingProduct = (): void => {
  addedProduct.value += 1
}

const removeProduct = (): void => {
  if (addedProduct.value !== 0) {
    addedProduct.value -= 1
  }
}

const source = computed(() => `/_nuxt/assets/${props.productImageUrl}`)
const sourceBrand = computed(() => `/_nuxt/assets/${props.brandIconUrl}`)
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.product-card {
  max-width: 240px;
  min-width: 220px;
  @media #{$sm} {
    min-width: 158px;
    max-width: 158px;
  }
  &__body {
    cursor: pointer;
  }
  &__btn {
    &:deep(.button) {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .product-image {
    position: relative;
    &__photo {
      .heart {
        position: absolute;
        top: 16px;
        right: 16px;
      }
    }
    img {
      width: 100%;
      height: 240px;
      object-fit: contain;
      @media #{$sm} {
        height: 158px;
      }
    }
  }
  .product-info-price {
    margin-top: 24px;
  }
  .product-price {
    display: flex;
    align-items: baseline;
    grid-gap: 8px;
    &__after {
      font-weight: 700;
      font-size: 20px;
    }
    &__before {
      font-weight: 500;
      font-size: 14px;
      color: $red-600;
      text-decoration: line-through;
    }
  }
  .product-name {
    font-weight: 600;
    font-size: 14px;
    margin: 8px 0;
    max-height: 35px;
    overflow: hidden;
    cursor: pointer;
  }
  .product-rating {
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 8px;
    }
  }
  .product-brand {
    display: flex;
    align-items: center;
    margin: 8px 0 24px;
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
    span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 8px;
      color: $gray-500;
    }
  }
}

.product-card.cardRow {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .product-info {
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    &__title {
      color: $gray-500;
    }
    &__info {
      color: $black;
    }
  }
  .product-info-price {
    margin: 0;
    width: 240px;
  }
  .product-image {
    display: flex;
    &__photo {
      position: relative;
    }
  }
  .product-rating {
    img {
      width: 20px;
      height: 20px;
    }
  }
  .product-price {
    &__before {
      color: $gray-500;
    }
  }
  .product-brand {
    margin: 12px 0;
  }
  .product-name {
    margin: 0 0 8px 0;
  }
}
</style>
