<template>
  <div class="info-briefly">
    <div class="info-briefly__list" v-for="item in items" :key="item.title">
      <div class="info-briefly__title">{{ item.title }}</div>
      <div class="info-briefly__text">{{ item.text }}</div>
    </div>
    <div class="info-briefly__btn">
      <SButton
        type="text"
        class="s-text-violet-600 s-px-0"
        @click="$emit('handlerLink')"
      >
        Все характеристики и описание
        <SIconRender name="chevron-right" class="s-text-violet-600" />
      </SButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'
interface Props {
  items: {
    id: number
    title: string
    text: string
  }[]
}

const { items } = defineProps<Props>()
const emit = defineEmits(['handlerLink'])
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.info-briefly {
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 16px;
  }
  &__title {
    color: $gray-500;
  }
  &__text {
    color: $black;
  }
}
</style>
