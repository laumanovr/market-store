<template>
  <div class="filterProduct">
    <div class="filterProduct__container">
      <div class="filterProduct__title">
        <h3>Смартфоны</h3>
      </div>
      <div class="filterProduct__content">
        <div class="filterProduct__filter-product filter-product">
          <div class="filter-product__price price-product">
            <div class="price-product__title title-filter">Цена</div>
            <div class="price-product__content">
              <SliderPrice />
              <div class="price-product__price">
                <SInput label="От" placeHolder="" />
                <SInput label="До" placeHolder="" />
              </div>
            </div>
          </div>
          <div class="filter-product__manufacturer manufacturer-product">
            <div class="manufacturer-product__title title-filter">
              Производитель
            </div>
            <div class="manufacturer-product__content">
              <SInput placeHolder="Поиск" />
              <Checkbox> Apple </Checkbox>
              <Checkbox> BQ </Checkbox>
              <Checkbox> Digma </Checkbox>
              <Checkbox> F+ </Checkbox>
              <Checkbox> INOI </Checkbox>
              <Checkbox> Itel </Checkbox>
              <Checkbox> Land Rover </Checkbox>
              <Checkbox> MAXVI </Checkbox>
              <div class="hide-filter-btn" @click="isOpen = !isOpen">
                <Button decoration="none">
                  {{ isOpen ? 'Скрыть' : 'Показать всё' }}
                  <template v-slot:rightIcon>
                    <BaseIcon
                      name="arrow"
                      viewBox="0 0 12 12"
                      :class="['icon-svg', { isOpen: isOpen }]"
                    />
                  </template>
                </Button>
              </div>
            </div>
          </div>
          <div class="filter-product__product-condition product-condition">
            <div class="product-condition__title title-filter">
              Состояние товара
            </div>
            <div class="product-condition__content">
              <Checkbox> Новый </Checkbox>
              <Checkbox> БУ </Checkbox>
            </div>
          </div>
          <div class="filter-product__device-model device-model">
            <div class="device-model__title title-filter">
              Модель устройства
            </div>
            <div class="device-model__content">
              <Checkbox> Apple iPhone 15 Pro </Checkbox>
              <Checkbox> Apple iPhone 13 </Checkbox>
              <Checkbox> Apple iPhone 15 Pro Max </Checkbox>
              <Checkbox> Apple iPhone 14 </Checkbox>
              <Checkbox> Apple iPhone 14 Pro Max </Checkbox>
              <div class="hide-filter-btn" @click="isOpen = !isOpen">
                <Button decoration="none">
                  {{ isOpen ? 'Скрыть' : 'Показать всё' }}
                  <template v-slot:rightIcon>
                    <BaseIcon
                      name="arrow"
                      viewBox="0 0 12 12"
                      :class="['icon-svg', { isOpen: isOpen }]"
                    />
                  </template>
                </Button>
              </div>
            </div>
          </div>
          <div class="filter-product__built-memory built-memory">
            <div class="built-memory__title title-filter">
              Встроенная память
            </div>
            <div class="built-memory__content">
              <Checkbox> 64 ГБ </Checkbox>
              <Checkbox> 128 ГБ </Checkbox>
              <Checkbox> 512 ГБ </Checkbox>
              <Checkbox> 1 ТБ </Checkbox>
              <Checkbox> 2 ТБ </Checkbox>
              <div class="hide-filter-btn" @click="isOpen = !isOpen">
                <Button decoration="none">
                  {{ isOpen ? 'Скрыть' : 'Показать всё' }}
                  <template v-slot:rightIcon>
                    <BaseIcon
                      name="arrow"
                      viewBox="0 0 12 12"
                      :class="['icon-svg', { isOpen: isOpen }]"
                    />
                  </template>
                </Button>
              </div>
            </div>
          </div>
          <div class="filter-product__ram ram-product">
            <div class="ram-product__title title-filter">
              Оперативная память
            </div>
            <div class="ram-product__content">
              <Checkbox> 8 ГБ </Checkbox>
              <Checkbox> 6 ГБ </Checkbox>
              <Checkbox> 4 ГБ </Checkbox>
              <Checkbox> 3 ГБ </Checkbox>
              <Checkbox> 2 ГБ </Checkbox>
            </div>
          </div>
          <div class="filter-product__btn">
            <SButton color="gray">Показать все фильтры</SButton>
          </div>
        </div>
        <div class="filterProduct__body body-product">
          <div class="body-product__show">
            <div class="body-product__popular">
              <SSelect class="w-15" />
            </div>
            <div class="body-product__grid">
              <BaseIcon name="grid" viewBox="0 0 22 22" class="icon-grid" />
              <BaseIcon name="row" viewBox="0 0 24 24" class="icon-grid" />
            </div>
          </div>
          <div class="body-product__filter-categories">
            <STag title="Apple" :index="1" />
            <STag title="8 450 – 169 990" :index="1" />
            <STag title="128 ГБ" :index="1" />
            <STag title="Новый" :index="1" />
          </div>
          <div class="body-product__items">
            <ProductCard
              v-for="i in 17"
              :key="i"
              productImageUrl="images/iphone-img.jpg"
              price="105 990"
              productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
              rating="4.6 (356)"
              brandIconUrl="images/shop-logo.png"
              brandName="Мой телефон"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '~/shared/components/button/button.vue'
import Checkbox from '~/shared/components/checkbox/checkbox.vue'
import SliderPrice from '~/shared/components/sliderPrice/sliderPrice.vue'
import { SInput, SSelect, SButton, STag } from '@tumarsoft/ogogo-ui'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'
import ProductCard from '~/shared/components/product-card/ProductCard.vue'

const isOpen = ref(false)
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.icon-svg {
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
  &:deep(path) {
    stroke: $violet-600;
  }
}
.icon-grid {
  width: 24px;
  height: 24px;
}
.filterProduct {
  &__content {
    display: grid;
    grid-template-columns: 310px 1fr;
    grid-gap: 40px;
  }
  &__title {
    margin-bottom: 24px;
  }
  &__title h3 {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.32px;
  }
}

.title-filter {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.224px;
  margin-bottom: 15px;
}

.filter-product {
  &__btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    &:deep(.button) {
      width: 100%;
    }
  }
}

.price-product {
  &__price {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    margin: 18px 0 24px 0;
  }
}

.manufacturer-product {
  &:deep(.input-container) {
    margin-bottom: 16px;
    width: 100%;
  }
  &:deep(.checkbox-container) {
    margin-bottom: 16px;
  }
}

.product-condition {
  &:deep(.checkbox-container) {
    margin-bottom: 16px;
  }
}

.device-model {
  &:deep(.checkbox-container) {
    margin-bottom: 16px;
  }
}

.built-memory {
  &:deep(.checkbox-container) {
    margin-bottom: 16px;
  }
}

.ram-product {
  &:deep(.checkbox-container) {
    margin-bottom: 16px;
  }
}

.hide-filter-btn {
  margin-bottom: 20px;
  &:deep(.button) {
    justify-content: flex-start;
    grid-gap: 8px;
    width: auto;
  }
  &:deep(.button__text) {
    color: $violet-600;
  }
}

.isOpen {
  transform: rotate(270deg);
}

.body-product {
  &__show {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__grid svg {
    margin-left: 16px;
  }
  &__items {
    grid-gap: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  &__filter-categories {
    margin: 16px 0 24px 0;
  }
}
</style>
