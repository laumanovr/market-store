<template>
    <div class="toFavorites">
        <div class="toFavorites__container">
            <div class="toFavorites__favorite">
                <Button
                    decoration="none"
                    class="btn"
                    @click="$emit('onFavorites')"
                >
                    <template v-slot:leftIcon>
                        <SIconRender
                        name="FavoriteIcon"
                        color="black"
                        class="toFavorites__icon"
                        />
                    </template>
                    В избранное
                </Button>
            </div>
            <div class="toFavorites__share">
                <Button
                    decoration="none"
                    class="btn"
                    @click="$emit('onShare')"
                >
                    <template v-slot:leftIcon>
                        <svg class="toFavorites__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none">
                            <path d="M15.44 7.89999C19.04 8.20999 20.51 10.06 20.51 14.11V14.24C20.51 18.71 18.72 20.5 14.25 20.5H7.73998C3.26998 20.5 1.47998 18.71 1.47998 14.24V14.11C1.47998 10.09 2.92998 8.23999 6.46998 7.90999" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 14V2.62" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.3499 4.85L10.9999 1.5L7.6499 4.85" stroke="#141619" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </template>
                    Поделиться
                </Button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import Button from "~/shared/components/button/button.vue"
    import { SIconRender } from "@tumarsoft/ogogo-ui";

    const emit = defineEmits(['onFavorites', 'onShare'])
</script>

<style scoped lang="scss">
    .btn:deep(.button__text) {
        font-size: 14px;
        font-weight: 500;
    }
    .toFavorites {
        &__container {
            display: flex;
            align-items: center;
            grid-gap: 16px;
        }
        &__favorite, &__share {
            width: 128px;
        }
    }
    .toFavorites__icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
</style>