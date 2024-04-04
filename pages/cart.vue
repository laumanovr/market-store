<template>
  <div class="cart-content">
    <Cart />
  </div>
</template>

<script lang="ts" setup>
import { Cart } from '~/widgets/cart'
definePageMeta({
  layout: 'main',
})
</script>
