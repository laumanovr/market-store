<template>
  <SModal v-model="isOpen">
    <div class="s-flex s-w-full">
      <div class="s-w-1/2">
        <div>
          <div class="s-text-title-3 s-mb-3">Способ доставки</div>
          <STabs :tab-mode="'filter-tabs'">
            <STabItem>Наличными</STabItem>
            <STabItem>Картой на сайте</STabItem>
          </STabs>
          <div class="modal__street s-mt-5">
            <SInput placeHolder="Улица, номер дома" />
          </div>
          <div class="modal__house">
            <SInput placeHolder="Номер д." />
            <SInput placeHolder="Домофон" />
            <SInput placeHolder="Этаж" />
          </div>
          <div class="modal__comments">
            <STextArea placeHolder="Комментарии" />
          </div>
        </div>
        <div class="modal__btn s-mt-3">
          <SButton size="large">Привезти сюда</SButton>
        </div>
      </div>
      <div class="modal__map s-w-1/2">
        <img src="~/assets/images/Map.png" class="s-w-full s-h-full" alt="" />
      </div>
    </div>
  </SModal>
</template>

<script setup lang="ts">
import {
  SButton,
  SInput,
  STextArea,
  STabs,
  STabItem,
  SModal,
} from '@tumarsoft/ogogo-ui'
import { ref } from 'vue'

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
