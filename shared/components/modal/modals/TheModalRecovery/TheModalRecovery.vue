<template>
  <SModal v-model="isOpen" class="modal-recovery">
    <SIconRender name="chevron-left" class="back" @click="onBack" />
    <div class="s-text-title-1 s-text-center">Восстановление</div>
    <Recovery v-if="step == 0" @next="handleStep" />
    <ReceivingMessage v-else-if="step == 1" @next="handleStep" />
    <PasswordConfirmation v-else-if="step == 2" />
  </SModal>
</template>

<script setup lang="ts">
import { SModal, SIconRender } from '@tumarsoft/ogogo-ui'
import { ref } from 'vue'
import Recovery from './step/Recovery.vue'
import ReceivingMessage from './step/ReceivingMessage.vue'
import PasswordConfirmation from './step/PasswordConfirmation.vue'

const emit = defineEmits(['onBack'])

const isOpen = ref(false)
const step = ref(0)

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

const handleStep = () => {
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
.modal-recovery {
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
