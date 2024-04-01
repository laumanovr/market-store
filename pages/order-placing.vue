<template>
    <div class="cart-content">
      <OrderPlacing />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { OrderPlacing } from "~/widgets/OrderPlacing";
  definePageMeta({
    layout: "main",
  });
  </script>
  