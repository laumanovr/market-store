<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__phone phone-field">
        <div class="phone-field__number">
          <SInput
            width="100%"
            placeHolder="+996"
            v-maska:[options]
            @input="updateNumber"
          />
        </div>
      </div>
      <div class="modal__agreement">
        <div class="modal__checkbox">
          <SCheckbox>
            Нажимая на кнопку «Продолжить», вы соглашаетесь с
            <span style="text-decoration: underline">политикой</span> обработки
            персональных данных и
            <span style="text-decoration: underline">правилами</span>
            пользования сервисом.
          </SCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SInput, SCheckbox } from '@tumarsoft/ogogo-ui'
import { reactive } from 'vue'

const emit = defineEmits(['number'])

const updateNumber = (e: string): void => {
  emit('number', e.target.value.replace(/[+ ]/g, ''))
}

const options = reactive({
  mask: '+996 ### ### ###',
  eager: true,
})
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.phone-field {
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

.modal {
  &__next-btn {
    margin-bottom: 8px;
  }
  &__next-btn:deep(.button) {
    width: 100%;
  }
  &__login:deep(.button) {
    width: 100%;
  }
  &__checkbox {
    margin: 16px 0 24px 0;
  }
  &__checkbox:deep(span) {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: $black;
  }
}
</style>
