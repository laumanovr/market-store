<template>
  <section class="breadcrumbs">
    <nav v-if="items && items.length" class="my-breadcrumbs">
      <ul>
        <li v-for="(item, itemIndex) in items" :key="itemIndex">
          <NuxtLink
            v-if="itemIndex !== items.length - 1"
            :to="item.link"
            :title="item.name"
            class="bc-link s-flex items-center"
          >
            <span>{{ item.name }}</span>
            <SIconRender
              name="chevron-right"
              size="x-small"
              v-if="items[itemIndex + 1]"
              class="s-ml-2"
            />
          </NuxtLink>
          <span v-else class="bc-name">{{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts" setup>
import { SIconRender } from '@tumarsoft/ogogo-ui'
interface Props {
  items: {
    name: string
    link: string
  }[]
}

const { items } = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '~/assets/style/colors.scss';
@import '~/assets/style/screens.scss';

.my-breadcrumbs {
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    @media #{$sm} {
      flex-wrap: wrap;
    }
    li {
      background: $gray-150;
      margin-right: 8px;
      border-radius: 4px;
      padding: 4px 8px;
      color: $black;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.048px;
      white-space: nowrap;
      .bc-link {
        text-decoration: none;
        color: $black;
      }
    }
  }
}
</style>
