<template>
  <div
    class="baseModal"
    @click.self="close"
    @keydown.esc="close"
    tabindex="-1"
    ref="modalFocus"
  >
    <BaseModalOverlay v-if="isOpen" @click="close" />
    <div v-if="isOpen" class="baseModal__content">
      <div class="baseModal__btn">
        <BaseModalHeader
          :withBackButton
          :text
          @close="close"
          @back="back"
          v-if="!header"
        />
      </div>
      <div class="baseModal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseModalHeader from './BaseModalHeader.vue'
import BaseModalOverlay from './BaseModalOverlay.vue'

interface Props {
  text: string
  withBackButton?: boolean
  header?: boolean
}

const { text, withBackButton = false, header } = defineProps<Props>()

const emit = defineEmits(['close', 'onBack'])

const modalFocus = ref(null)
const isOpen = ref(true)

onMounted(() => {
  modalFocus.value.focus()
})

const back = () => {
  emit('onBack')
}

const close = () => {
  setTimeout(() => {
    isOpen.value = false
    emit('close')
  }, 100)
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';
.baseModal {
  position: fixed;
  top: 20%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  @media #{$xs} {
    width: 100%;
    height: 100%;
    top: 0;
  }
  &__content {
    position: relative;
    background-color: $white;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
    padding: 24px;
    min-width: 100%;
    @media #{$xs} {
      margin: 0;
      height: 100%;
      border-radius: 0;
    }
  }
  &__footer {
    display: flex;
    border-top: 1px solid black;
  }
}
</style>
