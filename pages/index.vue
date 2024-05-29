<script setup lang="ts">
import { useSessionStore } from '~/store/session.store'

definePageMeta({
    middleware: 'authenticated',
})

const session = useSessionStore()
</script>

<template>
    <div class="flex">
        Welcome, {{ session.user?.username }}
    </div>
</template>
