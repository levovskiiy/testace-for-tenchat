<script setup lang="ts">
import { useSignupStore } from '~/store/signup.store'

definePageMeta({
    layout: 'signup',
})

const signupStore = useSignupStore()

onBeforeRouteLeave((to, from, next) => {
    if (to.name === 'signup') {
        signupStore.password = ''
        signupStore.confirmPassword = ''
        return next()
    }

    next()
})

const code = ref('')
const codeEntered = ref(false)
</script>

<template>
    <div class="flex flex-col gap-[25px]">
        <div class="header">
            <div class="font-bold text-[40px] leading-none">
                Enter OTP
            </div>
            <p class="flex-1">
                Sent OTP on
                {{ code }}
                {{ codeEntered }}
                <a
                    class="link"
                    :href="'mailto:' + signupStore.email"
                >
                    {{ signupStore.email }}
                </a>
            </p>
            <NuxtLink
                to="/signup"
                class="link"
            >
                Change email
            </NuxtLink>
        </div>
        <VerificationCode
            v-model="code"
            @complete="codeEntered = $event"
        />
        <Button
            :disabled="!codeEntered"
            visual="primary"
        >
            Submit
        </Button>
    </div>
</template>
