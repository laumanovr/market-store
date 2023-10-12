<template>
  <div class="layout">
    <div class="home">
      <div class="home-data">
        <div class="home-title">
          <h1>Ogogo – Ваша площадка для <br />вау-покупок</h1>
        </div>
        <div class="home-text">
          <p>
            Скоро наш новый сервис станет доступным для вас! Следите за нашими
            обновлениями и готовьтесь к захватывающим покупкам в рассрочку!
          </p>
        </div>
      </div>
      <div class="home-banner"><img :src="homeBanner" alt="Home banner" /></div>
    </div>
    <div class="links">
      <div class="link">
        <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink to="/terms-conditions">Terms Conditions</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import homeBanner from "../public/images/home-banner.png";
export default {
  data() {
    return {
      homeBanner,
    };
  },
};
</script>
