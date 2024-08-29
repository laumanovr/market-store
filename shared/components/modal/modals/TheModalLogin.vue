<template>
  <SModal v-model="isOpen">
    <div class="s-text-title-1 s-text-center">Вход</div>
    <SForm ref="form">
      <div class="modal__phone phone-field">
        <div class="phone-field__number">
          <SInput
            label="Телефон"
            place-holder="+996"
            :rules="[requiredField]"
            v-model="phone"
            v-maska:[maskOptions]
          />
        </div>
      </div>
      <div :class="['modal__password', { 'modal-validate': validateWarning }]">
        <SInput
          label="Пароль"
          place-holder="Пароль"
          :rules="[requiredField]"
          v-model="password"
          type="password"
        />
      </div>
      <SButton
        type="text"
        class="s-text-violet-600 s-text-title-1 s-py-0 s-px-0"
        @click="$emit('onResetPassword')"
      >
        Забыли пароль?
      </SButton>
      <SButton
        size="large"
        class="s-w-full"
        :disabled="numberModified.length !== 12"
        @click="onSubmit"
      >
        Войти
      </SButton>
    </SForm>
    <SButton
      class="s-w-full s-mt-3"
      type="secondary"
      size="large"
      @click="$emit('onRegistration')"
    >
      Зарегистрироваться
    </SButton>
  </SModal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { SButton, SInput, SForm, SModal } from '@tumarsoft/ogogo-ui'
import { requiredField } from '~/shared/utils/rules'
import { maskOptions } from '~/shared/helpers'

defineEmits(['onResetPassword', 'onRegistration'])

const validateWarning = ref(true)
const form = ref()
const phone = ref('')
const password = ref('')
const isOpen = ref(false)

const numberModified = computed(() => {
  return phone.value.replace(/[+ ]/g, '')
})

const open = () => {
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}

const onSubmit = () => {
  form.value.validate().then((isValid: boolean) => {
    if (isValid) {
      console.log('phone: ', numberModified.value)
      console.log('passw: ', password.value)
    }
  })
}

defineExpose({
  open,
  close,
})
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';

.phone-field {
  display: grid;
  margin-top: 20px;
  &__code:deep(input) {
    width: 100%;
    height: 40px;
  }
  &__number input {
    width: 100%;
    height: 30px;
  }
}

.password-field {
  display: flex;
  flex-direction: column;
}

.modal-validate:deep(.input-container .input-label)::after {
  content: ' *';
  color: red;
}
</style>
