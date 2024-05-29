import { useSessionStore } from '~/store/session.store'

export default defineNuxtRouteMiddleware(() => {
    const session = useSessionStore()

    if (!session.token) {
        return navigateTo('/signin')
    }
})
