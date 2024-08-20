<template>
  <div class="detailed-photo__wrapper">
    <div class="detailed-photo__container">
      <div class="detailed-photo__content">
        <div class="detailed-photo__image-gallaty">
          <ImageGallary
            :items="examplePhoto"
            @onItemFoto="onItemFoto"
            :detail="false"
          />
        </div>
        <div class="detailed-photo__main main-photo">
          <SButton
            type="text"
            size="small"
            class="main-photo__icon-left"
            @click="handlerBackPhoro"
          >
            <SIconRender name="chevron-left" />
          </SButton>
          <div class="main-photo__chief">
            <div class="chief-image__container">
              <img :src="handlerMainFoto" alt="Main phoro" />
            </div>
          </div>
          <SButton
            type="text"
            size="small"
            class="main-photo__right"
            @click="handlerNextPhoto"
          >
            <SIconRender name="chevron-right" />
          </SButton>
        </div>
        <SButton
          type="text"
          size="small"
          class="detailed-photo__close"
          @click="$emit('closeCarousel')"
        >
          <SIconRender name="close" size="large" />
        </SButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIconRender, SButton } from '@tumarsoft/ogogo-ui'
import { ref, computed } from 'vue'
import { ImageGallary } from '~/features/imageGallary'

interface Props {
  examplePhoto: {
    id: number
    url: string
    isActive?: boolean
  }[]
}
const { examplePhoto } = defineProps<Props>()
const emit = defineEmits(['closeCarousel'])

const mainFoto = ref('')

const handlerMainFoto = computed((): string => {
  if (!mainFoto.value) {
    return examplePhoto[0].url
  } else {
    return mainFoto.value
  }
})

const onItemFoto = (item: {
  id: number
  url: string
  isActive?: boolean
}): void => {
  mainFoto.value = item.url
}

const handlerNextPhoto = (): void => {
  let activeIndex = -1

  examplePhoto.forEach((photo, index) => {
    if (photo.isActive) {
      activeIndex = index
    }
  })
  if (activeIndex === -1) {
    return
  }
  examplePhoto.forEach(photo => (photo.isActive = false))
  const nextIndex = (activeIndex + 1) % examplePhoto.length
  examplePhoto[nextIndex].isActive = true
  mainFoto.value = examplePhoto[nextIndex].url
}

const handlerBackPhoro = (): void => {
  let activeIndex = -1

  examplePhoto.forEach((photo, index) => {
    if (photo.isActive) {
      activeIndex = index
    }
  })
  if (activeIndex === -1) {
    return
  }
  examplePhoto.forEach(photo => (photo.isActive = false))

  let prevIndex = (activeIndex - 1) % examplePhoto.length
  if (prevIndex < 0) {
    prevIndex = examplePhoto.length - 1
  }
  examplePhoto[prevIndex].isActive = true
  mainFoto.value = examplePhoto[prevIndex].url
}
</script>

<style lang="scss" scoped>
.detailed-photo {
  &__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    width: 100%;
    height: 100vh;
    z-index: 5;
    overflow: hidden;
    user-select: none;
  }
  &__container {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
    padding: 40px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
  }
  &__close {
    height: 56px;
  }
}

.main-photo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  &__chief {
    width: 65%;
  }
}

.chief-image__container {
  padding-top: 100%;
  position: relative;
  width: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
