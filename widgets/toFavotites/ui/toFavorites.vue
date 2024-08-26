<template>
  <div class="toFavorites">
    <div class="toFavorites__container">
      <div class="toFavorites__favorite">
        <SButton type="text" @click="$emit('onFavorites')">
          <SIconRender name="heart" class="s-mr-2" />
          В избранное
        </SButton>
      </div>
      <div class="toFavorites__share">
        <SButton type="text" @click="$emit('onShare')">
          <SIconRender name="export" class="s-mr-2" />
          Поделиться
        </SButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender, SButton } from '@tumarsoft/ogogo-ui'

defineEmits(['onFavorites', 'onShare'])
</script>

<style scoped lang="scss">
.toFavorites {
  &__container {
    display: flex;
    align-items: center;
  }
  &__favorite {
    button {
      white-space: nowrap;
    }
  }
}
</style>
