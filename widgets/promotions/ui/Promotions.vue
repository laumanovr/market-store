<template>
  <div class="promotions-container">
    <div class="promotions" v-for="item in 5" :key="item">
      <div class="promotions__container">
        <div class="promotions__content">
          <div class="promotions__image">
            <img src="~/assets/images/banner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '~/assets/style/screens.scss';
.promotions-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 15px;
  margin-top: 36px;
  @media #{$sm} {
    width: 100%;
    overflow-x: auto;
  }
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
}
</style>
