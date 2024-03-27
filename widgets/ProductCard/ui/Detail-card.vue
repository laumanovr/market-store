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
                    <BaseIcon name="arrowPurple" viewBox="0 0 12 12" class="icon-svg"/>
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
                    <div class="product-detail__wrapper">
                        <div class="product-detail__image">
                            <img src="~/assets/images/iphone-img.jpg" alt="">
                        </div>
                        <div class="product-detail__body">
                            <div class="product-detail__title">
                                <h3>
                                    Смартфон Apple iPhone 15 Pro 128 ГБ, Dual: nano SIM + eSIM, титан
                                </h3>
                            </div>
                            <div class="product-detail__grade">
                                <ProductRating/>
                            </div>
                        </div>
                    </div>
                    <div class="product-detail__basket">
                        <Basket size="small"/>
                    </div>
                </div>
                <div class="detail-card__cont">
                    <div class="detail-card__title">
                    <h3>
                        Описание и характеристики
                    </h3>
                    </div>
                    <div class="detail-card__description description-card">
                        <div class="description-card__title">
                            <h4>
                                Описание
                            </h4>
                        </div>
                        <div class="description-card__text">
                            <p>
                                iPhone 15 Pro Max — король среди смартфонов: огромный экран, мощный процессор и инновационная камера. Передовые технологии и стильный дизайн в одном устройстве.
                                <br/>
                                <br/>
                                iPhone 15 Pro Max оснащен огромным 6,7-дюймовым Super Retina XDR OLED-экраном, который обеспечивает непревзойденное качество изображения. Мощнейший процессор гарантирует плавную и быструю работу в любых сценариях использования. Основная камера с тремя объективами, оптической стабилизацией и функцией “Киноэффект” позволяет снимать фото и видео профессионального качества. Технология Face ID обеспечивает быстрый и безопасный доступ к устройству.
                                <br/>
                                <br/>
                                Большой аккумулятор с поддержкой быстрой зарядки позволяет использовать смартфон в течение всего дня без подзарядки. Прочный корпус с защитой от воды и пыли делает iPhone 15 Pro Max надежным спутником на каждый день. Стильный дизайн дополняет образ этого флагмана. Если вы ищете смартфон, который будет соответствовать вашим высоким требованиям, то iPhone 15 Pro Max станет отличным выбором.
                            </p>
                        </div>
                    </div>
                    <div class="detail-card__detail-description" v-for="item in itemsDetail" :key="item.title">
                        <DetailInfoCard :item="item"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { toFavorites } from '~/widgets/toFavotites'
import Button from "~/shared/components/button/button.vue"
import { ProductRating } from '~/widgets/ProductRating'
import { Basket } from '~/features/basket'
import DetailInfoCard from '~/shared/components/detail-info-card/detail-info-card.vue'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue';

interface ItemsDetail {
    item: {
        title: string,
        items: {
            title: string;
            text: string;
        }[]
    }
}

