<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__text">
        <p>
          Введите номер телефона, который вы использовали при регистрации для
          восстановления пароля
        </p>
      </div>
      <div class="modal__phone phone-field">
        <SInput
          label="Телефон"
          place-holder="+996"
          v-maska:[maskOptions]
          v-model="phoneNumber"
        />
      </div>
      <div>
        <SButton
          size="large"
          class="s-w-full"
          :disabled="modifiedNumber.length < 12"
          @click="submitPhone"
        >
          Продолжить
        </SButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { SInput, SButton } from '@tumarsoft/ogogo-ui'
import { maskOptions } from '~/shared/helpers'

const emit = defineEmits(['next'])

const phoneNumber = ref('')
const modifiedNumber = computed(() => phoneNumber.value.replace(/[ + ]/g, ''))

const submitPhone = () => {
  console.log(modifiedNumber.value)
  // promise.then
  emit('next')
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.modal {
  &__text {
    margin: 12px 0 16px 0;
  }
  &__text p {
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
