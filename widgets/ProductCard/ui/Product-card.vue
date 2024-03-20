<template>
    <div class="product-card__container">
        <section class="breadcrumbs">
            <Breadcrumbs :items="BreadcrumbsItems"/>
        </section>
        <section class="product-card">
            <div class="product-card__example-photo example-photo" >
                <div class="example-photo__total"><span></span></div>
            </div>
            <div class="product-card__photo photo-cart">
                <div class="photo-cart__like"></div>
                <div class="photo-cart__photo">
                    <img src="" alt="">
                </div>
            </div>
            <div class="product-card__info info-card">
                <div class="info-card__title">
                    <h3>Смартфон Apple iPhone 15 Pro 128 ГБ, Dual: nano SIM + eSIM, титан</h3>
                </div>
                <div class="info-card__grade"></div>
                <div class="info-card__color"></div>
                <div class="info-card__photo"></div>
                <div class="info-card__configuration configuration">
                    <div class="configuration__title"></div>
                    <div class="configuration__info"></div>
                </div>
                <div class="info-card__state state-product">
                    <div class="state-product__title"></div>
                    <div class="state-product__info"></div>
                </div>
                <div class="info-card__description description-product">
                    <div class="description-product__title">

                    </div>
                    <div class="description-product__list">

                    </div>
                </div>
            </div>
            <div class="product-card__stock stock">
                <div class="stock__title"></div>
                <div class="stock__text"></div>
                <div class="stock__user-info user-info">
                    <div class="user-info__account"></div>
                    <div class="user-info__grade"></div>
                </div>
                <div class="stock__basket basket-stock">
                    <div class="basket-stock__added">

                    </div>
                    <div class="basket-stock__add">

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { Breadcrumbs } from '~/shared/components/breadcrumbs'

const BreadcrumbsItems = reactive<{name: string; link: string}[]>([
        {
        name: 'Главная',
        link: 'test'
        },
        {
        name: 'Электроника',
        link: 'test'
        },
        {
        name: 'Мобильные телефоны',
        link: 'test'
        },
        {
        name: 'Смартфоны',
        link: 'test'
        },
        {
        name: 'Apple',
        link: 'test'
        },
        {
        name: 'Смартфон Apple iPhone 15 Pro Max 256Gb Natural Titanium',
        link: 'test'
        }])
// import { reactive } from 'vue';
    // const examplePhoto = reactive([
    //     {
    //         'id': 0,
    //         'url': '_nuxt/assets/images/iphone-img.jpg',
    //         'isActive': true
    //     },
    //     {
    //         'id': 1,
    //         'url': '_nuxt/assets/images/iphone-img.jpg',
    //         'isActive': false
    //     },
    //     {
    //         'id': 2,
    //         'url': '_nuxt/assets/images/iphone-img.jpg',
    //         'isActive': false
    //     },
    //     {
    //         'id': 3,
    //         'url': '_nuxt/assets/images/iphone-img.jpg',
    //         'isActive': false
    //     },
    //     {
    //         'id': 4,
    //         'url': '_nuxt/assets/images/iphone-img.jpg',
    //         'isActive': false
    //     }
    // ])
</script>

<style lang="scss" scoped>
</style>