<script setup lang="ts">
const promise = ref(promiseProxy<boolean>())

const visible = ref(false)

function accept() {
    visible.value = false
    promise.value.resolve(true)
}

function cancel() {
    visible.value = false
    promise.value.resolve(false)
}

defineExpose({
    open: () => {
        visible.value = true
        promise.value = promiseProxy()
        return promise.value.promise
    },
})
</script>

<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition"
            leave-active-class="transition"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
        >
            <div
                v-show="visible"
                class="absolute inset-0 flex z-[99999] backdrop-blur bg-neutral-950/50"
            >
                <Transition
                    enter-active-class="transition"
                    leave-active-class="transition"
                    enter-from-class="transform scale-0"
                    leave-to-class="transform scale-0"
                >
                    <div
                        v-show="visible"
                        class="m-auto flex flex-col gap-4 bg-neutral-50 rounded-2xl p-6"
                    >
                        <div class="title text-xl font-bold">
                            <slot name="title" />
                        </div>
                        <div class="content">
                            <slot />
                        </div>
                        <div class="flex gap-2 mt-auto">
                            <Button @click="accept">
                                Confirm
                            </Button>
                            <Button
                                visual="secondary"
                                @click="cancel"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
