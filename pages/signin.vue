<script setup lang="ts">
import { useLoginStore } from '~/store/login.store'

definePageMeta({
    layout: 'signin',
})

const store = useLoginStore()
</script>

<template>
    <div class="flex flex-col gap-[25px]">
        <div class="header">
            <div class="font-bold text-[40px] text-center leading-none mb-[25px]">
                Login to your Account
            </div>
            <div
                class="flex items-center w-full text-[15px] text-[#71717A] after:block after:h-[1px] after:w-[120px] after:bg-[#71717A] before:block before:h-[1px] before:w-[120px] before:bg-[#71717A]"
            >
                <p class="flex-1 text-center">
                    with email
                </p>
            </div>
        </div>
        <form
            class="flex flex-col gap-2.5"
            @submit.prevent="store.handleOnLogin"
        >
            <TextField
                v-model="store.email"
                v-bind="store.emailProps"
                placeholder="Email"
                name="email"
                class="w-full"
            >
                <template #icon-left>
                    <EmailIcon />
                </template>
            </TextField>

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
            <div class="text-center mt-2.5">
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
        </form>
    </div>
</template>
