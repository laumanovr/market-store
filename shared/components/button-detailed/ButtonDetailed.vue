<template>
    <div class="btn-detailed">
        <div class="btn-detailed__wrapper">
            <button class="btn" @click="$emit('handlerLink')">{{ text }}</button>
        </div>
        <div class="btn-detailed__svg" @click="$emit('handlerLink')">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 1.5L7.89496 5.75492C7.92825 5.78708 7.95467 5.82528 7.9727 5.86733C7.99072 5.90938 8 5.95447 8 6C8 6.04553 7.99072 6.09062 7.9727 6.13267C7.95467 6.17472 7.92825 6.21292 7.89496 6.24508L3.5 10.5" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        text: string
    }

    

    const { text } = defineProps<Props>()
    const emit = defineEmits(['handlerLink']);
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .btn-detailed {
        height: 34px;
        display: flex;
        align-items: center;
        grid-gap: 8px;
            & .btn {
            border: none;
            outline: none;
            color: $violet-600;
            background-color: transparent;
            padding: 0;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.056px;
            cursor: pointer;
        }
        &__wrapper {
            display: flex;
            align-items: center;
        }
        &__svg {
            cursor: pointer;
        }
    }
</style>