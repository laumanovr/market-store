<template>
  <BaseModal text="Восстановление" withBackButton @onBack="onBack">
    <Recovery v-if="step == 0" @next="handleStep" />
    <ReceivingMessage v-else-if="step == 1" @next="handleStep" />
    <PasswordConfirmation v-else-if="step == 2" @submit="onSubmit" />
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Recovery from './step/Recovery.vue'
import ReceivingMessage from './step/ReceivingMessage.vue'
import PasswordConfirmation from './step/PasswordConfirmation.vue'
import BaseModal from '../../BaseModal.vue'

const emit = defineEmits(['onBack'])

const step = ref(0)

const handleStep = () => {
  if (step.value < 2) {
    step.value++
  }
}

const onSubmit = () => {}

const onBack = () => {
  emit('onBack')
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.modal {
  &__send {
    margin-bottom: 8px;
  }
  &__send:deep(.button) {
    width: 100%;
  }
  &__text {
    margin: 12px 0 16px 0;
  }
  &__text p {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: $black;
  }
  &__phone {
    margin-bottom: 36px;
  }
}
</style>
