<template>
    <div class="detail-card">
        <div class="detail-card__nav">
            <Button
                decoration="none"
                color="violet"
                class="btn"
                @click="$router.back()"
            >
                <template v-slot:leftIcon>
                    <svg class="detail-card__icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 1.5L7.89496 5.75492C7.92825 5.78708 7.95467 5.82528 7.9727 5.86733C7.99072 5.90938 8 5.95447 8 6C8 6.04553 7.99072 6.09062 7.9727 6.13267C7.95467 6.17472 7.92825 6.21292 7.89496 6.24508L3.5 10.5" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
                К товару
            </Button>
            <toFavorites
                @onFavorites="onFavorites"
                @onShare="onShare"
            />
        </div>
        <div class="detail-card__main">
            <div class="detail-card__content">
                <div class="detail-card__product product-detail">
                    <div class="product-detail__image">

                    </div>
                    <div class="product-detail__body">
                        <div class="product-detail__title"></div>
                        <div class="product-detail__grade"></div>
                    </div>
                    <div class="product-detail__basket">

                    </div>
                </div>
                <div class="detail-card__title"></div>
                <div class="detail-card__description"></div>
                <div class="detail-card__detail-description"></div>
            </div>
        </div>
    </div>
    <div>

    </div>
</template>

<script setup lang="ts">
import { toFavorites } from '~/widgets/toFavotites'
import Button from "~/shared/components/button/button.vue"

const onFavorites = ():void => {
    alert('onFavorites')
}

const onShare = ():void => {
    alert('onShare')
}

</script>

<style lang="scss" scoped>
    .detail-card{
        &__icon {
            transform: rotate(180deg);
            margin-right: 8px;
            height: 30px;
            display: flex;
            align-items: center
        }
        &__nav {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__nav:deep(.button) {
        justify-content: flex-start;
        font-size: 14px;
        font-weight: 600;
        }
    }
</style>