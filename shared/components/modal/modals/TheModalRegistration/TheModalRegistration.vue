<template>
    <BaseModal text="Регистрация">
      <Registration v-if="step == 0"/>
      <ReceivingMessage v-else-if="step == 1"/>
      <PasswordConfirmation v-else-if="step == 2"/>
      <div class="modal__next-btn">
        <SButton
          color="violet"
          size="large"
          @click="handlerStep"
        >
            Продолжить
        </SButton>
      </div>
      <div class="modal__login">
        <SButton
          color="gray"
          size="large"
        >
            Войти
        </SButton>
      </div>
    </BaseModal>
  </template>
<script setup lang="ts">
import BaseModal from '../../BaseModal.vue'
import PasswordConfirmation from '../TheModalRecovery/step/PasswordConfirmation.vue';
import ReceivingMessage from '../TheModalRecovery/step/ReceivingMessage.vue';
import Registration from './step/Registration.vue';
import { SButton } from "@tumarsoft/ogogo-ui";

const step = ref(0)

const handlerStep = ():void => {
  if(step.value < 2) {
    step.value++
  }
}
</script>
  
  
  <style lang="scss" scoped>
  @import "~/assets/style/colors.scss";
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