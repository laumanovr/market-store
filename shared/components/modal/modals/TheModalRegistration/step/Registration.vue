<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__phone phone-field">
        <div class="phone-field__number">
          <SInput
            place-holder="+996"
            v-maska:[maskOptions]
            v-model="phoneNumber"
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
      <div>
        <SButton
          size="large"
          class="s-w-full"
          :disabled="modifiedNumber.length < 12"
          @click="submitRegistration"
        >
          Продолжить
        </SButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SInput, SCheckbox, SButton } from '@tumarsoft/ogogo-ui'
import { ref, computed } from 'vue'
import { maskOptions } from '~/shared/helpers'

const emit = defineEmits(['next'])

const phoneNumber = ref('')
const modifiedNumber = computed(() => phoneNumber.value.replace(/[ + ]/g, ''))

const submitRegistration = () => {
  console.log(modifiedNumber.value)
  // promise.then
  emit('next')
}
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
