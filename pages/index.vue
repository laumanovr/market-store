<template>
  <div>
    <div class="home">
      <div class="home-data">
        <div class="home-title">
          <h1>{{ $t("label-ca682b89-9225-4285-89a4-79e7ff78faea") }}</h1>
        </div>
        <div class="home-text">
          <p>
            {{ $t("label-1308ae68-8618-44af-a8d0-e5d3157e2efa") }}
          </p>
        </div>
      </div>
      <div class="home-banner">
        <img src="~/assets/images/home-banner.png" alt="Home banner" />
      </div>
    </div>
    <div class="home-info">
      <div>LLC OGOGO</div>
      <div>+996 500 852007</div>
      <div>kachikeev@ogogo.kg</div>
    </div>
    <div class="links">
      <div class="link">
        <NuxtLink :to="localePath('/privacy-policy')">{{
          $t("label-97e88d2a-3135-4c02-8236-a0fbf4b06cf5")
        }}</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink :to="localePath('/terms-conditions')">{{
          $t("label-c475f5ba-f9e1-4d94-aca1-d41d7d90849f")
        }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();

const { t } = useI18n();
useHead({
  title: t("label-5977768a-1889-4ee3-9a99-d69bf76ae42a") + " | ogogo.kg",
});
</script>
