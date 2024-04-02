<template>
    <BaseModal text="Адрес доставки" header class="modal-map">
        <div class="modal">
            <div class="modal__container">
                <div class="modal__content">
                    <div class="modal__add-address">
                        <div>
                            <div class="modal__title">
                                <switchButton
                                    title="Способ доставки"
                                    btnlLeft="Наличными"
                                    btnRight="Картой на сайте"
                                    @onSwitch="methodPayment"
                                />
                            </div>
                            <div class="modal__street">
                                <SInput placeHolder="Улица, номер дома"/>
                            </div>
                            <div class="modal__house">
                                <SInput placeHolder="Номер д."/>
                                <SInput placeHolder="Домофон"/>
                                <SInput placeHolder="Этаж"/>
                            </div>
                            <div class="modal__comments">
                                <STextArea placeHolder="Комментарии"/>
                            </div>
                        </div>
                        <div class="modal__btn">
                            <SButton color="violet" size="large">Привезсти сюда</SButton>
                        </div>
                    </div>
                    <div class="modal__map">
                        <img src="~/assets/images/Map.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </BaseModal>
</template>
  
<script setup lang="ts">
import BaseModal from '../BaseModal.vue'
import switchButton from '~/shared/components/switch-button/switch-button.vue';
import { SButton, SInput , STextArea } from "@tumarsoft/ogogo-ui";

const paymentMethod = ref('cash')

const methodPayment = (el:number):void => {
    if(el == 0) {
        paymentMethod.value = 'cash'
    } else if (el == 1) {
        paymentMethod.value = 'card'
    }
}


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
&__add-address {
    padding: 24px;
    z-index: 5;
    background-color: $white;
    border-radius: 16px 0px 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
&__title h3{
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.224px;
}
&__content {
    height: 560px;
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    position: relative;
}
&__map {
    width: 100%;
}
&__map img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
}
&-map {
    width: 1000px;
}
&-map:deep(.baseModal__content) {
    padding: 0;
    width: 1000px;
}
&__house {
    display: flex;
    align-items: center;
    grid-gap: 8px;
    margin: 16px 0;
}
&__street {
    margin: 16px 0;
}
&__street:deep(.input-container) {
    width: 100%;
}
&__comments:deep(.textarea-container) {
    width: 100%;
}
&__comments:deep(textarea.textarea-field) {
    width: 100% !important;
}
&__btn:deep(.button) {
    width: 100%;
}
}
</style>