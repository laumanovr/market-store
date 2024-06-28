<template>
  <div class="main-layout">
    <Header />
    <slot />
    <Footer />
    <MobileMenu />
  </div>
</template>

<script lang="ts" setup>
import Header from '../shared/components/header/Header.vue'
import Footer from '~/shared/components/footer/Footer.vue'
import MobileMenu from '~/shared/components/mobile-menu/MobileMenu.vue'
</script>

<style lang="scss">
@import '~/assets/style/screens.scss';
.main-layout {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px 40px;
  @media #{$lg} {
    padding: 0 16px 16px;
  }
  @media #{$sm} {
    padding: 0 16px 76px;
  }
}
</style>
