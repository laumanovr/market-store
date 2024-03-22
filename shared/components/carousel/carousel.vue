<template>
    <div class="detailed-photo__wrapper">
        <div class="detailed-photo__container">
            <div class="detailed-photo__content">
                <div class="detailed-photo__image-gallaty">
                    <ImageGallary :items="examplePhoto" @onItemFoto="onItemFoto" :detail="false"/>
                </div>
                <div class="detailed-photo__main main-photo">
                    <div class="main-photo__icon-left icon-main">
                        <svg  @click="handlerBackPhoro" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1584_26879)">
                            <path d="M16 44C16 28.536 28.536 16 44 16C59.464 16 72 28.536 72 44C72 59.464 59.464 72 44 72C28.536 72 16 59.464 16 44Z" fill="white"/>
                            <path d="M39 35L47.7899 43.5098C47.8565 43.5742 47.9093 43.6506 47.9454 43.7347C47.9814 43.8188 48 43.9089 48 44C48 44.0911 47.9814 44.1812 47.9454 44.2653C47.9093 44.3494 47.8565 44.4258 47.7899 44.4902L39 53" stroke="#141619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_1584_26879" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="8"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1584_26879"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1584_26879" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                    <div class="main-photo__chief chief-image">
                        <div class="chief-image__container">
                            <img :src="handlerMainFoto" alt="Main phoro">
                        </div>
                    </div>
                    <div class="main-photo__right icon-main">
                        <svg @click="handlerNextPhoto" width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1584_26879)">
                            <path d="M16 44C16 28.536 28.536 16 44 16C59.464 16 72 28.536 72 44C72 59.464 59.464 72 44 72C28.536 72 16 59.464 16 44Z" fill="white"/>
                            <path d="M39 35L47.7899 43.5098C47.8565 43.5742 47.9093 43.6506 47.9454 43.7347C47.9814 43.8188 48 43.9089 48 44C48 44.0911 47.9814 44.1812 47.9454 44.2653C47.9093 44.3494 47.8565 44.4258 47.7899 44.4902L39 53" stroke="#141619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_1584_26879" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="8"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1584_26879"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1584_26879" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="detailed-photo__close icon-main" @click="$emit('closeCarousel')">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1584_26882)">
                        <path d="M16 44C16 28.536 28.536 16 44 16C59.464 16 72 28.536 72 44C72 59.464 59.464 72 44 72C28.536 72 16 59.464 16 44Z" fill="white"/>
                        <path d="M36 36L52 52" stroke="#141619" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M36 52L52 36" stroke="#141619" stroke-width="1.5" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_1584_26882" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="8"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1584_26882"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1584_26882" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue'
import { ImageGallary } from '~/features/imageGallary'

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
    width: 56px;
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