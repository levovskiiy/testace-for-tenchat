<script setup lang="ts">
const KEY_CODES = {
    delete: 'Backspace',
    left: 'ArrowLeft',
    right: 'ArrowRight',
}

const props = withDefaults(defineProps<{
    length?: number
    modelValue: string
}>(), {
    length: 6,
})

const emitter = defineEmits<{
    complete: [value: boolean]
}>()

const model = defineModel({ required: true })
const inputRefs = ref<Array<HTMLInputElement>>([])
const nextInputRefs = ref<number[]>([])
const autoFocusIndex = ref(0)
const code = ref<string[]>(props.modelValue.split(''))

watch(() => toValue(code), (value) => {
    const joinedCode = value.join('')
    model.value = joinedCode
    emitter('complete', joinedCode.length === props.length)
}, { deep: true })

function init() {
    const values = Array.from({ length: props.length }, () => '')

    if (code.value && code.value.length) {
        for (let i = 0; i < props.length; i++) {
            values[i] = code.value[i]
        }

        autoFocusIndex.value = code.value.length >= props.length ? 0 : code.value.length
    }

    nextInputRefs.value = Array.from({ length: props.length }, (_, id) => id + 1)
    code.value = values
}

function handleInput(event: Event, id: number) {
    const value = (event.target as HTMLInputElement).value
    if (!isFinite(parseInt(value)))
        return

    let nextFieldId
    if (value.length > 1) {
        let nextIndex = value.length + (id - 1)

        if (nextIndex >= props.length) {
            nextIndex = props.length - 1
        }

        nextFieldId = nextInputRefs.value[nextIndex]

        const split = value.split('')
        split.forEach((item, index) => {
            const next = id + index

            if (next < props.length)
                code.value[next] = item
        })
    }
    else {
        nextFieldId = nextInputRefs.value[id]
        code.value[id] = value
    }

    if (nextFieldId) {
        const input = inputRefs.value[nextFieldId] ?? inputRefs.value[inputRefs.value.length - 1]
        input.focus()
        input.select()
    }
}

function handleEscapeKey(id: number) {
    code.value[id] = ''
    const prev = id - 1

    if (prev >= 0) {
        const input = inputRefs.value[prev]
        input.focus()
    }
}

function handleMove(prev: number, next: number, direction = 'left') {
    switch (direction) {
        case 'left':
            if (prev >= 0) {
                inputRefs.value[prev].focus()
            }
            break
        case 'right':
            if (next < props.length) {
                inputRefs.value[next].focus()
            }
            break
        default:
            throw new Error('unknown direction')
    }
}

function handleKeyboard(event: Event, id: number) {
    const prev = id - 1
    const next = id + 1

    switch ((event as KeyboardEvent).code) {
        case KEY_CODES.left:
            handleMove(prev, next, 'left')
            break
        case KEY_CODES.right:
            handleMove(prev, next, 'right')
            break
        case KEY_CODES.delete:
            handleEscapeKey(id)
            break
    }
}

init()
</script>

<template>
    <div class="flex gap-5 justify-center">
        <input
            v-for="(value, id) in code"
            :key="id"
            ref="inputRefs"
            pattern="[0-9]"
            placeholder="-"
            class="base-input flex-1 w-16 h-16 text-3xl text-center"
            :class="'input-' + id"
            :autofocus="id === autoFocusIndex"
            :value="value"
            @input="handleInput($event, id)"
            @keydown="handleKeyboard($event, id)"
        >
    </div>
</template>

<style scoped>

</style>
