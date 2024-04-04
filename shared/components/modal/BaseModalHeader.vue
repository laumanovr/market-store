<template>
  <div class="modal-header">
    <div class="modal-header__icon-back">
      <BaseIcon
        v-if="withBackButton"
        name="arrow"
        viewBox="0 0 11 12"
        class="icon-svg"
        @click="$emit('back')"
      />
    </div>
    <div class="modal-header__title">
      <h4>
        {{ text }}
      </h4>
    </div>
    <div class="modal-header__icon-close">
      <BaseIcon
        name="close"
        viewBox="1 -1 22 24"
        class="icon-close"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseIcon from '~/shared/components/icons/BaseIcon.vue'
interface Props {
  text: string
  withBackButton: boolean
}

const emit = defineEmits(['back', 'close'])
const { text, withBackButton } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.icon-svg {
  width: 24px;
  height: 24px;
  transform: rotate(180deg);
  cursor: pointer;
  &:deep(path) {
    stroke-width: 1;
  }
}
.icon-close {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.modal-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  &__icon-back {
    text-align: start;
  }
  &__icon-close {
    text-align: end;
  }
  &__title h4 {
    text-align: center;
    margin: 0 0 3px 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.28px;
  }
}
</style>
