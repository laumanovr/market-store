<template>
    <section class="breadcrumbs">
        <nav v-if="items && items.length"
            class="my-breadcrumbs"
        >
            <ul>
                <li v-for="(item, itemIndex) in items" :key="itemIndex">
                    <NuxtLink v-if="itemIndex !== items.length - 1"
                        :to="item.link"
                        :title="item.name"
                        class="bc-link"
                    >
                        <span>{{ item.name }}</span>
                        <span v-if="items[itemIndex + 1]" class="bc-separator">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33334 1L5.26331 3.83662C5.28551 3.85805 5.30312 3.88352 5.31513 3.91155C5.32715 3.93959 5.33334 3.96965 5.33334 4C5.33334 4.03035 5.32715 4.06041 5.31513 4.08845C5.30312 4.11648 5.28551 4.14195 5.26331 4.16338L2.33334 7" stroke="#141619" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </NuxtLink>
                    <span v-else class="bc-name">{{ item.name }}</span>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script lang="ts" setup>
interface Props {
    items: {
        name: string,
        link: string
    }[]
}

const { items } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.my-breadcrumbs {
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0;
        li {
            background: var(--gray-150);
            margin-right: 8px;
            border-radius: 4px;
            padding: 4px 8px;
            color: var(--black);
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0.048px;
            white-space: nowrap;
            .bc-link {
                text-decoration: none;
                color: var(--black);
            }
            .bc-separator {
                margin-left: 8px;
            }
        }
    }
}
</style>