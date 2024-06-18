<template>
  <div class="wrapper">
    <div class="text-field text-field__floating">
      <input
        id="first"
        class="text-field__input"
        v-model="code[0]"
        type="text"
      />
      <input
        id="second"
        class="text-field__input"
        v-model="code[1]"
        type="text"
      />
      <input
        id="third"
        class="text-field__input"
        v-model="code[2]"
        type="text"
      />
      <input
        id="forth"
        class="text-field__input"
        v-model="code[3]"
        type="text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const smsCode = ref('')
const code = ref(new Array(4).fill(''))
const codeId = ['first', 'second', 'third', 'forth']

const emit = defineEmits(['onInput'])

watch(
  code,
  (newValue: string[], oldValue) => {
    let tempValue = ''
    for (let i = 0; i < newValue.length; i++) {
      if (i === 4) {
        break
      }
      if (newValue[i]) {
        tempValue = tempValue + newValue[i]
      }
    }
    smsCode.value = tempValue
    const m = tempValue.split('')
    let location = 0
    for (let i = 0; i < newValue.length; i++) {
      if (m[i] && i < 5) {
        location++
        newValue[i] = m[i]
      } else {
        newValue[i] = ''
      }
    }
    if (location < 1) {
      location = 1
    } else if (location > 5) {
      location = 5
    }
    const inputElement = document.getElementById(codeId[location - 1])
    if (inputElement) {
      ;(inputElement as HTMLInputElement).focus()
    }
    emit('onInput', smsCode.value)
  },
  { deep: true },
)
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';

input[type='text'] {
  border: 1px solid $gray-200;
  border-radius: 8px;
  height: 40px;
  width: 70px;
  background: none;
  outline: none;
}

.text-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__floating {
    position: relative;
  }
  &__input {
    text-align: center;
  }
}

.text-field_floating .text-field__input:focus ~ .text-field__label,
.text-field_floating
  .text-field__input:not(:placeholder-shown)
  ~ .text-field__label {
  opacity: 0%;
}
</style>
