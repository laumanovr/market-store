<template>
  <SModal v-model="isOpen" class="modal-registration">
    <SIconRender name="chevron-left" class="back" @click="onBack" />
    <div class="s-text-title-1 s-text-center">Регистрация</div>
    <Registration v-if="step == 0" @next="handleStep" />
    <ReceivingMessage v-else-if="step == 1" @next="handleStep" />
    <PasswordConfirmation v-else-if="step == 2" />
  </SModal>
</template>
<script setup lang="ts">
import { SModal, SIconRender } from '@tumarsoft/ogogo-ui'
import { ref } from 'vue'
import PasswordConfirmation from '../TheModalRecovery/step/PasswordConfirmation.vue'
import ReceivingMessage from '../TheModalRecovery/step/ReceivingMessage.vue'
import Registration from './step/Registration.vue'

const emit = defineEmits(['onBack'])

const step = ref(0)
const isOpen = ref(false)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

const handleStep = (): void => {
  if (step.value < 2) {
    step.value++
  }
}

const onBack = () => {
  emit('onBack')
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss">
.modal-registration {
  position: relative;
  .modal-container {
    max-width: 400px;
  }
  .back {
    position: absolute;
    top: 28px;
    left: 18px;
    cursor: pointer;
  }
}
</style>
