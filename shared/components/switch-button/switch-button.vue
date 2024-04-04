<template>
  <div class="switch-button">
    <div v-if="title" class="switch-button__title">
      <h4>
        {{ title }}
      </h4>
    </div>
    <div class="switch-button__choice-btn">
      <SButton
        color="gray"
        size="large"
        :class="{ isActive: activeleft }"
        @click="handlerChange('activeleft')"
      >
        {{ btnlLeft }}
      </SButton>
      <SButton
        color="gray"
        size="large"
        :class="{ isActive: activeRight }"
        @click="handlerChange('activeRight')"
      >
        {{ btnRight }}
      </SButton>
    </div>
    <div class="delivery-method__add-address"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SButton } from '@tumarsoft/ogogo-ui'

interface Props {
  title?: string
  btnlLeft: string
  btnRight: string
}

const { title, btnlLeft, btnRight } = defineProps<Props>()
const emit = defineEmits(['onSwitch'])

const activeleft = ref(true)
const activeRight = ref(false)
const switchValue = ref(0)

const handlerChange = (el: string) => {
  if (el == 'activeleft') {
    activeRight.value = false
    activeleft.value = true
    switchValue.value = 0
    emit('onSwitch', switchValue.value)
  } else if (el == 'activeRight') {
    activeleft.value = false
    activeRight.value = true
    switchValue.value = 1
    emit('onSwitch', switchValue.value)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
.switch-button {
  &__choice-btn {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }
  &__choice-btn:deep(.button) {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.056px;
    border-radius: 20px;
    background: none;
    color: $gray-500;
    height: 40px;
  }
  &__choice-btn:deep(.button.isActive) {
    border-radius: 20px;
    background: $gray-150;
    color: $black;
  }
  &__title {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.196px;
  }
}
</style>
