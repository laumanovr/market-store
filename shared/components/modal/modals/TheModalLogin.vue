<template>
  <BaseModal text="Вход">
    <div class="modal">
      <div class="modal__content">
        <div class="modal__phone phone-field">
          <div class="phone-field__code">
            <SSelect :items="items" v-bind="args" showValue="name" getValue="id" placeHolder="+996"/>
          </div>
          <div class="phone-field__number">
            <SInput width="100%" placeHolder="Введите номер"/>
          </div>
        </div>
        <div class="modal__password">
          <SInput label="Пароль" width="100%" placeHolder="Пароль"/>
        </div>
        <div class="modal__reset-password">
          <span>Забыли пароль?</span>
        </div>
        <div class="modal__login">
          <SButton color="violet" size="large" class="">
            Войти
          </SButton>
        </div>
        <div class="modal__registration">
          <SButton color="gray" size="large" class="">
            Зарегистрироваться
          </SButton>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '../BaseModal.vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue';
import {
  SButton,
  SInput,
  SSelect
} from "@tumarsoft/ogogo-ui";

const items = [{ name: "+996", id: "Bishkek" }]
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
.phone-field {
  display: grid;
  grid-template-columns: 0.45fr 1fr;
  grid-gap: 8px;
  margin-top: 20px;
  &__code:deep(input){
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
</style>