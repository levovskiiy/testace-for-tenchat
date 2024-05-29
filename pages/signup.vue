<script setup lang="ts">
import { useSignupStore } from '~/store/signup.store'

definePageMeta({
    layout: 'signup',
})

const store = useSignupStore()

const confirm = ref()
onBeforeRouteLeave(async (to, from, next) => {
    if (to.name === 'signin') {
        if (!store.meta.dirty) {
            next()
            return
        }

        const result = await confirm.value.open()
        if (!result) {
            next(false)
            return
        }

        store.resetForm()
        next()
    }

    next()
})
</script>

<template>
    <div class="flex flex-col gap-[25px]">
        <ConfirmPopup ref="confirm">
            <template #title>
                Are you sure you want to leave the page?
            </template>
            The entered data will be lost
        </ConfirmPopup>
        <div class="header">
            <div class="font-bold text-[40px] text-center leading-none">
                Create your account
            </div>
            <span class="text-[#71717A]">Unlock all Features!</span>
        </div>
        <form
            class="flex flex-col gap-2.5 px-3"
            @submit.prevent="store.handleSignup"
        >
            <TextField
                v-model="store.username"
                v-bind="store.usernameProps"
                name="username"
                placeholder="Username"
                class="w-full"
            >
                <template #icon-left>
                    <PersonIcon />
                </template>
            </TextField>

            <TextField
                v-model="store.email"
                v-bind="store.emailProps"
                name="email"
                placeholder="Email"
                class="w-full"
            >
                <template #icon-left>
                    <EmailIcon />
                </template>
            </TextField>

            <PasswordInput
                v-model="store.password"
                v-bind="store.passwordProps"
                name="password"
                class="w-full"
            />

            <PasswordInput
                v-model="store.confirmPassword"
                v-bind="store.confirmPasswordProps"
                name="passwordConfirm"
                class="w-full"
            />

            <Button
                :disabled="!store.meta.valid"
                :loading="store.meta.pending"
                type="submit"
                class="mt-[15px]"
            >
                SIGN UP
            </Button>
            <div class="text-center mt-2.5">
                <span>
                    You have account?
                    <NuxtLink
                        class="link"
                        to="signin"
                    >
                        Login now
                    </NuxtLink>
                </span>
            </div>
        </form>
    </div>
</template>
