<template>
  <div class="orders-container">
    <div class="head-title">Заказы</div>
    <STabs :tab-mode="'filter-tabs'">
      <STabItem value="one" :active-tab="tab" @changeTab="selectTab">
        Все
      </STabItem>
      <STabItem value="two" :active-tab="tab" @changeTab="selectTab">
        В работе
      </STabItem>
      <STabItem value="three" :active-tab="tab" @changeTab="selectTab">
        Ожидают оплаты
      </STabItem>
      <STabItem value="four" :active-tab="tab" @changeTab="selectTab"
        >Выполненные</STabItem
      >
      <STabItem value="five" :active-tab="tab" @changeTab="selectTab">
        Отмененные
      </STabItem>
    </STabs>
    <div class="order-items">
      <div
        class="order-item"
        v-for="i in 3"
        :key="i"
        @click="openOrderDetail(i)"
      >
        <div class="order-top">
          <div class="order-date">
            <div class="order-date-info">Заказ от 3 января 2024</div>
            <div class="order-id">64279688-0001</div>
          </div>
          <div class="order-price">105 990 coм</div>
        </div>
        <div class="order-bottom">
          <div class="order-detail">
            <div class="order-label">Статус</div>
            <SBadge content="Выполнен" color="green" />
          </div>
          <div class="order-detail">
            <div class="order-label">Дата оформления</div>
            <div class="order-info">25 июня 2021</div>
          </div>
          <div class="order-detail">
            <div class="order-label">Метод оплаты</div>
            <div class="order-info">В рассрочку</div>
          </div>
          <div class="order-detail">
            <div class="order-label">Магазин</div>
            <div class="order-info">Мой телефон</div>
          </div>
          <div class="order-detail products">
            <div>
              <div class="order-label">Товары:</div>
              <div class="order-info">2 шт.</div>
            </div>
            <div class="order-images">
              <img
                src="~/assets/images/smartphone.png"
                alt="img"
                v-for="i in 3"
                :key="i"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { STabs, STabItem, SBadge } from '@tumarsoft/ogogo-ui'
import { ref } from 'vue'

const router = useRouter()

const tab = ref('one')

const selectTab = (value: any) => {
  tab.value = value
}

const openOrderDetail = (id: number) => {
  router.push(`/orders/${id}`)
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.orders-container {
  .order-item {
    margin-top: 20px;
    border-radius: 8px;
    border: 1px solid $gray-200;
    cursor: pointer;
    .order-top {
      display: flex;
      justify-content: space-between;
      background: $gray-150;
      padding: 12px;
    }
    .order-date-info {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 4px;
    }
    .order-id {
      font-weight: 500;
      font-size: 14px;
      color: $violet-600;
    }
    .order-price {
      font-weight: 700;
      font-size: 20px;
    }
    .order-bottom {
      padding: 12px;
      display: flex;
      justify-content: space-between;
    }
    .order-label {
      color: $gray-500;
      font-weight: 500;
      font-size: 12px;
    }
    .order-info {
      font-weight: 500;
      font-size: 14px;
      margin-top: 4px;
    }
  }
  .order-detail.products {
    display: flex;
    .order-images {
      display: flex;
      align-items: center;
      row-gap: 8px;
      margin-left: 8px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    }
  }
}
</style>
