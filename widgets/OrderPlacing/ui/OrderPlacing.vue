<template>
  <div class="order-placing">
    <div class="order-placing__container">
      <section class="order-placing__header">
        <div class="header-order">
          <h3 class="header-order__title">Оформление заказа</h3>
          <span class="header-order__total">
            {{ totalProductOrder }} товара
          </span>
        </div>
      </section>
      <div class="order-placing__content">
        <div class="order-placing__body">
          <section class="order-placing__delivery-method delivery-method">
            <switchButton
              title="Способ доставки"
              btnlLeft="Доставка"
              btnRight="Самовывоз"
              @onSwitch="methodDelivery"
            />
            <div
              v-if="deliveryMethod == 'delivery'"
              class="delivery-method__add-address"
            >
              <Button
                color="gray"
                decoration="none"
                @click="isVoiceModalOpenAddAddress = true"
              >
                <template v-slot:leftIcon>
                  <BaseIcon name="plus" viewBox="0 0 20 15" class="icon-svg" />
                </template>
                Добавить адрес
              </Button>
            </div>
            <div v-else class="delivery-method__add-address">
              <Button
                color="gray"
                decoration="none"
                @click="isVoiceModalOpenAddAddress = true"
              >
                Выбрать филиал
              </Button>
            </div>
          </section>
          <section class="order-placing__payment-method payment-method">
            <switchButton
              title="Способ оплаты"
              btnlLeft="Наличными"
              btnRight="Картой на сайте"
              @onSwitch="methodPayment"
            />
            <div v-if="paymentMethod == 'cash'" class="payment-method__cash">
              <PaymentChange />
            </div>
            <div v-else class="payment-method__card">
              <PaymentCard />
            </div>
          </section>
          <section class="order-placing__list list-table">
            <div class="list-table__title">
              <h3>Ваш заказ</h3>
            </div>
            <div class="list-table__content">
              <STable
                :headers="headers"
                :data="tableData"
                totalItems="50"
                itemsPerPage="5"
                paginateRange="2"
              >
                <template v-slot:product="{ item }">
                  <div class="list-table__subtitle list-content">
                    <div v-if="item.photo" class="list-table__photo">
                      <img :src="item.photo" alt="" />
                    </div>
                    <div class="list-table__text">
                      <span>{{ item.product }}</span>
                    </div>
                  </div>
                </template>
                <template v-slot:quantity="{ item }">
                  <div class="list-table__quantity list-content">
                    {{ item.quantity + ' ' + 'шт.' }}
                  </div>
                </template>
                <template v-slot:price="{ item }">
                  <div class="list-table__price list-content">
                    <div class="list-table__after">
                      {{ item.price + ' ' + 'сом' }}
                    </div>
                    <div v-if="item.priceBefore" class="list-table__before">
                      {{ item.priceBefore + ' ' + 'сом' }}
                    </div>
                  </div>
                </template>
                <template v-slot:pay="{ item }">
                  <div class="list-table__price list-content">
                    <div class="list-table__after">
                      {{ item.price + ' ' + 'сом' }}
                    </div>
                    <div class="list-table__dollar">
                      {{ (item.price / 90).toFixed(2) + ' $' }}
                    </div>
                  </div>
                </template>
              </STable>
            </div>
          </section>
        </div>
        <div class="order-placing__card">
          <OrderPlacingCard />
        </div>
      </div>
    </div>
    <teleport to="body">
      <TheModalAddAddress
        v-if="isVoiceModalOpenAddAddress"
        @close="isVoiceModalOpenAddAddress = false"
        @handlerOpenMap="handlerOpenMap"
      />
    </teleport>
    <teleport to="body">
      <TheModalMap
        v-if="isVoiceModalOpenMap"
        @close="isVoiceModalOpenMap = false"
      />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import switchButton from '~/shared/components/switch-button/switch-button.vue'
import Button from '~/shared/components/button/button.vue'
import OrderPlacingCard from '~/shared/components/OrderPlacingCard/OrderPlacingCard.vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'
import { PaymentChange } from '~/features/payment-change'
import { PaymentCard } from '~/features/payment-card'
import TheModalAddAddress from '~/shared/components/modal/modals/TheModalAddAddress.vue'
import TheModalMap from '~/shared/components/modal/modals/TheModalMap.vue'
import { STable } from '@tumarsoft/ogogo-ui'

