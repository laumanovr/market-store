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
                    <BaseIcon name="arrowPurple" viewBox="0 0 12 12" class="icon-svg"/>
                </template>
                Все характеристики и описание
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from "~/shared/components/button/button.vue"
import BaseIcon from '~/shared/components/icons/BaseIcon.vue';
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
    .icon-svg {
        margin-left: 8px;
        width: 12px;
        height: 12px;
    }
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
    }
</style>