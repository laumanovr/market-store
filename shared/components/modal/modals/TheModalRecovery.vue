<template>
    <BaseModal text="Восстановление" withBackButton>
      <div class="modal">
        <div class="modal__content">
            <div class="modal__text">
                <p>
                    Введите номер телефона или эл. почту, которые вы использовали при регистрации для восстановления пароля
                </p>
            </div>
            <div class="modal__phone phone-field">
                <SInput label="Телефон" width="100%" placeHolder="Телефон"/>
            </div>
          <div class="modal__send">
            <SButton color="violet" size="large" class="">
                Продолжить
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
    SInput
  } from "@tumarsoft/ogogo-ui";
  
  const items = [{ name: "+996", id: "Bishkek" }]
  </script>
  
  
  <style lang="scss" scoped>
  @import "~/assets/style/colors.scss";
  .modal {
    &__send {
      margin-bottom: 8px;
    }
    &__send:deep(.button) {
      width: 100%;
    }
    &__text {
        margin: 12px 0 16px 0;
    }
    &__text p{
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