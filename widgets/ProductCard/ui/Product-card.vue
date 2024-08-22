<template>
  <div class="product-card__container s-mt-4">
    <div class="product-card__detailed detailed-photo" v-show="openModel">
      <Carousel
        :examplePhoto="examplePhoto"
        @closeCarousel="handlerOpenCarousel"
      />
    </div>
    <section class="breadcrumbs">
      <Breadcrumbs :items="BreadcrumbsItems" />
      <toFavorites @onFavorites="onFavorites" @onShare="onShare" />
    </section>
    <section v-show="!openModel" class="product-card s-mt-5">
      <div class="product-card__example-photo">
        <ImageGallary
          :items="examplePhoto"
          @onItemFoto="onItemFoto"
          detail
          @openCarousel="handlerOpenCarousel"
        />
      </div>
      <div class="product-card__photo photo-cart">
        <div class="photo-cart__photo">
          <img
            :src="handlerMainFoto"
            alt="Main photo"
            @click="handlerOpenCarousel"
          />
        </div>
      </div>
      <div class="product-card__info info-card">
        <div class="info-card__title">
          <h3>
            Смартфон Apple iPhone 15 Pro 128 ГБ, Dual: nano SIM + eSIM, титан
          </h3>
        </div>
        <div class="info-card__grade grade">
          <ProductRating />
        </div>
        <div class="info-card__color color-info">
          <div class="color-info__text card-subtitle">
            Цвет товара: <span>Natural Titanium</span>
          </div>
        </div>
        <div class="info-card__photo">
          <ImageSelect :items="ImageSelectItems" />
        </div>

        <div class="info-card__configuration configuration s-mb-5">
          <div class="configuration__title card-subtitle">
            Конфигурация памяти:
          </div>
          <STabs :tab-mode="'filter-tabs'">
            <STabItem
              :value="item.id"
              :active-tab="configTab"
              v-for="item in configurationTypes"
              :key="item.id"
              @changeTab="configTabChange"
            >
              {{ item.name }} ГБ
            </STabItem>
          </STabs>
        </div>

        <div class="info-card__state state-product s-mb-5">
          <div class="state-product__title card-subtitle">
            Состояние товара:
          </div>
          <STabs :tab-mode="'filter-tabs'">
            <STabItem
              :value="item.id"
              :active-tab="stateTab"
              v-for="item in productStates"
              :key="item.id"
              @changeTab="stateTabChange"
            >
              {{ item.name }}
            </STabItem>
          </STabs>
        </div>

        <div class="info-card__description description-product">
          <div class="description-product__title card-subtitle">
            Коротко о товаре
          </div>
          <div class="description-product__list">
            <BrieflyInfo
              :items="productBrieflyInfo"
              @handlerLink="openCardDetail"
            />
          </div>
        </div>
      </div>
      <div class="product-card__basket">
        <Basket size="default" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { STabs, STabItem } from '@tumarsoft/ogogo-ui'
import { reactive, computed } from 'vue'
import { Breadcrumbs } from '~/features/breadcrumbs'
import { ImageGallary } from '~/features/imageGallary'
import { ImageSelect } from '~/features/imageSelect'
import { BrieflyInfo } from '~/widgets/brieflyInfo'
import { Basket } from '~/features/basket'
import Carousel from '~/shared/components/carousel/carousel.vue'
import { toFavorites } from '~/widgets/toFavotites'
import { ProductRating } from '~/widgets/ProductRating'

const onFavorites = () => {
  alert('onFavorites')
}

const onShare = () => {
  alert('onShare')
}

const router = useRouter()

const openCardDetail = () => {
  router.push(`/product-card/detail`)
}

const mainFoto = ref('')
const openModel = ref(false)
const configTab = ref(1)
const stateTab = ref(1)

const configurationTypes = reactive<
  { id: number; name: string; isActive?: boolean }[]
>([
  {
    id: 1,
    name: '128',
    isActive: true,
  },
  {
    id: 2,
    name: '256',
  },
  {
    id: 3,
    name: '512',
  },
])
const productStates = reactive<
  { id: number; name: string; isActive?: boolean }[]
