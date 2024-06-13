<template>
  <BaseModal text="Вход">
    <div class="modal">
      <div class="modal__content">
        <div class="modal__phone phone-field">
          <div class="phone-field__number">
            <SInput
              width="100%"
              placeHolder="+996"
              v-model="number"
              v-maska:[options]
            />
          </div>
        </div>
        <SForm ref="form">
          <div
            :class="['modal__password', { 'modal-validate': validateWarning }]"
          >
            <SInput
              label="Пароль"
              placeHolder="Пароль"
              width="100%"
              v-model="formObj.password"
              type="password"
            />
          </div>
        </SForm>
        <div class="modal__reset-password">
          <span @click="$emit('onResetPassword')">Забыли пароль?</span>
        </div>
        <div class="modal__login">
          <SButton
            color="violet"
            size="large"
            :disabled="numberModified.length !== 12"
          >
            Войти
          </SButton>
        </div>
        <div class="modal__registration">
          <SButton color="gray" size="large" @click="$emit('onRegistration')">
            Зарегистрироваться
          </SButton>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '../BaseModal.vue'
import { SButton, SInput, SForm } from '@tumarsoft/ogogo-ui'
import { computed, ref } from 'vue'

const emit = defineEmits(['onResetPassword', 'onRegistration'])

const number = ref('')
const validateWarning = ref(true)
const form = ref()

const options = reactive({
  mask: '+996 ### ### ###',
  eager: true,
})
const formObj = reactive({
  password: '',
  passwordRestart: '',
})
const myRule = reactive([
  {
    validate: (value: string) => value.length >= 8,
    message: 'Min. length is 8 characters',
  },
])

const numberModified = computed(() => {
  return number.value.replace(/[+ ]/g, '')
})
//   const onSubmit = () => {
//    console.log(form.value.validateForm());
//   }
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

.modal {
  &__password {
    margin-top: 16px;
  }
  &__reset-password {
    margin: 16px 0 24px 0;
  }
  &__reset-password span {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.056px;
    color: $violet-600;
    cursor: pointer;
  }
  &__login {
    margin-bottom: 8px;
  }
  &__login:deep(.button) {
    width: 100%;
  }
  &__registration:deep(.button) {
    width: 100%;
  }
}

.modal-validate:deep(.input-container .input-label)::after {
  content: ' *';
  color: red;
}
</style>
