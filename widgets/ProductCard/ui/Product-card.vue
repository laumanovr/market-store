<template>
  <div class="product-card__container">
      <div class="product-card__detailed detailed-photo" v-show="openModel">
              <Carousel
              :examplePhoto="examplePhoto"
              @closeCarousel="handlerOpenCarousel"
              />
          </div>
      <section class="breadcrumbs">
          <Breadcrumbs :items="BreadcrumbsItems"/>
      </section>
      <section v-show="!openModel" class="product-card">
          <div class="product-card__example-photo" >
              <ImageGallary :items="examplePhoto"
              @onItemFoto="onItemFoto"
              detail
              @openCarousel="handlerOpenCarousel"
              
              />
          </div>
          <div class="product-card__photo photo-cart">
              <div class="photo-cart__photo">
                  <img :src="handlerMainFoto" alt="Main photo" @click="handlerOpenCarousel">
              </div>
          </div>
          <div class="product-card__info info-card">
              <div class="info-card__title">
                  <h3>Смартфон Apple iPhone 15 Pro 128 ГБ, Dual: nano SIM + eSIM, титан</h3>
              </div>
              <div class="info-card__grade grade">
                  <div class="grade__number number-grade">
                      <div class="number-grade__image">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z" fill="#FACC15"/>
                          </svg>
                      </div>
                      <div class="number-grade__number">
                          4.6
                      </div>
                  </div>
                  <div class="grade__total total-grade">
                      <div class="total-grade__number">
                          28
                      </div>
                      <div class="total-grade__text">
                          оценок
                      </div>
                  </div>
                  <div class="spase-grade">•</div>
                  <div class="grade__review review-grade">
                      <div class="review-grade__number">
                          14
                      </div>
                      <div class="review-grade__text">
                          отзыв
                      </div>
                  </div>
              </div>
              <div class="info-card__color color-info">
                  <div class="color-info__text card-subtitle">
                      Цвет товара: <span>Natural Titanium</span>
                  </div>
              </div>
              <div class="info-card__photo">
                  <ImageSelect :items="ImageSelectItems"/>
              </div>
              <div class="info-card__configuration configuration">
                  <div class="configuration__title card-subtitle">Конфигурация памяти: <span>256 ГБ</span></div>
                  <div class="configuration__info">
                      <ul class="configuration__list">
                          <li
                              :class="['configuration__link', {isActive: item.isActive}]"
                              v-for="item in configurationProduct"
                              :key="item.id"
                              @click="handlerConfigurationActive(item)"
                          >
                              <StateProduct text="ГБ">{{ item.configuration }}</StateProduct>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="info-card__state state-product">
                  <div class="state-product__title card-subtitle">Состояние товара: <span>Новый</span></div>
                  <div class="state-product__info">
                      <ul class="state-product__list">
                          <li
                          :class="['state-product__link', {isActive: item.isActive}]"
                          v-for="item in stateProduct"
                          :key="item.id"
                          @click="handlerStateActive(item)"
                          >
                              <StateProduct>{{ item.text }}</StateProduct>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="info-card__description description-product">
                  <div class="description-product__title card-subtitle">
                      Коротко о товаре
                  </div>
                  <div class="description-product__list">
                      <BrieflyInfo :items="productBrieflyInfo" @handlerLink="openCardDetail"/>
                  </div>
              </div>
          </div>
          <div class="product-card__basket">
              <Basket/>
          </div>
      </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Breadcrumbs } from '~/features/breadcrumbs'
import { ImageGallary } from '~/features/imageGallary'
import { ImageSelect } from '~/features/imageSelect'
import { StateProduct } from '~/features/stateProduct'
import { BrieflyInfo } from '~/widgets/brieflyInfo'
import { Basket } from '~/features/basket'
import Carousel from '~/shared/components/carousel/carousel.vue'

const router = useRouter();

const openCardDetail = () => {
  router.push(`/product-card/detail`);
};

const mainFoto = ref('')
const openModel = ref(false)

const configurationProduct = reactive<{id: number; configuration: string; isActive?: boolean}[]>([
  {
      id: 0,
      configuration: '128',
      isActive: true
  },
  {
      id: 1,
      configuration: '256'
  },
  {
      id: 2,
      configuration: '512'
  }
])
const stateProduct = reactive<{id: number; text: string; isActive?: boolean}[]>([
  {
      id: 0,
      text: 'Новый',
      isActive: true
  },
  {
      id: 1,
      text: 'БУ'
  },
])
const BreadcrumbsItems = reactive<{name: string; link: string}[]>([
      {
      name: 'Главная',
      link: 'test'
      },
      {
      name: 'Электроника',
      link: 'test'
      },
      {
      name: 'Мобильные телефоны',
      link: 'test'
      },
      {
      name: 'Смартфоны',
      link: 'test'
      },
      {
      name: 'Apple',
      link: 'test'
      },
      {
      name: 'Смартфон Apple iPhone 15 Pro Max 256Gb Natural Titanium',
      link: 'test'
      }])
