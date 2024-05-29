<script setup lang="ts">
import { useLoginStore } from '~/store/login.store'

const store = useLoginStore()
</script>

<template>
    <div>
        <form
            class="flex flex-col gap-2.5"
            @submit.prevent="store.handleOnLogin"
        >
            <EmailInput
                v-model="store.email"
                v-bind="store.emailProps"
                class="w-full"
            />

            <PasswordInput
                v-model="store.password"
                v-bind="store.passwordProps"
                class="w-full"
            />

            <Button
                :disabled="!store.meta.valid"
                :loading="store.meta.pending"
                type="submit"
                class="mt-[15px]"
            >
                LOG IN
            </Button>
        </form>
        <div class="text-center mt-4">
            <span>
                Don't have account?
                <NuxtLink
                    class="link"
                    to="signup"
                >
                    Create an account
                </NuxtLink>
            </span>
        </div>
    </div>
</template>

<style scoped>

</style>
