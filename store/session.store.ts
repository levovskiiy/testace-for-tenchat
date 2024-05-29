import type { User } from '~/types/user.types'

export const useSessionStore = defineStore('store/session', () => {
    const token = ref('')
    const user = ref<User>()

    async function getActual() {
        user.value = await $fetch<User>('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token.value,
            },
        })
    }

    return {
        token,
        user,
        getActual,
    }
})
