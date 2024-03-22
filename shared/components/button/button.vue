<script lang="ts" setup>
import { useSlots } from 'vue';

interface Props {
  color?: 'gray';
  decoration?: 'default' | 'outline' | 'none';
  disabled?: boolean;
}

const props = defineProps<Props>();
const {
  color = 'gray',
  decoration = 'default',
  disabled = false,
} = props;

const classes = ['button', `decoration_${decoration}`, `color_${color}`];
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"></slot>
    <div class="button__text">
        <slot></slot>
    </div>
    <slot name="rightIcon"></slot>
  </button>
</template>

<style scoped lang="scss">
@import "~/assets/style/colors.scss";
.button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border: none;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  cursor: auto;
  &__text{
    width: 50px;
    text-align: center;
  }
}

.button.color_primary { 
  background: $gray-150;
}

.button.color_primary .button__text {
  color: $black;
}

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}
</style>