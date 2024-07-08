<template>
  <div class="shop-detail">
    <div class="flex items-center">
      <div class="head-title">Мой телефон</div>
      <span class="product-count">3420 товаров</span>
    </div>

    <div class="shop-catalog">
      <SButton type="secondary" @click="toggleModal">
        <SIconRender name="MenuIcon" color="black" />
        <span>Каталог товаров</span>
      </SButton>
    </div>

    <div class="flex justify-between">
      <div class="categories-block">
        <div
          class="category-item"
          :class="{ active: index === activeIndex }"
          v-for="(category, index) in sampleCategories"
          :key="index"
          @click="onSelectItem(index, category, false)"
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
        <div class="product-card-list flex flex-wrap justify-between">
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
    <SModal v-model="isShowModal" type="mobile-fullscreen">
      <div
        class="category-item"
        :class="{ active: index === activeIndex }"
        v-for="(category, index) in sampleCategories"
        :key="index"
        @click="onSelectItem(index, category, true)"
      >
        {{ category.name }}
      </div>
    </SModal>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender, SModal } from '@tumarsoft/ogogo-ui'
import { ref, onMounted, provide } from 'vue'
import ProductCard from '~/shared/components/product-card/ProductCard.vue'

provide('theme', 'shop-detail')

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
  onSelectItem(0, sampleCategories.value[0], false)
})

const activeIndex = ref(0)
const activeCategory = ref({ id: '', name: '' })
const isShowModal = ref(false)

const onSelectItem = (index: number, category: any, isMobile: boolean) => {
  activeIndex.value = index
  activeCategory.value.name = category.name
  if (isMobile) {
    toggleModal()
  }
}

const toggleModal = () => {
  isShowModal.value = !isShowModal.value
}
</script>

<style lang="scss">
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.shop-detail {
  .head-title {
    font-size: 24px;
  }
  .product-count {
    font-weight: 500;
    font-size: 12px;
    margin-left: 12px;
    color: $gray-500;
    margin-top: 10px;
  }
  .categories-block {
    width: calc(20% - 40px);
    @media #{$sm} {
      display: none;
    }
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
  .shop-catalog {
    display: none;
    margin: 12px 0 24px;
    @media #{$sm} {
      display: block;
    }
    .button {
      width: 100%;
      justify-content: flex-start;
      span {
        margin-left: 8px;
      }
    }
  }
  .shop-products {
    width: 80%;
    @media #{$sm} {
      width: 100%;
    }
    .category-title {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 24px;
      @media #{$sm} {
        font-size: 20px;
      }
    }
    .product-card-list {
      &::after {
        content: '';
        flex-grow: 1;
      }
      gap: 20px;
      @media #{$sm} {
        gap: 15px;
      }
      @media #{$xs} {
        gap: 12px;
      }
    }
  }
}
</style>
