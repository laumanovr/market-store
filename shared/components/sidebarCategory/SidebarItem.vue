<template>
  <div class="sidebar-item">
    <div :class="['sidebar-item__list', { active: item.isActive }]" @click.stop="toggle(item)">
      <div class="sidebar-item__text">
        <div v-if="item.icon" class="icon-svg">
          <BaseIcon
            :name="item.icon"
            viewBox="center center 18 22"
            class="icon-svg"
          />
        </div>
        <div>{{ item.name }}</div>
      </div>
      <div v-if="item.items">
        <BaseIcon name="arrow" viewBox="0 -6 20 20" class="icon-svg" />
      </div>
    </div>
    <div v-show="item.isActive" class="sidebar-item__item">
      <div class="sidebar-item__title">
        <h4>
          {{ categoryName }}
        </h4>
      </div>
      <SidebarItem
        v-for="childItem in item.items"
        :key="childItem.name"
        :item="childItem"
        :categoryName="childItem.name"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'

const router = useRouter()
const props = defineProps({
  item: Object,
  categoryName: String,
})
const emit = defineEmits(['close', 'itemCategoty'])

const isOpen = ref(false)

const itemCategory = inject('itemCategory')

const toggle = (item) => {
  itemCategory(item)
}

const openPages = item => {
  router.push(`/categories/${item.name}`)
  emit('close')
}
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
  width: 350px;
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
