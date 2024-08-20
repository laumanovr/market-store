<script lang="ts" setup>
interface Props {
  color?: 'gray'
  decoration?: 'default' | 'outline' | 'none'
  disabled?: boolean
}
// TODO: delete this component

const props = defineProps<Props>()
const {
  color = 'gray' | 'violet',
  decoration = 'default',
  disabled = false,
} = props

const classes = ['button', `decoration_${decoration}`, `color_${color}`]
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
@import '~/assets/style/colors.scss';
.button {
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 8px;
  text-align: center;
  white-space: nowrap;
  padding: 0;
  cursor: pointer;
  &__text {
    text-align: center;
  }
}

.button.color_primary {
  background: $gray-150;
}

.button.color_primary .button__text {
  color: $black;
}

.button.color_violet {
  background: $violet-600;
}

.button.color_violet .button__text {
  color: $violet-600;
}

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}
</style>
