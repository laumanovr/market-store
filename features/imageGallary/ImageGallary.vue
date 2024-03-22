<template>
    <div class="product-card__example-photo example-photo" >
        <div
            :class="['example-photo__image', {'isActive': item.isActive}]"
            v-for="item in items"
            :key="item.id"
            @click="handlerExamplePhoto(item)"
            >
            <img :src="item.url" alt="example photo">
        </div>
        <div v-if="detail" class="example-photo__total" @click="$emit('openCarousel')"><span>Ещё </span>{{ examplePhotoLength }}</div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
items: {
    id: number,
    url: string,
    isActive?: boolean 
}[],
detail?: boolean
}

const { items, detail } = defineProps<Props>()
const emit = defineEmits(['onItemFoto', 'openCarousel'])

const examplePhotoLength = computed(():number => {
    return items.length
})

const handlerExamplePhoto = (item:{id: number; url: string; isActive?: boolean}):void => {
    emit('onItemFoto', item)
    item.isActive = true
    items.filter((el) => {
        if (item.id !== el.id) {
            el.isActive = false
        } else {
            el.isActive = true
        }
    })
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .example-photo {
        max-width: 56px;
        
        &__image {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            border: 1px solid rgba(0, 0, 0, 0);
            border-radius: 8px;
            width: 56px;
            height: 56px;
            overflow: hidden;
        }
        &__image img {
            width: 50px;
            height: 50px;
            padding: 1px;
            cursor: pointer;
        }
        &__total {
            text-align: center;
            margin-top: 35px;
            cursor: pointer;
            color: $violet-600;
            font-weight: 500;
            font-size: 12px;
        }
    }
    .isActive {
      border: 1px solid black;
    }
</style>