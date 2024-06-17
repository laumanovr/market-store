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
          width="100%"
          place-holder="+996"
          v-maska:[options]
        />
      </div>
      <div class="light">
        <SButton size="large" class="wp-100" @click="submitPhone">
          Продолжить
        </SButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { SInput, SButton } from '@tumarsoft/ogogo-ui'

const options = reactive({
  mask: '+996 ### ### ###',
  eager: true,
})

const emit = defineEmits(['next'])

const submitPhone = () => {
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
