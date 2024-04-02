<template>
    <BaseModal text="Адрес доставки" header class="modal-add-address">
      <div class="modal">
        <div class="modal__content">
          <div class="modal__title">
            <h3>Адрес доставки</h3>
          </div>
          <div class="modal__container">
            <div class="modal__list">
              <AddressList isActive/>
              <AddressList/>
              <AddressList/>
              <AddressList/>
            </div>
          </div>
          <div class="modal__btn">
            <SButton color="violet" size="large">Привезсти сюда</SButton>
            <div class="modal__btn-add-address" @click="$emit('handlerOpenMap')">
              <Button color="gray" decoration="none">
                  <template v-slot:leftIcon>
                      <BaseIcon name="plus" viewBox="0 0 20 15" class="icon-svg"/>
                  </template>
                  Добавить новый
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  </template>
  
  <script setup lang="ts">
  import BaseModal from '../BaseModal.vue'
  import AddressList from '~/shared/components/addressList/addressList.vue';
  import Button from '~/shared/components/button/button.vue';
  import BaseIcon from '~/shared/components/icons/BaseIcon.vue';
  import { SButton} from "@tumarsoft/ogogo-ui";
  



  </script>
  
  <style lang="scss" scoped>
  @import "~/assets/style/colors.scss";
  .icon-svg {
    width: 20px;
    height: 20px;
    &:deep(path){
        stroke-width: 1;
    }
}

  .modal{
    &__title h3{
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.224px;
    }
    &__title {
      margin-bottom: 24px;
    }
    &__btn-add-address {
      border: 1px solid $gray-200;
      padding: 16px 0;
      border-radius: 8px;
      width: 272px;
      cursor: pointer;
    }
    &__btn:deep(.button) {
      width: 272px;
    }
    &__container {
      max-height: 300px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.48);
        border-radius: 2px;
      }
      &::-webkit-scrollbar-track {
        background-color: none;
      }
    }
    &-add-address:deep(.baseModal__content) {
      padding: 24px 7px 24px 16px;
      width: 670px;
    }
    &-add-address {
      width: 670px;
    }
    &__btn {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-gap: 8px;
      margin-top: 24px;
    }
    &__list {
      margin-right: 5px;
    }
  }
  </style>