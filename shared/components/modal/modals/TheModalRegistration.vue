<template>
    <BaseModal text="Регистрация">
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
          <div class="modal__agreement">
            <div class="modal__checkbox">
                <SCheckbox>
                    Нажимая на кнопку «Продолжить», вы соглашаетесь с <span style="text-decoration: underline;">политикой</span> обработки персональных данных и <span style="text-decoration: underline;">правилами</span> пользования сервисом.
                </SCheckbox>
            </div>
          </div>
          <div class="modal__next-btn">
            <SButton color="violet" size="large">
                Продолжить
            </SButton>
          </div>
          <div class="modal__login">
            <SButton color="gray" size="large">
                Войти
            </SButton>
          </div>
        </div>
      </div>
    </BaseModal>
  </template>
  
  <script setup lang="ts">
  import BaseModal from '../BaseModal.vue'
  import {
    SButton,
    SInput,
    SSelect,
    SCheckbox
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