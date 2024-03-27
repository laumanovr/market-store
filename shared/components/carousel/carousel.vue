<template>
    <div class="detailed-photo__wrapper">
        <div class="detailed-photo__container">
            <div class="detailed-photo__content">
                <div class="detailed-photo__image-gallaty">
                    <ImageGallary :items="examplePhoto" @onItemFoto="onItemFoto" :detail="false"/>
                </div>
                <div class="detailed-photo__main main-photo">
                    <div class="main-photo__icon-left icon-main">
                        <BaseIcon @click="handlerBackPhoro" name="arrowRoundShadow" viewBox="0 0 88 88" class="icon-svg"/>
                    </div>
                    <div class="main-photo__chief chief-image">
                        <div class="chief-image__container">
                            <img :src="handlerMainFoto" alt="Main phoro">
                        </div>
                    </div>
                    <div class="main-photo__right icon-main">
                        <BaseIcon @click="handlerNextPhoto" name="arrowRoundShadow" viewBox="0 0 88 88" class="icon-svg"/>
                    </div>
                </div>
                <div class="detailed-photo__close icon-main" @click="$emit('closeCarousel')">
                    <BaseIcon @click="handlerNextPhoto" name="closeRoundShadow" viewBox="0 0 88 88" class="icon-svg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue'
import { ImageGallary } from '~/features/imageGallary'
import BaseIcon from '~/shared/components/icons/BaseIcon.vue';

interface Props {
    examplePhoto: {
        id: number,
        url: string,
        isActive?: boolean 
    }[]
}
const { examplePhoto } = defineProps<Props>()
const emit = defineEmits(['closeCarousel'])

const mainFoto = ref('')

const handlerMainFoto = computed(():string => {
    if (!mainFoto.value) {
        return examplePhoto[0].url
    } else {
        return mainFoto.value
    }
})

const onItemFoto = (item:{id: number; url: string; isActive?: boolean}):void => {
    mainFoto.value = item.url
}

const handlerNextPhoto = ():void => {
    let activeIndex = -1;

    examplePhoto.forEach((photo, index) => {
    if (photo.isActive) {
        activeIndex = index;
        }
    });
    if (activeIndex === -1) {
        return;
    }
    examplePhoto.forEach(photo => photo.isActive = false);
      const nextIndex = (activeIndex + 1) % examplePhoto.length;
        examplePhoto[nextIndex].isActive = true;
        mainFoto.value = examplePhoto[nextIndex].url
    }

const handlerBackPhoro = ():void => {
    let activeIndex = -1;

    examplePhoto.forEach((photo, index) => {
        if (photo.isActive) {
        activeIndex = index;
        }
    });
    if (activeIndex === -1) {
        return;
    }
    examplePhoto.forEach(photo => photo.isActive = false);

    let prevIndex = (activeIndex - 1) % examplePhoto.length;
    if (prevIndex < 0) {
        prevIndex = examplePhoto.length - 1;
    }
    examplePhoto[prevIndex].isActive = true;
    mainFoto.value = examplePhoto[prevIndex].url;
};
</script>


<style lang="scss" scoped>
.icon-svg {
    widows: 88px;
    height: 88px;
}
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
    &__icon-left {
        transform: rotate(180deg);
    }
}

.icon-main {
    display: flex;
    cursor: pointer;
    height: 56px;
    overflow: hidden;
    z-index: 10;
    & svg{
        width: 56px;
        height: 56px;
        z-index: 10;
    }
}

.chief-image {
    &__container{
        padding-top: 100%;
        position: relative;
        width: 100%;
    }
    &__container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>