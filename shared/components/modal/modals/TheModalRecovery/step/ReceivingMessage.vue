<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__title">
        <h5>Введите код из SMS</h5>
      </div>
      <div class="modal__code">
        <InputCode @on-input="onTyping" />
      </div>
      <div class="modal__text modal-text" v-if="!timerRestart">
        <span>
          Отправить повторно через: <span>{{ timer }}</span>
        </span>
      </div>
      <div class="modal__text-restart modal-text" v-else>
        <span>Отправить повторно</span>
      </div>
      <div class="light">
        <SButton
          size="large"
          class="wp-100"
          :disabled="inputCode.length < 4"
          @click="submitSms"
        >
          Продолжить
        </SButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SButton } from '@tumarsoft/ogogo-ui'
import InputCode from '~/shared/components/input/InputCode.vue'

const emit = defineEmits(['next'])

const timer = ref(59)
const timerRestart = ref(false)
const inputCode = ref('')

const onTyping = (smsCode: any) => {
  inputCode.value = smsCode
}

const submitSms = () => {
  console.log(inputCode.value)
  // promise.then
  emit('next')
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.modal-text {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.056px;
  text-align: center;
  margin: 24px 0;
}
.modal {
  &__title {
    margin: 26px 0 20px 0;
  }
  &__title h5 {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.196px;
    color: $black;
    text-align: center;
    margin: 0;
  }
  &__text {
    color: $gray-500;
  }
  &__text-restart {
    color: $violet-600;
  }
}
</style>
