<template>
  <div class="shop-detail">
    <div class="flex items-center">
      <div class="head-title">Мой телефон</div>
      <span class="product-count">3420 товаров</span>
    </div>

    <div class="flex justify-between">
      <div class="categories-block">
        <div
          class="category-item"
          :class="{ active: index === activeIndex }"
          v-for="(category, index) in sampleCategories"
          :key="index"
          @click="onSelectItem(index, category)"
        >
          {{ category.name }}
        </div>
      </div>
      <div class="shop-products">
        <div class="flex justify-between">
          <div class="category-title">{{ activeCategory.name }}</div>
          <SButton type="secondary" size="small">
            <span class="s-mr-2 s-text-tertiary-dark">Все товары</span>
            <SIconRender name="ArrowIcon" direction="right" />
          </SButton>
        </div>
        <div class="product-card-list flex flex-wrap justify-between gap-20">
          <ProductCard
            v-for="i in 6"
            :key="i"
            productImageUrl="images/iphone-img.jpg"
            price="105 990"
            productName="Смартфон Apple iPhone 15 Pro 256Gb Natural Titanium 2 SIM HK/CN"
            rating="4.6 (356)"
            brandIconUrl="images/shop-logo.png"
            brandName="Мой телефон"
            @isOpenRouter="router.push('/product-card')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'
import { ref, onMounted } from 'vue'
import ProductCard from '~/shared/components/product-card/ProductCard.vue'

const sampleCategories = ref([
  { name: 'Смартфоны' },
  { name: 'Ноутбуки' },
  { name: 'Планшеты' },
  { name: 'Аксессуары' },
  { name: 'Наушники' },
  { name: 'Гаджеты' },
  { name: 'Умные колонки' },
])

onMounted(() => {
  onSelectItem(0, sampleCategories.value[0])
})

const activeIndex = ref(0)
const activeCategory = ref({ id: '', name: '' })

const onSelectItem = (index: number, category: any) => {
  activeIndex.value = index
  activeCategory.value.name = category.name
}
</script>

<style lang="scss">
@import '~/assets/style/colors.scss';
.shop-detail {
  .product-count {
    font-weight: 500;
    font-size: 12px;
    margin-left: 12px;
    color: $gray-500;
    margin-top: 10px;
  }
  .categories-block {
    width: calc(20% - 40px);
  }
  .category-item {
    font-weight: 500;
    font-size: 16px;
    padding: 10px 8px;
    width: 100%;
    cursor: pointer;
    &.active {
      background: $gray-50;
      border-radius: 8px;
      cursor: default;
    }
  }
  .shop-products {
    width: 80%;
    .category-title {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 24px;
    }
    .product-card-list {
      &::after {
        content: '';
        flex-grow: 1;
      }
    }
  }
}
</style>
