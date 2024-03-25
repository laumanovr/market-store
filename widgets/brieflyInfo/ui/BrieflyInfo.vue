<template>
    <div class="info-briefly">
        <div class="info-briefly__list" v-for="item in items" :key='item.title'>
            <div class="info-briefly__title">{{ item.title }}</div>
            <div class="info-briefly__text">{{ item. text}}</div>
        </div>
        <div class="info-briefly__btn">
            <Button
                decoration="none"
                color="violet"
                class="btn"
                @click="$emit('handlerLink')"
            >
                <template v-slot:rightIcon>
                    <svg class="info-briefly__icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 1.5L7.89496 5.75492C7.92825 5.78708 7.95467 5.82528 7.9727 5.86733C7.99072 5.90938 8 5.95447 8 6C8 6.04553 7.99072 6.09062 7.9727 6.13267C7.95467 6.17472 7.92825 6.21292 7.89496 6.24508L3.5 10.5" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </template>
                Все характеристики и описание
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from "~/shared/components/button/button.vue"
    interface Props {
        items: {
            id: number,
            title: string,
            text: string 
        }[]
    }

    const { items } = defineProps<Props>()
    const emit = defineEmits(['handlerLink'])

</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .info-briefly {
        &__list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px;
            margin-bottom: 16px;  
        }
        &__title {
            color: $gray-500;
        }
        &__text {
            color: $black;
        }
        &__btn:deep(.button) {
        justify-content: flex-start;
        }
        &__btn:deep(.button__text) {
        margin-bottom: 2px;
        }
        &__icon {
            margin-left: 8px;
            height: 30px;
            display: flex;
            align-items: center;
        }
    }
</style>