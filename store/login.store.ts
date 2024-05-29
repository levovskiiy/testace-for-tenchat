import { object, string } from 'yup'
import type { FetchError } from 'ofetch'
import { useSignupStore } from '~/store/signup.store'
import { useSessionStore } from '~/store/session.store'
import type { UserLoginResp } from '~/types/user.types'

const schema = toTypedSchema(
    object({
        email: string().email().required(),
        password: string().required(),
    })
)

export const useLoginStore = defineStore('store/login', () => {
    const { defineField, handleSubmit, meta } = useForm({
        validationSchema: schema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: '',
        },
    })

    const pendingLogin = ref(false)
    const loginError = ref('')

    const [email, emailProps] = defineField('email')
    const [password, passwordProps] = defineField('password')

    const signup = useSignupStore()
    const session = useSessionStore()

    const handleOnLogin = handleSubmit(async (values) => {
        try {
            pendingLogin.value = true
            const data = await $fetch<UserLoginResp>('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    username: signup.username,
                    password: values.password,
                },
            })

            session.token = data.token
            await session.getActual()
            await navigateTo('/')
        }
        catch (error) {
            loginError.value = (error as FetchError).message
        }
        finally {
            pendingLogin.value = false
        }
    })

    return {
        meta,
        email,
        emailProps,
        password,
        passwordProps,
        handleOnLogin,
        pendingLogin,
        loginError,
    }
})
