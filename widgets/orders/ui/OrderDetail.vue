<template>
  <div class="order-detail">
    <div class="head-title">Заказ № 123328423-001</div>
    <div class="order-detail__date">от 25 июня 2023</div>

    <div class="order-detail__info-block">
      <div class="order-detail__contacts">
        <div class="order-detail__label">Получатель</div>
        <div class="order-detail__address">
          <div>Екатерина Лебедева Андреевна</div>
          <div>+996 776 899 080</div>
          <div>katya_andreeva@mail.ru</div>
        </div>
      </div>
      <div class="order-detail__contacts">
        <div class="order-detail__label">Доставка</div>
        <div class="order-detail__address">
          Кыргызстан, Бишкек, ул. Юнусалиева, 3/1, квартира 16, подъезд 1, код
          домофона 16 B, этаж 6
        </div>
      </div>
      <div class="order-detail__contacts">
        <div class="order-detail__label">Заказ</div>
        <div class="order-detail__finance">
          <span>Товары</span><span>113 515 сом</span>
        </div>
        <div class="order-detail__finance">
          <span>Сумма финансирования</span><span>0 сом</span>
        </div>
        <div class="order-detail__finance">
          <span>Доставка и сборы</span><span>0 сом</span>
        </div>
        <div class="order-detail__finance">
          <span>Итого</span><span class="total">113 515 сом</span>
        </div>
      </div>
    </div>

    <div class="order-detail__items">
      <div class="order-detail__label">Содержание заказа</div>
      <table class="order-table">
        <thead>
          <tr>
            <th>Товар</th>
            <th>Кол-во</th>
            <th>Цена за ед.</th>
            <th>К оплате</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 3" :key="i" class="table-row">
            <td class="product">
              <img src="~/assets/images/smartphone.png" alt="img" />
              <span>
                Рюкзак мужской городской дорожный вместительный 20л для ноутбука
                15.6" Mark Ryden MR1981 Черный влагостойкий с USB портом
              </span>
            </td>
            <td>1 шт.</td>
            <td>106 990 сом</td>
            <td>5 109 сом</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "~/assets/style/colors.scss";
.order-detail {
  &__date {
    font-weight: 500;
    font-size: 16px;
    color: $gray-500;
  }
  &__info-block {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  &__contacts {
    width: calc(33% - 26px);
  }
  &__label {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 12px;
  }
  &__address {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  &__finance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 13px;
    span {
      font-weight: 500;
      &:first-child {
        font-size: 14px;
        color: $gray-500;
      }
      &:last-child {
        font-size: 16px;
      }
      &.total {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }

  .order-table {
    border: 1px solid $gray-200;
    border-radius: 8px;
    width: 100%;
    border-spacing: 0;
    th {
      font-weight: 600;
      font-size: 14px;
      text-align: left;
      padding: 16px;
      background: $gray-50;
      border-bottom: 1px solid $gray-200;
      &:first-child {
        border-radius: 8px 0 0 0;
      }
      &:last-child {
        border-radius: 0 8px 0 0;
      }
    }
    td {
      font-weight: 500;
      font-size: 14px;
      padding: 16px;
      &.product {
        display: flex;
        align-items: center;
        img {
          margin-right: 8px;
          width: 40px;
          height: 40px;
          object-fit: cover;
        }
        span {
          display: inline-block;
          max-width: 360px;
          max-height: 54px;
          overflow-y: hidden;
        }
      }
    }
    .table-row:not(:last-child) {
      td {
        border-bottom: 1px solid $gray-200;
      }
    }
  }
}
</style>
