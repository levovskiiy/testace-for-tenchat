<script setup lang="ts">
const props = withDefaults(defineProps<{
    disabled?: boolean
    loading?: boolean
    visual?: 'primary' | 'secondary'
}>(), {
    disabled: false,
    loading: false,
    visual: 'primary',
})

const classList = computed(() => ({
    'disabled:opacity-30 cursor-not-allowed': props.disabled,
    'bg-primary-base text-white &:not(:disabled):hover:bg-primary-hover &:not(:disabled):active:bg-primary-active': props.visual === 'primary',
    'bg-neutral-200 text-black &:not(:disabled):hover:bg-neutral-300 active:bg-neutral-400/50': props.visual === 'secondary',
}))
</script>

<template>
    <button
        :disabled="disabled || loading"
        :class="classList"
        class="transition rounded-[10px] border-none select-none inline-flex items-center justify-center p-5"
        type="button"
    >
        <slot />
    </button>
</template>
