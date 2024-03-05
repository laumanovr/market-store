<template>
  <div class="layout">
    <div class="main-header">
      🌐
      <select class="lang" :value="locale" @input="onLocaleUpdate">
        <option value="ru" :selected="'ru' === locale">Рус</option>
        <option value="en" :selected="'en' === locale">Eng</option>
      </select>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const router = useRouter();

function onLocaleUpdate(event: Event) {
  const target = event.target as HTMLSelectElement;
  const value = target.value;
  router.replace(switchLocalePath(value));
}

useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-Y134PJRWPV",
    },
    {
      innerHTML:
        "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Y134PJRWPV');",
    },
  ],
});
</script>
