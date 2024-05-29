<script setup lang="ts">
defineOptions({
    inheritAttrs: true,
})

const model = defineModel<string>()

const showPassword = ref(false)
const inputType = computed(() => showPassword.value ? 'text' : 'password')
</script>

<template>
    <div class="relative">
        <ShieldIcon class="absolute top-1/2 -translate-y-1/2 left-2.5" />
        <input
            v-bind="$attrs"
            v-model="model"
            :type="inputType"
            placeholder="Password"
            class="base-input pl-[50px] pr-[50px]"
        >
        <button
            type="button"
            class="absolute top-1/2 -translate-y-1/2 right-5"
            @click="showPassword = !showPassword"
        >
            <EyeIcon :can-show-line="!showPassword" />
        </button>
    </div>
</template>

<style scoped>

</style>
