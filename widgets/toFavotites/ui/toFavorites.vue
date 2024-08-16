<template>
  <div class="toFavorites">
    <div class="toFavorites__container">
      <div class="toFavorites__favorite">
        <Button decoration="none" class="btn" @click="$emit('onFavorites')">
          <template v-slot:leftIcon>
            <SIconRender name="heart" color="black" class="icon-svg" />
          </template>
          В избранное
        </Button>
      </div>
      <div class="toFavorites__share">
        <Button decoration="none" class="btn" @click="$emit('onShare')">
          <template v-slot:leftIcon>
            <BaseIcon name="share" viewBox="0 0 22 22" class="icon-svg" />
          </template>
          Поделиться
        </Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '~/shared/components/button/button.vue'
import { SIconRender } from '@tumarsoft/ogogo-ui'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

defineEmits(['onFavorites', 'onShare'])
</script>

<style scoped lang="scss">
.icon-svg {
  width: 23px;
  height: 23px;
  margin-right: 8px;
}
.btn:deep(.button__text) {
  font-size: 14px;
  font-weight: 500;
}
.toFavorites {
  &__container {
    display: flex;
    align-items: center;
    grid-gap: 16px;
  }
  &__favorite,
  &__share {
    width: 128px;
  }
}
</style>
