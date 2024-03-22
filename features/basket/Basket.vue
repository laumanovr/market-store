<template>
    <div class="basket">
        <div class="basket__price price-basket">
            <div class="price-basket__value">{{ item.price }} сом</div>
            <div v-if="item.discount" class="price-basket__discount"><SBadge :content="`-${item.discount}%`" color="red" is-rounded/></div>
        </div>
        <div v-if="item.previousPrice" class="basket__previous-price">{{ item.previousPrice }} сом</div>
        <div class="basket__shop shop-info">
            <div class="shop-info__logo">
                <img :src="item.logo" alt="">
            </div>
            <div class="shop-info__name">{{ item.name }}</div>

            <div class="shop-info__rating rating-info">
                <div class="rating-info__svg">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z" fill="#FACC15"/>
                    </svg>
                </div>
                <div class="rating-info__value">
                    {{ item.rating }}
                </div>
            </div>
            <div class="shop-info__model">
                •••
            </div>
        </div>
        <div class="basket__btn">
            <Button color="gray" v-if="addedProduct">
                <template v-slot:leftIcon>
                    <svg @click="removeProduct" style="cursor: pointer" width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.00006H15" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
                    {{ addedProduct }}
                <template v-slot:rightIcon>
                    <svg @click="addingProduct" style="cursor: pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1V15" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 8.00006H15" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
            </Button>
            <SButton color="violet" class="w-100" @click="addingProduct">В корзину</SButton>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import { SButton, SBadge } from "@tumarsoft/ogogo-ui";
import Button from '~/shared/components/button/button.vue';

const item:{text:string; price: string; logo: string; name: string; rating: number; discount: number; previousPrice: string} = {
    text: '',
    price: '105 990',
    logo: '_nuxt/assets/images/shop-logo.png',
    name: 'Мой телефон',
    rating: 4.6,
    discount: 15,
    previousPrice: '121 888'
}

const addedProduct = ref(0)

const addingProduct = ():void => {
    addedProduct.value += 1
}

const removeProduct = ():void => {
    if (addedProduct.value !== 0) {
        addedProduct.value -= 1
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .basket {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 24px;
        border-radius: 16px;
        background: $white;
        box-shadow: 0px 12px 32px 0px rgba(40, 43, 48, 0.15);
        &__price{
            display: flex;
            align-items: center;
            height: 35px;
            grid-gap: 8px;
        }
        &__previous-price {
            text-decoration: line-through;
            color: $red-600;
            font-size: 14px;
            font-weight: 500;
            margin: 8px 0 12px 0;
        }
        &__btn {
            display: flex;
            grid-gap: 10px;
        }
    }
    .price-basket {
        &__value {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 32px;
            letter-spacing: 0.24px;
            color: $black;
        }
    }
    .price-basket__discount {
        display: flex;
        align-items: center;
    }
    .price-basket__discount:deep(.badge){
        font-size: 8px;
    }

    .shop-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 20px;
        grid-gap: 8px;
        margin-bottom: 32px;
        &__logo {
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__logo img {
            width: 20px;
            height: 20px;
        }
        &__name {
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            color: $gray-500;
            letter-spacing: 0.048px;
        }
        &__model {
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0px 2.667px;
            background: $gray-150;
            border-radius: 4px;
            color: $gray-400;
            font-size: 10px;
        }
        &__model svg {
            padding: 6px;
        }
    }
    
    .rating-info {
        display: flex;
        align-items: center;
        grid-gap: 8px;
        &__svg {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__value {
            font-size: 12px;
            font-weight: 500;
        }
    }
    .btn-adding svg{
        cursor: pointer;
    }
</style>


