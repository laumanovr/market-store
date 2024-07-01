<template>
  <div class="layout">
    <NuxtLink :to="localePath('/')" class="link">{{
      $t("label-8a57f167-1684-44e7-a316-3386f45ba042")
    }}</NuxtLink>
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
  title: t("label-97e88d2a-3135-4c02-8236-a0fbf4b06cf5") + " | ogogo.kg",
});

const { data } = await useAsyncData("", () => {
  if (locale.value !== "ru") {
    return queryContent(`offer.${locale.value}`).findOne();
  }
  return queryContent("offer").findOne();
});

watch(
  () => locale.value,
  (value: string) => {
    router.replace(localePath("offer", value));
  }
);
</script>
