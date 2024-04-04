<template>
  <div class="modal">
    <div class="modal__content">
      <SForm ref="form">
        <div
          :class="['modal__password', { 'modal-validate': validateWarning }]"
        >
          <SInput
            label="Придумайте новый пароль"
            placeHolder="Новый пароль"
            width="100%"
            v-model="formObj.password"
            :rules="myRule"
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
            placeHolder="Повторите пароль"
            width="100%"
            v-model="formObj.passwordRestart"
            :rules="myRule"
            type="password"
          />
        </div>
      </SForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { SInput, SForm } from '@tumarsoft/ogogo-ui'

const validateWarning = ref(true)

const form = ref()
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

// const onSubmit = () => {
//         console.log(form.value.validateForm());
//       }
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
