<template>
  <SModal v-model="isOpen">
    <div class="modal">
      <div class="modal__content">
        <div class="s-text-title-1 s-text-center">Адрес доставки</div>
        <div class="modal__container">
          <div class="modal__list">
            <AddressList isActive />
            <AddressList />
            <AddressList />
            <AddressList />
          </div>
        </div>
        <div class="s-flex s-gap-3">
          <SButton type="secondary" class="s-w-1/2">Привезти сюда</SButton>
          <SButton type="secondary" class="s-w-1/2" @click="$emit('onOpenMap')">
            <SIconRender name="plus" class="s-mr-2" />
            Добавить новый
          </SButton>
        </div>
      </div>
    </div>
  </SModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddressList from '~/shared/components/addressList/addressList.vue'
import { SButton, SIconRender, SModal } from '@tumarsoft/ogogo-ui'

const isOpen = ref(false)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss" scoped></style>