const examplePhoto = reactive<{id: number; url: string; isActive?: boolean}[]>([
  {
      'id': 0,
      'url': '_nuxt/assets/images/iphone-img.jpg',
      'isActive': true
  },
  {
      'id': 1,
      'url': '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
      'id': 2,
      'url': '_nuxt/assets/images/iphone-img.jpg',
  },
  {
      'id': 3,
      'url': '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
      'id': 4,
      'url': '_nuxt/assets/images/iphone-img.jpg',
  },
  {
      'id': 5,
      'url': '_nuxt/assets/images/iphone-img2.jpg',
  }
])
const ImageSelectItems = reactive<{id: number; url: string; isActive?: boolean}[]>([
  {
      'id': 0,
      'url': '_nuxt/assets/images/iphone-img.jpg',
      'isActive': true
  },
  {
      'id': 1,
      'url': '_nuxt/assets/images/iphone-img2.jpg',
  },
  {
      'id': 2,
      'url': '_nuxt/assets/images/iphone-img.jpg',
  },
  {
      'id': 3,
      'url': '_nuxt/assets/images/iphone-img2.jpg',
  }
])
const productBrieflyInfo = reactive<{id: number; title: string; text: string}[]>([
  {
      'id': 0,
      'title': 'Экран',
      'text': '6.1" (2556x1179) OLED 120 Гц'
  },
  {
      'id': 1,
      'title': 'Память',
      'text': 'встроенная 256 ГБ'
  },
  {
      'id': 2,
      'title': 'Фото',
      'text': '3 камеры, основная 48 МП'
  },
  {
      'id': 3,
      'title': 'Аккумулятор',
      'text': '2815 мА·ч'
  },
  {
      'id': 4,
      'title': 'Процессор',
      'text': '02.05.1997'
  },
  {
      'id': 5,
      'title': 'Sim-карты',
      'text': 'Dual еSIM'
  },
  {
      'id': 6,
      'title': 'Операционная система',
      'text': 'iOS 17'
  }
])

const handlerMainFoto = computed(():string => {
  if (!mainFoto.value) {
      return examplePhoto[0].url
  } else {
      return mainFoto.value
  }
})

const onItemFoto = (item:{id: number; url: string; isActive?: boolean}):void => {
  mainFoto.value = item.url
}

const handlerConfigurationActive = (item:{id: number; configuration: string; isActive?: boolean}):void => {
  item.isActive = true
  configurationProduct.filter((el) => {
          if (item.id !== el.id) {
              el.isActive = false
          } else {
            el.isActive = true
          }})
}

const handlerStateActive = (item:{id: number; text: string; isActive?: boolean}):void => {
  item.isActive = true
  stateProduct.filter((el) => {
          if (item.id !== el.id) {
              el.isActive = false
          } else {
            el.isActive = true
          }})
}

const handlerOpenCarousel = ():void => {
  openModel.value = !openModel.value
}



</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
.product-card {
  width: 100%;
  display: flex;
  &__info {
  max-width: 400px;
  }
  &__example-photo {
      margin-right: 14px;
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
  &__title h3 {
      margin: 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.24px;
  }
  &__grade {
      display: flex;
      align-items: center;
      margin-top: 12px;
  }
  &__color {
      margin-top: 24px;
  }
  &__photo {
      margin: 12px 0 24px 0;
  }
}

.number-grade {
  &__image {
      margin-right: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  &__image svg {
      width: 15px;
      height: 15px;
  }
  &__number {
      color: $black;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
  }
}

.grade {
  grid-gap: 8px;
  &__number {
      display: flex;
      align-items: center;
  }
  &__total {
      display: flex;
      align-items: center;
  }
  &__review {
      display: flex;
      align-items: center; 
  }
}

.total-grade {
  &__number {
      margin-right: 4px;
  }
  &__text {
      display: flex;
      justify-content: center;
  }
}

.review-grade {
  &__number {
      margin-right: 4px;
  }
}

.total-grade, .review-grade, .spase-grade {
  color: $gray-500;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
}

.configuration {
  &__info {
      margin: 12px 0 24px 0;
  }
  &__list {
      padding: 0;
      margin: 0;
      display: flex;
      list-style: none;
  }
  &__link {
      color: $gray-500;
  }
}

.state-product {
  &__list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
  }
  &__link {
      color: $gray-500;
  }
  &__info {
      margin: 12px 0 40px 0;
  }
}

.card-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
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
.product-card__basket{
  width: 360px;
}
</style>