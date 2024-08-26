<template>
  <BaseModal text="Адрес доставки" header class="modal-add-address">
    <div class="modal">
      <div class="modal__content">
        <div class="modal__title">
          <h3>Адрес доставки</h3>
        </div>
        <div class="modal__container">
          <div class="modal__list">
            <AddressList isActive />
            <AddressList />
            <AddressList />
            <AddressList />
          </div>
        </div>
        <div class="modal__btn">
          <SButton type="secondary">Привезти сюда</SButton>
          <div class="modal__btn-add-address">
            <SButton type="secondary" @click="$emit('handlerOpenMap')">
              <SIconRender name="plus" class="s-mr-2" />
              Добавить новый
            </SButton>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '../BaseModal.vue'
import AddressList from '~/shared/components/addressList/addressList.vue'
import { SButton, SIconRender } from '@tumarsoft/ogogo-ui'
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';

.modal {
  &__title h3 {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.224px;
  }
  &__title {
    margin-bottom: 24px;
  }
  &__btn-add-address {
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
