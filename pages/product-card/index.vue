<template>
  <div class="product-card__content">
      <ProductCard/>
  </div>
</template>

<script lang="ts" setup>
import { ProductCard } from "~/widgets/ProductCard";

definePageMeta({
layout: "main"
});
</script>