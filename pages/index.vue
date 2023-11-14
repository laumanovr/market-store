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
        <NuxtLink to="/privacy-policy">Политика конфиденциальности</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink to="/terms-conditions">Пользовательское соглашение</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Главная | ogogo.kg",
});
</script>
