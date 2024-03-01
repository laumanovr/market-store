<template>
  <div class="layout">
    <NuxtLink :to="localePath('/')" class="link">
      {{ $t("label-8a57f167-1684-44e7-a316-3386f45ba042") }}
    </NuxtLink>
    <div class="header">
      <div class="header-data">
        <div class="header-title">
          <h1>{{ $t("label-c475f5ba-f9e1-4d94-aca1-d41d7d90849f") }}</h1>
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
const { t, locale } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

useHead({
  title: t("label-c475f5ba-f9e1-4d94-aca1-d41d7d90849f") + " | ogogo.kg",
});

const { data } = await useAsyncData("", () => {
  if (locale.value === "en") {
    return queryContent("terms-conditions.en").findOne();
  }
  return queryContent("terms-conditions").findOne();
});

watch(
  () => locale.value,
  (value) => {
    router.replace(localePath("terms-conditions", value));
  }
);
</script>
