<template>
  <BaseModal text="Вход">
    <div class="modal">
      <div class="modal__content">
        <SForm ref="form">
          <div class="modal__phone phone-field">
            <div class="phone-field__number">
              <SInput
                label="Телефон"
                width="100%"
                place-holder="+996"
                :rules="[requiredField]"
                v-model="phone"
                v-maska:[options]
              />
            </div>
          </div>
          <div
            :class="['modal__password', { 'modal-validate': validateWarning }]"
          >
            <SInput
              label="Пароль"
              place-holder="Пароль"
              width="100%"
              :rules="[requiredField]"
              v-model="password"
              type="password"
            />
          </div>
          <div class="modal__reset-password">
            <span @click="$emit('onResetPassword')">Забыли пароль?</span>
          </div>
          <div class="modal__login light">
            <SButton
              size="large"
              :disabled="numberModified.length !== 12"
              @click="onSubmit"
            >
              Войти
            </SButton>
          </div>
        </SForm>
        <div class="modal__registration light">
          <SButton
            type="secondary"
            size="large"
            @click="$emit('onRegistration')"
          >
            Зарегистрироваться
          </SButton>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import BaseModal from '../BaseModal.vue'
import { SButton, SInput, SForm } from '@tumarsoft/ogogo-ui'
import { requiredField } from '../../../utils/rules'

defineEmits(['onResetPassword', 'onRegistration'])

const validateWarning = ref(true)
const form = ref(null)
const phone = ref('')
const password = ref('')

const options = reactive({
  mask: '+996 ### ## ## ##',
  eager: true,
})

const numberModified = computed(() => {
  return phone.value.replace(/[+ ]/g, '')
})
const onSubmit = () => {
  form.value.validate().then((isValid: boolean) => {
    if (isValid) {
      console.log('phone: ', numberModified.value)
      console.log('passw: ', password.value)
    }
  })
}
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
