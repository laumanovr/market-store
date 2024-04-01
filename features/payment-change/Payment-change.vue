<template>
    <div class="payment-change">
        <SInput
            label="Подготовить сдачу из суммы"
            placeHolder="Введите сумму"
            width="100%"
            :disabled="noChange"
        />
        <div class="payment-change__no-change">
            <SCheckbox v-model="noChange">
                Без сдачи
            </SCheckbox>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SInput, SCheckbox } from "@tumarsoft/ogogo-ui";

const noChange = ref(false)

</script>

<style lang="scss" scoped>
.payment-change {
    display: flex;
    align-items: end;
    grid-gap: 16px;
    &__no-change {
        height: 40px;
        display: flex;
        align-items: center;
        width: 85px;
        white-space: nowrap;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.064px;
    }
}
</style>