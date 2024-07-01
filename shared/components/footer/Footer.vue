<template>
  <div class="footer">
    <p class="footer__contact">ОсОО "ОГОГО"</p>
    <p class="footer__contact">+996 509 667799</p>
    <p class="footer__contact">support@ogogo.kg</p>
    <p class="footer__contact">
      Наш адрес: г.Бишкек, Проспект Чынгыза Айтматова, 95/2
    </p>
    <div class="footer__actions">
      <div>
        <a href="https://wa.me/+996509667799" target="_blank" class="whatsapp">
          Написать в WhatsApp
        </a>
      </div>
      <a href="https://t.me/ermekimanbekov" target="_blank" class="telegram">
        Написать в Telegram
      </a>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-30">
      <NuxtLink class="footer__link" to="/">О нас</NuxtLink>
      <NuxtLink class="footer__link" to="/">Контакты</NuxtLink>
      <NuxtLink class="footer__link" to="/offer">Оферты</NuxtLink>
      <NuxtLink class="footer__link" to="/partner">Стать партнёром</NuxtLink>
      <NuxtLink class="footer__link" to="/privacy-policy">
        Политика конфиденциальности
      </NuxtLink>
      <NuxtLink class="footer__link" to="/terms-conditions">
        Пользовательское соглашение
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.footer {
  padding: 30px 0;
  &__contact {
    color: #808080;
  }
  &__actions {
    margin-bottom: 30px;
    a {
      border: 0;
      border-radius: 6px;
      color: #fff;
      display: inline-block;
      padding: 10px 12px;
      text-decoration: none;
      &.whatsapp {
        background: #008069;
        margin: 20px 0 10px;
      }
      &.telegram {
        background: #0e8ed4;
      }
    }
  }
  &__link {
    color: #6e6e6e;
    text-decoration: none;
  }
}
</style>