const totalProductOrder = ref(3)

const paymentMethod = ref('cash')
const deliveryMethod = ref('delivery')
const isVoiceModalOpenAddAddress = ref(false)
const isVoiceModalOpenMap = ref(false)
const headers = [
  { title: 'Товар', key: 'product' },
  { title: 'Кол-во', key: 'quantity' },
  { title: 'Цена за ед.', key: 'price' },
  { title: 'К оплтае', key: 'pay' },
]
const tableData = [
  {
    product: 'Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN',
    photo: '_nuxt/assets/images/iphone-img.jpg',
    quantity: '1',
    price: '106990',
    priceBefore: '123 038,5',
    pay: '4',
  },
  {
    product: 'Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN',
    photo: '_nuxt/assets/images/iphone-img.jpg',
    quantity: '1',
    price: '106990',
    priceBefore: '123 038,5',
    pay: '4',
  },
  {
    product: 'Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN',
    photo: '_nuxt/assets/images/iphone-img.jpg',
    quantity: '1',
    price: '106990',
    priceBefore: '123 038,5',
    pay: '4',
  },
  {
    product: 'Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN',
    photo: '_nuxt/assets/images/iphone-img.jpg',
    quantity: '1',
    price: '106990',
    priceBefore: '123 038,5',
    pay: '4',
  },
  { product: '1', quantity: '2', price: '3', pay: '4' },
]

const methodPayment = (el: number): void => {
  if (el == 0) {
    paymentMethod.value = 'cash'
  } else if (el == 1) {
    paymentMethod.value = 'card'
  }
}

const methodDelivery = (el: number): void => {
  if (el == 0) {
    deliveryMethod.value = 'delivery'
  } else if (el == 1) {
    deliveryMethod.value = 'pickup'
  }
}

const handlerOpenMap = () => {
  isVoiceModalOpenAddAddress.value = false
  isVoiceModalOpenMap.value = true
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.icon-svg {
  width: 20px;
  height: 20px;
  &:deep(path) {
    stroke-width: 1;
  }
}

.order-placing {
  &__header {
    margin: 12px 0 32px 0;
  }
  &__container {
    max-width: 1240px;
    margin: 0 auto;
  }
  &__content {
    display: flex;
    align-items: start;
  }
  &__card {
    width: 360px;
  }
  &__body {
    width: 840px;
  }
}
.header-order {
  &__title {
    display: inline-block;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0.36px;
    padding-right: 12px;
    color: $black;
  }
  &__total {
    font-size: 16px;
    font-weight: 500;
    color: $gray-500;
  }
}

.delivery-method {
  &__add-address {
    margin-top: 16px;
  }
  &__add-address:deep(.button) {
    padding: 16px 20px;
    border: 1px solid $gray-200;
    width: 207px;
    grid-gap: 8px;
    height: 52px;
  }
}

.payment-method {
  margin-top: 48px;
  &__cash {
    margin-top: 16px;
    width: 55%;
  }
  &__card {
    margin-top: 16px;
    width: 128px;
  }
}

.list-table {
  font-size: 14px;
  font-weight: 500;
  color: $black;
  max-width: 840px;
  &__subtitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__photo {
    width: 44px;
    height: 44px;
    padding: 2px;
    position: relative;
  }
  &__photo img {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 100%;
    object-fit: cover;
  }
  &__before {
    font-size: 12px;
    font-weight: 500;
    text-decoration: line-through;
    color: $red-600;
    margin-top: 4px;
  }
  &__price {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__dollar {
    font-size: 12px;
    font-weight: 500;
    color: $gray-500;
    margin-top: 4px;
  }
  &__text {
    max-width: 276px;
    margin-left: 8px;
    text-align: start;
  }
  &__title h3 {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.196px;
  }
  &__title {
    margin: 48px 0 16px 0;
  }
}

.list-table:deep(.table-pagination) {
  display: none;
}

.list-table:deep(th) {
  background-color: $gray-150;
}

.list-table:deep(.data-table) {
  padding: 0;
}

.list-table:deep(.table-container .data-table table) {
  border: none;
}

.list-table:deep(td) {
  width: 120px;
}
.list-table:deep(td):nth-child(1) {
  width: 300px;
}
</style>
