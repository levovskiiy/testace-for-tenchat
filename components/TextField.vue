<script setup lang="ts">
defineOptions({
    inheritAttrs: true,
})

const model = defineModel({ required: true })
</script>

<template>
    <div class="relative">
        <div class="absolute top-1/2 -translate-y-1/2 left-2.5">
            <slot name="icon-left" />
        </div>
        <input
            v-model="model"
            v-bind="$attrs"
            type="text"
            class="base-input"
            :class="{
                'pl-[50px]': $slots['icon-left'] != null,
            }"
        >
    </div>
</template>

<style scoped>

</style>
