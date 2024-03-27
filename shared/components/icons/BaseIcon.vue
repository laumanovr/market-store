<template>
    <svg
        :class="$attrs.class || 'icon'"
        :viewBox="viewBox || '0 0 16 16'"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-html="path"
    >
    </svg>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import icons from './icons'

interface Props {
    name: keyof typeof icons;
    viewBox?: string;
    stroke?: string;
}

const { name, viewBox, stroke } = defineProps<Props>()

const path = ref(icons[name])
</script>

<style lang="scss" scoped>
    .icon {
        width: 16px;
        height: 16px;
    }
</style>