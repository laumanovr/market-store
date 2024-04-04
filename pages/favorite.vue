<template>
  <div class="favorite">
    <Favorite />
  </div>
</template>

<script lang="ts" setup>
import { Favorite } from '~/widgets/favorite'
definePageMeta({
  layout: 'main',
})
</script>
