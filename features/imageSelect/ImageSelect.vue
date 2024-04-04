<template>
  <div class="product-card__example-photo example-photo">
    <div
    v-for="item in items"
    :key="item.id"
    :class="['example-photo__image', { isActive: item.isActive }]"
      @click="handlerExamplePhoto(item)"
    >
      <img :src="item.url" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  items: {
    id: number
    url: string
    isActive?: boolean
  }[]
}

const { items } = defineProps<Props>()
const emit = defineEmits(['onItemFoto'])

const handlerExamplePhoto = (item: {
  id: number
  url: string
  isActive?: boolean
}): void => {
  emit('onItemFoto', item)
  item.isActive = true
  items.filter(el => {
    if (item.id !== el.id) {
      el.isActive = false
    } else {
      el.isActive = true
    }
  })
}
</script>

<style lang="scss" scoped>
.example-photo {
  display: flex;
  width: 100%;
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 8px;
    width: 44px;
    height: 44px;
    overflow: hidden;
  }
  &__image img {
    height: 100%;
    padding: 1px;
  }
  &__total {
    text-align: center;
    margin-top: 35px;
    cursor: pointer;
  }
}
.isActive {
  border: 1px solid black;
}
</style>
