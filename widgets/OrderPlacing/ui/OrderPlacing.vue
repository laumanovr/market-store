<template>
  <div class="order-placing">
    <div class="order-placing__container">
      <section class="order-placing__header">
        <div class="header-order s-flex s-items-center">
          <h3 class="s-text-h-2 s-mr-3">Оформление заказа</h3>
          <span class="header-order__total">
            {{ totalProductOrder }} товара
          </span>
        </div>
      </section>
      <div class="order-placing__content">
        <div class="order-placing__body">
          <div class="s-text-title-3 s-mb-4">Способ доставки</div>
          <STabs :tab-mode="'filter-tabs'" class="s-mb-4">
            <STabItem
              value="one"
              :active-tab="deliveryTab"
              @changeTab="deliveryTabChange"
            >
              Доставка
            </STabItem>
            <STabItem
              value="two"
              :active-tab="deliveryTab"
              @changeTab="deliveryTabChange"
            >
              Самовывоз
            </STabItem>
          </STabs>
          <STabWindow value="one" :active-tab="deliveryTab">
            <SButton
              variant="outlined"
              type="text"
              @click="modalAddress.open()"
            >
              <SIconRender name="plus" class="s-mr-2" />
              Добавить адрес
            </SButton>
          </STabWindow>
          <STabWindow value="two" :active-tab="deliveryTab">
            <SButton
              variant="outlined"
              type="text"
              @click="isVoiceModalOpenAddAddress = true"
            >
              Выбрать филиал
            </SButton>
          </STabWindow>

          <div class="s-text-title-3 s-mb-4 s-mt-8">Способ оплаты</div>
          <STabs :tab-mode="'filter-tabs'" class="s-mb-4">
            <STabItem
              value="cash"
              :active-tab="paymentTab"
              @changeTab="paymentTabChange"
            >
              Наличными
            </STabItem>
            <STabItem
              value="card"
              :active-tab="paymentTab"
              @changeTab="paymentTabChange"
            >
              Картой на сайте
            </STabItem>
          </STabs>
          <STabWindow value="cash" :active-tab="paymentTab">
            <PaymentChange />
          </STabWindow>
          <STabWindow value="card" :active-tab="paymentTab">
            <PaymentCard />
          </STabWindow>

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
    <TheModalAddAddress ref="modalAddress" @onOpenMap="openMapModal" />
    <TheModalMap ref="modalMap" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import OrderPlacingCard from '~/shared/components/OrderPlacingCard/OrderPlacingCard.vue'
import { PaymentChange } from '~/features/payment-change'
import { PaymentCard } from '~/features/payment-card'
import TheModalAddAddress from '~/shared/components/modal/modals/TheModalAddAddress.vue'
import TheModalMap from '~/shared/components/modal/modals/TheModalMap.vue'
import {
  STable,
  SButton,
  SIconRender,
  STabs,
  STabItem,
  STabWindow,
} from '@tumarsoft/ogogo-ui'

const totalProductOrder = ref(3)
const deliveryTab = ref('one')
const paymentTab = ref('cash')
const modalAddress = ref<any>({})
const modalMap = ref<any>({})

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

const openMapModal = () => {
  modalAddress.value.close()
  modalMap.value.open()
}

const deliveryTabChange = (newTab: string) => {
  deliveryTab.value = newTab
}
const paymentTabChange = (newTab: string) => {
  paymentTab.value = newTab
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';

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
