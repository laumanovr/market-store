<template>
  <div class="promotions">
    <div class="promotions__container">
      <div class="promotions__content">
        <div class="promotions__image">
          <img src="~/assets/images/banner.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.promotions {
  &__image {
    min-width: 158px;
    max-width: 260px;
    min-height: 158px;
    max-height: 260px;
  }
  &__image img {
    width: 100%;
    height: 100%;
  }
}
</style>
