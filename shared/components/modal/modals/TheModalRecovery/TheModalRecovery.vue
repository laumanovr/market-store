<template>
    <BaseModal text="Восстановление" withBackButton @onBack="onBack">
      <Recovery v-if="step == 0" @number="handlerNumber"/>
      <ReceivingMessage v-else-if="step == 1"/>
      <PasswordConfirmation v-else-if="step == 2"/>
      <div class="modal__send">
        <SButton color="violet" size="large" @click="handlerStep" :disabled="number.length !== 12">
          {{ step === 0 ? 'Отправить' : 'Продолжить' }}
        </SButton>
      </div>
    </BaseModal>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Recovery from './step/Recovery.vue';
  import ReceivingMessage from './step/ReceivingMessage.vue'
  import PasswordConfirmation from './step/PasswordConfirmation.vue'
  import BaseModal from '../../BaseModal.vue';
  import { SButton } from "@tumarsoft/ogogo-ui";

  const emit = defineEmits(['onBack'])

  const step = ref(0)
  const number = ref('')

  const handlerStep = () => {
    if(step.value < 2) {
      step.value++
    }
  }

  const handlerNumber = (e:string):void => {
    number.value = e
  }

  const onBack = () => {
      emit('onBack')
  }
  </script>

  <style lang="scss" scoped>
  @import "~/assets/style/colors.scss";
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
    &__text p{
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