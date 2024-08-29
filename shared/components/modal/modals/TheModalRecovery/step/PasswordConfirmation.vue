<template>
  <div class="modal">
    <div class="modal__content">
      <SForm ref="form">
        <div
          :class="['modal__password', { 'modal-validate': validateWarning }]"
        >
          <SInput
            label="Придумайте новый пароль"
            place-holder="Новый пароль"
            v-model="formObj.password"
            :rules="[requiredField]"
            type="password"
          />
        </div>
        <div
          :class="[
            'modal__password-restart',
            { 'modal-validate': validateWarning },
          ]"
        >
          <SInput
            label="Повторите пароль"
            place-holder="Повторите пароль"
            v-model="formObj.passwordRetype"
            :rules="[requiredField]"
            type="password"
          />
        </div>
        <div>
          <SButton size="large" class="s-w-full" @click="onSubmit">
            Подтвердить
          </SButton>
        </div>
      </SForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { SInput, SForm, SButton } from '@tumarsoft/ogogo-ui'
import { requiredField } from '../../../../../utils/rules'

const validateWarning = ref(true)

const form = ref()
const formObj = reactive({
  password: '',
  passwordRetype: '',
})

const onSubmit = () => {
  form.value.validate().then((isValid: boolean) => {
    if (isValid) {
      console.log(formObj)
    }
  })
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.modal {
  &__password {
    margin: 30px 0 16px 0;
  }
  &__password-restart {
    margin-bottom: 24px;
  }
}

.modal-validate:deep(.input-container .input-label)::after {
  content: ' *';
  color: red;
}
</style>
