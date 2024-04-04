<template>
  <BaseModal text="Регистрация">
    <Registration v-if="step == 0" @number="handlerNumber" />
    <ReceivingMessage v-else-if="step == 1" />
    <PasswordConfirmation v-else-if="step == 2" />
    <div class="modal__next-btn">
      <SButton
        color="violet"
        size="large"
        @click="handlerStep"
        :disabled="number.length !== 12"
      >
        Продолжить
      </SButton>
    </div>
    <div class="modal__login">
      <SButton color="gray" size="large"> Войти </SButton>
    </div>
  </BaseModal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseModal from '../../BaseModal.vue'
import PasswordConfirmation from '../TheModalRecovery/step/PasswordConfirmation.vue'
import ReceivingMessage from '../TheModalRecovery/step/ReceivingMessage.vue'
import Registration from './step/Registration.vue'
import { SButton } from '@tumarsoft/ogogo-ui'

const step = ref(0)
const number = ref('')

const handlerNumber = (e: string): void => {
  number.value = e
}

const handlerStep = (): void => {
  if (step.value < 2) {
    step.value++
  }
}
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
