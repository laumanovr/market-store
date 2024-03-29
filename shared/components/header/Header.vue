<template>
  <div class="header-container">
    <div class="logo">
      <img src="~/assets/images/Ogogo-logo.png" alt="" class="img" />
      <SSwitchButton />
    </div>
    <SInput isSearchable placeHolder="Поиск" width="100%" />
    <div class="menu-items">
      <div class="menu-item" @click="menuItemChange(MenuItems.Favorite)">
        <SIconRender
          name="FavoriteIcon"
          :color="isActive(MenuItems.Favorite) ? 'violet' : 'gray'"
        />
        <span :class="{ active: isActive(MenuItems.Favorite) }">
          Избранное
        </span>
      </div>
      <div class="menu-item" @click="menuItemChange(MenuItems.Orders)">
        <SIconRender
          name="BoxIcon"
          :color="isActive(MenuItems.Orders) ? 'violet' : ''"
        />
        <span :class="{ active: isActive(MenuItems.Orders) }">Заказы</span>
      </div>
      <div class="menu-item" @click="menuItemChange(MenuItems.Cart)">
        <SIconRender
          name="CartIcon"
          :color="isActive(MenuItems.Cart) ? 'violet' : 'gray'"
        />
        <span :class="{ active: isActive(MenuItems.Cart) }">Корзина</span>
      </div>
      <div class="menu-item" @click="menuItemChange(MenuItems.Profile)">
        <BaseIcon name="emptyAva" viewBox="0 0 22 22" height="24" class="icon-ava"/>
        <span :class="{ active: isActive(MenuItems.Profile) }">Иван</span>
      </div>
      <div class="menu-item" @click="isVoiceModalOpenLogin = true">
        <BaseIcon name="emptyAva" viewBox="0 0 22 22" height="24" class="icon-svg"/>
        <span>Войти</span>
      </div>
      <teleport to="body">
        <TheModalLogin
          v-if="isVoiceModalOpenLogin"
          @close="isVoiceModalOpenLogin = false"
          @onResetPassword="onResetPassword"
          @onRegistration="onRegistration"
        />
      </teleport>
      <teleport to="body">
        <TheModalRecovery
          v-if="isVoiceModalOpenRecovery"
          @close="isVoiceModalOpenRecovery = false"
          @onBack="onBack"
        />
      </teleport>
      <teleport to="body">
        <TheModalRegistration v-if="isVoiceModalOpenReg" @close="isVoiceModalOpenReg = false"/>
      </teleport>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender, SInput, SSwitchButton } from "@tumarsoft/ogogo-ui";
import { MenuItems } from "~/shared/utils/enums";
import BaseIcon from "../icons/BaseIcon.vue";
import TheModalLogin from '~/shared/components/modal/modals/TheModalLogin.vue'
import TheModalRecovery from '~/shared/components/modal/modals/TheModalRecovery/TheModalRecovery.vue'
import TheModalRegistration from '~/shared/components/modal/modals/TheModalRegistration/TheModalRegistration.vue'

const isVoiceModalOpenLogin = ref(false)
const isVoiceModalOpenReg = ref(false)
const isVoiceModalOpenRecovery = ref(false)
const router = useRouter();
const route = useRoute();
const activeTab = ref("");

Object.values(MenuItems).forEach((item: any) => {
  if (route.path.includes(item)) {
    activeTab.value = item;
  }
});

const menuItemChange = (value: string) => {
  activeTab.value = value;
  router.push("/" + value);
};

const isActive = (value: string) => {
  return activeTab.value === value;
};

const onResetPassword = ():void => {
  isVoiceModalOpenLogin.value = false
  isVoiceModalOpenRecovery.value = true
}

const onRegistration = ():void => {
  isVoiceModalOpenLogin.value = false
  isVoiceModalOpenReg.value = true
}

const onBack = ():void => {
  isVoiceModalOpenRecovery.value = false
  isVoiceModalOpenLogin.value = true
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
.icon-ava:deep(path) {
  stroke: $gray-400;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  .logo {
    display: flex;
    align-items: center;
    margin-right: 24px;
    .img {
      margin-right: 24px;
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    .menu-item {
      text-align: center;
      margin-left: 30px;
      cursor: pointer;
      span {
        display: block;
        font-weight: 500;
        font-size: 12px;
        color: $gray-500;
        &.active {
          color: $violet-700;
        }
      }
    }
  }
}
</style>
