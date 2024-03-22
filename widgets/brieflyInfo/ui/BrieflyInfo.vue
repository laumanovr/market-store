<template>
    <div class="info-briefly">
        <div class="info-briefly__list" v-for="item in items" :key='item.title'>
            <div class="info-briefly__title">{{ item.title }}</div>
            <div class="info-briefly__text">{{ item. text}}</div>
        </div>
        <div class="info-briefly__btn">
            <ButtonDetailed
            text='Все характеристики и описание'
            @handlerLink="handlerLink"/>
        </div>
        <!-- <SIconRender name="FavoriteIcon" color="gray" /> -->
    </div>
</template>

<script lang="ts" setup>
import { ButtonDetailed } from '~/shared/components/button-detailed';
// import { SIconRender } from "@tumarsoft/ogogo-ui";
    interface Props {
        items: {
            id: number,
            title: string,
            text: string 
        }[]
    }

    const { items } = defineProps<Props>()

    const handlerLink = ():void => {
        alert('Страница: Все характеристики и описание')
    }

</script>

<style lang="scss" scoped>
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
            color: var(--gray-500)
        }
        &__text {
            color: var(--black)
        }
    }
</style>