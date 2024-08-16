<template>
  <div>
    <div class="header-container">
      <div class="logo">
        <div class="logo-content">
          <div class="logo__photo">
            <img
              src="~/assets/images/big-logo.svg"
              alt=""
              class="desktop"
              @click="router.push('/')"
            />
            <img
              src="~/assets/images/small-logo.svg"
              class="mobile"
              alt=""
              @click="router.push('/')"
            />
          </div>
          <div class="logo__btn light">
            <SSwitchButton
              title="Каталог"
              @click="categoryOpen = !categoryOpen"
              :class="{ categoryActive: categoryOpen }"
            />
          </div>
        </div>
      </div>

      <SInput class="s-mr-3" isSearchable hide-details placeHolder="Поиск" />

      <div class="menu-items s-flex s-items-center s-gap-3">
        <router-link
          to="/shops"
          class="cursor-pointer s-flex s-flex-col s-items-center"
        >
          <SIconRender
            name="shop"
            :class="[
              route.name === MenuItems.Shop
                ? 's-text-violet-700'
                : 's-text-black',
            ]"
          />
          <span
            class="s-mt-1"
            :class="[
              route.name === MenuItems.Shop
                ? 's-text-violet-700'
                : 's-text-gray-500',
              's-text-body-medium',
            ]"
          >
            Магазины
          </span>
        </router-link>
        <router-link
          to="/cart"
          class="cursor-pointer s-flex s-flex-col s-items-center"
        >
          <SIconRender
            name="bag"
            :class="[
              route.name === MenuItems.Cart
                ? 's-text-violet-700'
                : 's-text-black',
            ]"
          />
          <span
            class="s-mt-1"
            :class="[
              route.name === MenuItems.Cart
                ? 's-text-violet-700'
                : 's-text-gray-500',
              's-text-body-medium',
            ]"
          >
            Корзина
          </span>
        </router-link>
        <router-link
          to="/favorite"
          class="cursor-pointer s-flex s-flex-col s-items-center"
        >
          <SIconRender
            name="heart"
            :class="[
              route.name === MenuItems.Favorite
                ? 's-text-violet-700'
                : 's-text-black',
            ]"
          />
          <span
            class="s-mt-1"
            :class="[
              route.name === MenuItems.Favorite
                ? 's-text-violet-700'
                : 's-text-gray-500',
              's-text-body-medium',
            ]"
          >
            Избранное
          </span>
        </router-link>
        <router-link
          to="/orders"
          class="cursor-pointer s-flex s-flex-col s-items-center"
        >
          <SIconRender
            name="box"
            :class="[
              route.name === MenuItems.Orders
                ? 's-text-violet-700'
                : 's-text-black',
            ]"
          />
          10  
          <span
            class="s-mt-1"
            :class="[
              route.name === MenuItems.Orders
                ? 's-text-violet-700'
                : 's-text-gray-500',
              's-text-body-medium',
            ]"
          >
            Заказы
          </span>
        </router-link>
        <div
          class="cursor-pointer s-flex s-items-center s-flex-col"
          @click="isModalOpenLogin = true"
        >
          <SIconRender name="user-round" />
          <span class="s-mt-1 s-text-body-medium s-text-gray-500">Войти</span>
        </div>
      </div>
    </div>
    <teleport to="body">
      <TheModalLogin
        v-if="isModalOpenLogin"
        @close="isModalOpenLogin = false"
        @onResetPassword="onResetPassword"
        @onRegistration="onRegistration"
      />
    </teleport>
    <teleport to="body">
      <TheModalRecovery
        v-if="isModalOpenRecovery"
        @close="isModalOpenRecovery = false"
        @onBack="onBack"
      />
    </teleport>
    <teleport to="body">
      <TheModalRegistration
        v-if="isModalOpenReg"
        @close="isModalOpenReg = false"
      />
    </teleport>
    <div class="sidebar" v-if="categoryOpen">
      <SidebarCategory @close="categoryOpen = false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { SIconRender, SInput, SSwitchButton } from '@tumarsoft/ogogo-ui'
import { MenuItems } from '~/shared/utils/enums'
import TheModalLogin from '~/shared/components/modal/modals/TheModalLogin.vue'
import SidebarCategory from '~/shared/components/sidebarCategory/SidebarCategory.vue'
import TheModalRecovery from '~/shared/components/modal/modals/TheModalRecovery/TheModalRecovery.vue'
import TheModalRegistration from '~/shared/components/modal/modals/TheModalRegistration/TheModalRegistration.vue'
import EventEmitter from '~/shared/utils/EventEmitter'

onMounted(() => {
  EventEmitter.$on('onLoginMobile', emittedValue => {
    isModalOpenLogin.value = emittedValue
  })
})

const isModalOpenLogin = ref(false)
const isModalOpenReg = ref(false)
const isModalOpenRecovery = ref(false)
const router = useRouter()
const route = useRoute()
const categoryOpen = ref(false)

const onResetPassword = (): void => {
  isModalOpenLogin.value = false
  isModalOpenRecovery.value = true
}

const onRegistration = (): void => {
  isModalOpenLogin.value = false
  isModalOpenReg.value = true
}

const onBack = (): void => {
  isModalOpenRecovery.value = false
  isModalOpenLogin.value = true
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.icon-ava:deep(path) {
  stroke: $gray-400;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  .logo-content {
    display: flex;
    align-items: center;
    margin-right: 24px;
    img {
      margin-right: 24px;
      cursor: pointer;
      &.mobile {
        display: none;
      }
      @media #{$lg} {
        &.desktop {
          display: none;
        }
        &.mobile {
          display: block;
          margin-right: 8px;
        }
      }
    }
    @media #{$sm} {
      margin-right: 0;
    }
  }
  .menu-items {
    @media #{$sm} {
      display: none;
    }
  }
  a {
    text-decoration: none;
  }
}

.sidebar {
  position: relative;
}

.logo {
  &__btn:deep(.button) {
    grid-gap: 8px;
    width: 132px;
    padding: 10px 20px;
  }
  &__btn:deep(.button.color_violet .button__text) {
    color: $white;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.064px;
  }
  &__btn:deep(.categoryActive.color_violet .button__text) {
    color: $violet-600;
  }
  &__btn:deep(.categoryActive.color_violet) {
    background: $violet-100;
  }
  &__btn {
    @media #{$sm} {
      display: none;
    }
  }
}
</style>
