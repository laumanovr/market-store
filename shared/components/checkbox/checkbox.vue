<template>
  <label :for="uuidGenerator" class="checkbox-container" v-bind="$attrs">
    <div class="checkbox-label">
      <input
        :id="uuidGenerator"
        type="checkbox"
        name="checkbox"
        :disabled="props.isDisabled"
        v-model="internalValue"
        :data-testid="dataTestid"
        v-bind="attrsWithoutClass"
      />
      <span
        class="checkmark"
        data-testid="checkbox-span"
        :class="{ disabled: props.isDisabled, rounded: props.isRounded }"
      />
    </div>
    <span class="checkbox-title" :style="width ? { width: width } : null"
      ><slot></slot
    ></span>
  </label>
</template>

<script lang="ts" setup>
// TODO: delete this component
import { computed, ref, useAttrs, watch } from 'vue'
import { v4 as uuid } from 'uuid'

const emit = defineEmits(['onChange', 'update:modelValue'])

const attrs = useAttrs()

const props = defineProps({
  isChecked: {
    type: [Boolean, Array, Object],
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isRounded: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '100%',
  },
  dataTestid: {
    type: String,
    default: null,
  },
})

const uuidGenerator = computed(() => {
  return uuid()
})

const internalValue = ref(props.isChecked)

watch(
  () => internalValue.value,
  newValue => {
    emit('update:modelValue', newValue)
    emit('onChange', newValue)
  },
)
</script>

<style lang="scss">
@import '~/assets/style/colors.scss';

.checkbox-container {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  .checkbox-title {
    margin-left: 8px;
  }
}
.checkbox-label {
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  input {
    display: none;
    &:checked {
      ~ {
        .checkmark {
          background: $violet-500;
          border-color: $violet-500;
          &:after {
            display: block;
          }
          &.disabled {
            background: $gray-50;
            cursor: default;
            border-color: $gray-200;
            &:after {
              border-color: $gray-200;
            }
          }
        }
      }
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background: $white;
    border: 1px solid $gray-200;
    border-radius: 4px;
    cursor: pointer;
    &:after {
      content: '';
      display: none;
      position: absolute;
      left: 5.5px;
      top: 1.5px;
      width: 2px;
      height: 6px;
      border: solid $white;
      border-width: 0 3px 3px 0;
      border-radius: 1px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &.disabled {
      background: $gray-50;
      cursor: default;
    }
    &.rounded {
      border-radius: 50%;
    }
  }
}
</style>
