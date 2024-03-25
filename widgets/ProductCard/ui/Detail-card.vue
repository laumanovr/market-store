<template>
    <div>
        <toFavorites
            @onFavorites="onFavorites"
            @onShare="onShare"
        />
    </div>
</template>

<script setup lang="ts">
import { toFavorites } from '~/widgets/toFavotites'

const onFavorites = () => {
    alert('onFavorites')
}

const onShare = () => {
    alert('onShare')
}

</script>

<style>

</style>