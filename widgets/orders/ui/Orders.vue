<template>
  <div class="orders-container">
    <h2 class="head-title">Заказы</h2>
    <STabs>
      <STabItem>Все</STabItem>
      <STabItem>В работе</STabItem>
      <STabItem>Ожидают оплаты</STabItem>
      <STabItem>Выполненные</STabItem>
      <STabItem>Отмененные</STabItem>
    </STabs>
  </div>
</template>

<script lang="ts" setup>
import { STabs, STabItem } from "@tumarsoft/ogogo-ui";
</script>

<style lang="scss"></style>
