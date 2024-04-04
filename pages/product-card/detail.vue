<template>
  <div class="product-card__content">
    <DetailCard />
  </div>
</template>

<script lang="ts" setup>
import { DetailCard } from '../../widgets/ProductCard'

definePageMeta({
  layout: 'main',
})
</script>
