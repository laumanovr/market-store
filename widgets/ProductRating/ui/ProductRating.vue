<template>
    <div class="grade">
        <div class="grade__number number-grade">
            <div class="number-grade__image">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z" fill="#FACC15"/>
                </svg>
            </div>
            <div class="number-grade__number">
                4.6
            </div>
        </div>
        <div class="grade__total total-grade">
            <div class="total-grade__number">
                28
            </div>
            <div class="total-grade__text">
                оценок
            </div>
        </div>
        <div class="spase-grade">•</div>
        <div class="grade__review review-grade">
            <div class="review-grade__number">
                14
            </div>
            <div class="review-grade__text">
                отзыв
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped >
@import "~/assets/style/colors.scss";
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

.total-grade, .review-grade, .spase-grade {
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