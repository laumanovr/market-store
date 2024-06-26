<template>
  <div class="main-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '../shared/components/header/Header.vue'
import Footer from '~/shared/components/footer/Footer.vue'
</script>

<style>
.main-layout {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px 40px;
}
</style>
