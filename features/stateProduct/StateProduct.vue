<template>
  <div class="state-product">
    <slot /> <span v-if="text">{{ text }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text?: string
}

const { text } = defineProps<Props>()
</script>

<style scoped lang="scss">
.state-product {
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.056px;
  list-style: none;
  padding: 11px 16px;
  border-radius: 20px;
}
</style>
