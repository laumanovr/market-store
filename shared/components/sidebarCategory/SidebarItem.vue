<template>
  <div class="sidebar-item" @click="emit('click', props.item)">
    <div :class="['sidebar-item__list', { active: props.item.isActive }]">
      <div class="sidebar-item__text">
        <div v-if="props.item.icon" class="icon-svg">
          <BaseIcon
            :name="props.item.icon"
            viewBox="center center 18 22"
            class="icon-svg"
          />
        </div>
        <div>{{ props.item.categoryName }}</div>
      </div>
      <div v-if="props.item.childMarketplaceCategories?.length">
        <BaseIcon name="arrow" viewBox="0 -6 20 20" class="icon-svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.icon-svg {
  width: 24px;
  height: 24px;
}
.sidebar-item {
  font-size: 14px;
  font-weight: 500;
  position: relative;
  width: 100%;
  &__item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 350px;
    margin: 0 20px;
  }
  &__list {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  &__text {
    display: flex;
    align-items: center;
    grid-gap: 16px;
  }
  &__title h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.24px;
    padding: 0 9px;
  }
}
.active {
  border-radius: 8px;
  background: $gray-100;
}
</style>
