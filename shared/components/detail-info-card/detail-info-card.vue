<template>
    <div class="detail-card__detail-description detail-description">
        <div class="detail-description__title">
            <h4>{{ item.title }}</h4>
        </div>
        <dl class="detail-description__cont" v-for="el in item.items" :key="el.title">
            <dt class="detail-description__subtitle">
                <div class="subtitle-detail">
                    <span>{{ el.title }}</span>
                </div>
            </dt>
            <div class="column-detail__text">
                <div style="max-height:80px">
                    <div class="text-detail">
                        <dd style="margin: 0;">
                            {{ el.text }}
                        </dd>
                    </div>
                </div>
            </div>
        </dl>
    </div>
</template>

<script setup lang="ts">

interface Props {
    item: {
        title: string,
        items: {
            title: string;
            text: string;
        }[]
    }
}

const { item } = defineProps<Props>()

</script>

<style lang="scss" scoped>
@import "~/assets/style/colors.scss";
    .detail-description {
        &__cont {
            display: flex;
            padding-top: 68px;
            margin-top: -72px;
            margin-bottom: 14px;
            background: #fff;
        }
        &__subtitle{
            width: 40%;
            flex-shrink: 0;
            margin-bottom: 7px;
            position: relative;
            background: inherit;
        }
        &__subtitle:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            margin-top: .85em;
            height: 1px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAAAAAA+i0toAAAAAnRSTlMA/1uRIrUAAAAMSURBVHheY7j1/z8ABY8C2UtBe8oAAAAASUVORK5CYII=) 0 0 repeat-x;
        }
        &__title {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.064px;
        }
    }

    .subtitle-detail {
        position: relative;
        padding-right: 10px;
        background: inherit;
        z-index: 1;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        color: $gray-500;
    }

    .column-detail__text {
        position: relative;
    }

    .text-detail {
        padding-left: 10px;
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        color: $black;
    }
</style>