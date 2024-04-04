<template>
  <div class="grade">
    <div class="grade__number number-grade">
      <div class="number-grade__image">
        <BaseIcon name="star" viewBox="0 0 16 16" />
      </div>
      <div class="number-grade__number">4.6</div>
    </div>
    <div class="grade__total total-grade">
      <div class="total-grade__number">28</div>
      <div class="total-grade__text">оценок</div>
    </div>
    <div class="spase-grade">•</div>
    <div class="grade__review review-grade">
      <div class="review-grade__number">14</div>
      <div class="review-grade__text">отзыв</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.grade {
  display: flex;
  align-items: center;
  &__number {
    display: flex;
    align-items: center;
  }
  &__total {
    display: flex;
    align-items: center;
  }
  &__review {
    display: flex;
    align-items: center;
  }
}

.total-grade {
  &__number {
    margin: 0 4px 0 8px;
  }
  &__text {
    display: flex;
    justify-content: center;
  }
}

.total-grade,
.review-grade,
.spase-grade {
  color: $gray-500;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.spase-grade {
  margin: 0 4px;
}

.review-grade {
  &__number {
    margin-right: 4px;
  }
}

.number-grade {
  &__image {
    margin-right: 8px;
    display: flex;
  }
  &__image svg {
    width: 16px;
    height: 16px;
    margin-bottom: 2px;
  }
  &__number {
    color: $black;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  }
}
</style>
