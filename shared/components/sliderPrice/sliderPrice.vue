<template>
  <div id="app" class="components-slider">
    <div class="components-slider-rail" ref="rail">
      <div
        class="components-slider-process"
        :class="{
          'components-slider-process--transition':
            !dragging.min && !dragging.max,
        }"
        :style="{
          width: max - min + '%',
          left: min + '%',
          right: 100 - max + '%',
        }"
      ></div>
      <div
        class="components-slider-dots components-slider-dots--min"
        :class="{ 'components-slider-dots--transition': !dragging.min }"
        :style="{ left: min + '%' }"
        @mousedown="dragStart('min')"
      ></div>
      <div
        class="components-slider-dots components-slider-dots--max"
        :class="{ 'components-slider-dots--transition': !dragging.max }"
        :style="{ left: max + '%' }"
        @mousedown="dragStart('max')"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const min = ref(10)
const max = ref(80)
const dragging = {
  min: false,
  max: false,
}
const rail = ref(null)

const width = ref(0)
const offsetLeft = ref(0)

const dragStart = (type: string) => {
  dragging[type] = true
}

const dragEnd = () => {
  dragging.min = false
  dragging.max = false
}

const move = (evt: MouseEvent) => {
  let percent = parseInt(((evt.x - offsetLeft.value) / width.value) * 100)

  if (evt.x < offsetLeft.value) {
    percent = 0
  }
  if (evt.x > offsetLeft.value + width.value) {
    percent = 100
  }
  if (dragging.min) {
    min.value = percent >= max.value ? max.value : percent
  }
  if (dragging.max) {
    max.value = percent <= min.value ? min.value : percent
  }
}

const clickChange = (evt: MouseEvent) => {
  if (!rail.value.contains(evt.target)) return

  let percent = parseInt(((evt.x - offsetLeft.value) / width.value) * 100)
  if (evt.x < offsetLeft.value) {
    percent = 0
  }
  if (evt.x > offsetLeft.value + width.value) {
    percent = 100
  }
  const betweenMinAndMax = percent >= min.value && percent <= max.value
  let filterChangeType = true
  if (betweenMinAndMax) {
    filterChangeType =
      Math.abs(max.value - percent) > Math.abs(min.value - percent)
  }
  if (percent >= max.value || !filterChangeType) {
    max.value = percent
  } else {
    min.value = percent
  }
}

import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  width.value = rail.value?.clientWidth || 0
  offsetLeft.value = rail.value?.offsetLeft || 0
  document.addEventListener('mousedown', dragStart)
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', dragEnd)
  document.addEventListener('click', clickChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', dragStart)
  document.removeEventListener('mousemove', move)
  document.removeEventListener('mouseup', dragEnd)
  document.removeEventListener('click', clickChange)
})
</script>

<style scoped>
.components-slider {
  width: 100%;
}

.components-slider-rail {
  position: relative;
  height: 2px;
  display: flex;
  align-items: center;
  background-color: #dfe1e5;
}

.components-slider-process {
  position: absolute;
  height: 100%;
  background-color: #7c3aed;
}

.components-slider-process--transition {
  transition: all 0.3s;
}

.components-slider-dots {
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.16);
  z-index: 2;
}

.components-slider-dots--transition {
  transition: all 0.3s;
}
</style>
