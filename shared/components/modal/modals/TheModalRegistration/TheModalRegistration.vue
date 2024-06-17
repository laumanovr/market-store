<template>
  <BaseModal text="Регистрация">
    <Registration v-if="step == 0" @next="handleStep" />
    <ReceivingMessage v-else-if="step == 1" @next="handleStep" />
    <PasswordConfirmation v-else-if="step == 2" @submit="onSubmit" />
  </BaseModal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseModal from '../../BaseModal.vue'
import PasswordConfirmation from '../TheModalRecovery/step/PasswordConfirmation.vue'
import ReceivingMessage from '../TheModalRecovery/step/ReceivingMessage.vue'
import Registration from './step/Registration.vue'

const step = ref(0)

const handleStep = (): void => {
  if (step.value < 2) {
    step.value++
  }
}

const onSubmit = () => {}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.modal {
  &__next-btn {
    margin-bottom: 8px;
  }
  &__next-btn:deep(.button) {
    width: 100%;
  }
  &__next-btn:deep(.button:disabled) {
    cursor: no-drop;
  }
  &__login:deep(.button) {
    width: 100%;
  }
}
</style>
