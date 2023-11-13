<template>
  <div class="layout">
    <NuxtLink to="/">Назад</NuxtLink>
    <div class="header">
      <div class="header-data">
        <div class="header-title">
          <h1>Пользовательское соглашение</h1>
        </div>
        <div class="header-description">
          <p>12.10.23</p>
        </div>
      </div>
    </div>
    <div class="body">
      <ContentRenderer v-if="data" :value="data">
        <ContentRendererMarkdown :value="data" />
      </ContentRenderer>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Пользовательское соглашение | ogogo.kg",
});
const { data } = await useAsyncData("", () =>
  queryContent("terms-conditions").findOne(),
);
</script>
