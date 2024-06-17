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
            width="100%"
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
            width="100%"
            v-model="formObj.passwordRestart"
            :rules="[requiredField]"
            type="password"
          />
        </div>
        <div class="light">
          <SButton size="large" class="wp-100" @click="onSubmit">
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

const emit = defineEmits(['submit'])

const validateWarning = ref(true)

const form = ref()
const formObj = reactive({
  password: '',
  passwordRestart: '',
})

const onSubmit = () => {
  emit('submit')
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
