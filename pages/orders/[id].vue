<template>
  <div class="order-detail-container">
    <OrderDetail />
  </div>
</template>

<script lang="ts" setup>
import { OrderDetail } from "~/widgets/orders";
definePageMeta({
  layout: "main",
});
</script>