const itemsDetail = reactive<ItemsDetail[]>([
    {
        title: 'Общие характеристики',
        items: [    
            {title: 'Версия', text: '6.1" (2556x1179) OLED 120 Гц'},
            {title: 'Версия ОС на начало продаж', text: 'IOS 17'},
            {title: 'Тип корпуса', text: 'Классический'},
            {title: 'Материал корпуса', text: 'Титан'},
            {title: 'Степень защиты', text: 'IP68'},
            {title: 'Количество SIM-карт', text: 'Dual: nano SIM + eSIM'},
            {title: 'Вес', text: '221 г'},
            {title: 'Размеры (ШxВxТ)', text: '76.7x159.9x8.25 мм'}
        ]
    },
    {
        title: 'Экран',
        items: [
            {title: 'Дисплей', text: '6.7" (2796x1290), 2K QHD, OLED'},
            {title: 'Особенности экрана', text: 'Dynamic Island, сенсорный экран, устойчивое к царапинам стекло, цветной экран'},
            {title: 'Число пикселей на дюйм (PPI)', text: '460'},
            {title: 'Частота обновления экрана', text: '120 Гц'}
        ]
    },
    {
        title: 'Мультимедийные возможности',
        items: [
            {title: 'Функции камеры', text: 'автофокусировка, оптическая стабилизация, основная камера, тыловая вспышка, фронтальная камера'},
            {title: 'Количество основных (тыловых) камер', text: '3'},
            {title: 'Разрешение основной камеры', text: '48 МП'},
            {title: 'Материал корпуса', text: 'Титан'},
            {title: 'Характеристики основной камеры', text: '8 МП: 24 мм, диафрагма ƒ/1,78, оптическая стабилизация изображения второго поколения со сдвигом матрицы, 100% фокусных пикселей, поддержка фотографий сверхвысокого разрешения (24 и 48 Мп)'},
            {title: 'Характеристики основной камеры 2', text: 'сверхширокоугольная, 12 МП: 13 мм, диафрагма ƒ/2,2 и угол обзора 120°, 100% фокусных пикселей'},
            {title: 'Характеристики основной камеры 3', text: 'телефото, 12 МП: 48 мм, диафрагма ƒ/1,78, оптическая стабилизация изображения второго поколения со сдвигом матрицы, 100% фокусных пикселей'},
            {title: 'Макс. разрешение видео', text: '3840x2160'},
            {title: 'Видеосъемка (основная камера)', text: '4K с частотой 24, 25, 30, или 60 кадров/с; 1080p HD 25, 30, или 60 кадров/с; режимы замедленной съемки: HD-видео 1080р c частотой 120 кадров/﻿с или 240 кадров/﻿с'},
            {title: 'Разрешение фронтальной камеры', text: '12 МП'},
            {title: 'Выход на наушники', text: '6USB Type-C'}
        ]
    },
    {
        title: 'Связь',
        items: [
            {title: 'Стандарт связи', text: 'автофокусировка, оптическая стабилизация, основная камера, тыловая вспышка, фронтальная камера'},
            {title: 'Количество основных (тыловых) камер', text: '3G, 4G LTE, 5G'},
            {title: 'Беспроводные интерфейсы', text: 'Bluetooth, NFC, Wi-Fi'},
            {title: 'Стандарт Wi-Fi', text: '802.11ax'},
            {title: 'Стандарт Bluetooth', text: '5.3'},
            {title: 'Геопозиционирование', text: 'BeiDou, GPS, Galileo, NavIC, QZSS, iBeacon, ГЛОНАСС'},
            {title: 'Поддержка NFC', text: 'есть'}
        ]
    },
    {
        title: 'Память и процессор',
        items: [
            {title: 'Процессор', text: 'Apple A17 Pro'},
            {title: 'Характеристики процессора', text: '6-ядерный CPU: 2 производительных и 4 энергоэффективных ядра; 6-ядерный Apple GPU; 16-ядерный сопроцессор Neural Engine'},
            {title: 'Встроенная память', text: '512 ГБ'},
            {title: 'Слот для карт памяти', text: 'нет'}
        ]
    },
    {
        title: 'Питание',
        items: [
            {title: 'В режиме воспроизведения видео', text: '29 ч'},
            {title: 'Время заряда', text: 'зарядка до 50% за 30 минут 17 с адаптером мощностью 20 Вт или выше'},
            {title: 'Тип разъема для зарядки', text: 'USB-C'},
            {title: 'Функции зарядки', text: 'беспроводная зарядка, быстрая зарядка'},
            {title: 'Аккумулятор', text: 'несъемный'},
        ]
    },
    {
        title: 'Другие функции',
        items: [
            {title: 'Особенности', text: '6акселерометр, барометр, гироскоп, датчик освещенности, датчик приближения, компас, стереодинамики'},
            {title: 'Аутентификация', text: 'разблокировка по лицу'},
        ]
    },
    {
        title: 'Дополнительная информация',
        items: [
            {title: 'Заводская комплектация', text: 'смартфон Apple iPhone 15 Pro Max, кабель USB‑C, документация'},
            {title: 'Дата старта продаж', text: '2023-09-22'},
        ]
    },
    {
        title: 'Габариты и вес с учетом упаковки',
        items: [
            {title: 'Габариты транспортной упаковки', text: '18х3.15х9.60 см'},
            {title: 'Вес в транспортной упаковке', text: '0.403 кг'}
        ]
    }
])

const onFavorites = ():void => {
    alert('onFavorites')
}

const onShare = ():void => {
    alert('onShare')
}

</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .icon-svg {
        transform: rotate(180deg);
        margin-right: 8px;
        width: 16px;
        height: 16px;
    }
    .detail-card{
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
        &__title h3{
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.24px;
        }
        &__title{
            margin-top: 24px;
        }
        &__cont{
            max-width: 893px;
        }
    }

    .product-detail {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 34px;
        &__wrapper {
            display: flex;
            align-items: center;
        }
        &__body {
            margin-left: 24px;
        }
        &__image {
            position: relative;
            width: 70px;
            height: 70px;
            padding: 2px;
            & img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__title {
            margin-bottom: 8px;
        }
        &__title h3{
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.28px;
            margin: 0;
        }
    }

    .description-card {
        &__title h4{
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.224px;
        }
        &__text {
            font-size: 16px;
            font-weight: 500;
        }
    }
</style>