>([
  {
    id: 1,
    name: 'Новый',
    isActive: true,
  },
  {
    id: 2,
    name: 'БУ',
  },
])
const BreadcrumbsItems = reactive<{ name: string; link: string }[]>([
  {
    name: 'Главная',
    link: 'test',
  },
  {
    name: 'Электроника',
    link: 'test',
  },
  {
    name: 'Мобильные телефоны',
    link: 'test',
  },
  {
    name: 'Смартфоны',
    link: 'test',
  },
  {
    name: 'Apple',
    link: 'test',
  },
  {
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb Natural Titanium',
    link: 'test',
  },
])
const examplePhoto = reactive<
  { id: number; url: string; isActive?: boolean }[]
>([
  {
    id: 0,
    url: '_nuxt/assets/images/iphone-img.jpg',
    isActive: true,
  },
  {
    id: 1,
    url: '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
    id: 2,
    url: '_nuxt/assets/images/iphone-img.jpg',
  },
  {
    id: 3,
    url: '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
    id: 4,
    url: '_nuxt/assets/images/iphone-img.jpg',
  },
  {
    id: 5,
    url: '_nuxt/assets/images/iphone-img2.jpg',
  },
])
const ImageSelectItems = reactive<
  { id: number; url: string; isActive?: boolean }[]
>([
  {
    id: 0,
    url: '_nuxt/assets/images/iphone-img.jpg',
    isActive: true,
  },
  {
    id: 1,
    url: '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
    id: 2,
    url: '_nuxt/assets/images/iphone-img.jpg',
  },
  {
    id: 3,
    url: '_nuxt/assets/images/iphone-img2.jpg',
  },
])
const productBrieflyInfo = reactive<
  { id: number; title: string; text: string }[]
>([
  {
    id: 0,
    title: 'Экран',
    text: '6.1" (2556x1179) OLED 120 Гц',
  },
  {
    id: 1,
    title: 'Память',
    text: 'встроенная 256 ГБ',
  },
  {
    id: 2,
    title: 'Фото',
    text: '3 камеры, основная 48 МП',
  },
  {
    id: 3,
    title: 'Аккумулятор',
    text: '2815 мА·ч',
  },
  {
    id: 4,
    title: 'Процессор',
    text: '02.05.1997',
  },
  {
    id: 5,
    title: 'Sim-карты',
    text: 'Dual еSIM',
  },
  {
    id: 6,
    title: 'Операционная система',
    text: 'iOS 17',
  },
])

const configTabChange = (newTab: number) => {
  configTab.value = newTab
}

const stateTabChange = (newTab: number) => {
  stateTab.value = newTab
}

const handlerMainFoto = computed((): string => {
  if (!mainFoto.value) {
    return examplePhoto[0].url
  } else {
    return mainFoto.value
  }
})

const onItemFoto = (item: {
  id: number
  url: string
  isActive?: boolean
}): void => {
  mainFoto.value = item.url
}

const handlerOpenCarousel = (): void => {
  openModel.value = !openModel.value
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.product-card {
  width: 100%;
  display: flex;
  @media #{$sm} {
    display: block;
  }
  &__container {
    width: 100%;
  }
  &__info {
    max-width: 400px;
    @media #{$sm} {
      max-width: 100%;
    }
  }
  &__example-photo {
    margin-right: 14px;
    @media #{$sm} {
      display: none;
    }
  }
  &__photo {
    margin-right: 40px;
  }
}

.photo-cart {
  &__photo {
    height: 450px;
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media #{$sm} {
      width: 100%;
      height: 360px;
    }
  }
  &__photo img {
    object-fit: cover;
    display: block;
    margin: auto;
    height: 100%;
    cursor: pointer;
  }
}

.info-card {
  margin-right: 40px;
  @media #{$sm} {
    margin-right: 0;
  }
  &__title h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.24px;
  }
  &__color {
    margin-top: 24px;
  }
  &__photo {
    margin: 12px 0 24px 0;
  }
  &__grade {
    margin-top: 12px;
  }
}

.card-subtitle {
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.056px;
  margin-bottom: 12px;
}

.isActive {
  background: $gray-150;
  border-radius: 20px;
  color: black;
}
.product-card__basket {
  width: 360px;
  @media #{$sm} {
    width: 100%;
    margin-top: 50px;
  }
}

.breadcrumbs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media #{$sm} {
    flex-wrap: wrap;
  }
}
</style>
