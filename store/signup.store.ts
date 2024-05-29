import { object, string, ref as yupRef } from 'yup'

const schema = toTypedSchema(
    object({
        username: string().required(),
        email: string().email().required(),
        password: string().required(),
        confirmPassword: string().required().oneOf([yupRef('password')]),
    })
)

export const useSignupStore = defineStore('store/signup', () => {
    const { defineField, handleSubmit, meta, resetForm } = useForm({
        validationSchema: schema,
        validateOnMount: true,
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const [username, usernameProps] = defineField('username')
    const [email, emailProps] = defineField('email')
    const [password, passwordProps] = defineField('password')
    const [confirmPassword, confirmPasswordProps] = defineField('confirmPassword')

    const loading = ref(false)
    const handleSignup = handleSubmit(async (values) => {
        await $fetch('https://dummyjson.com/auth/login', {
            body: {
                username: values.username,
                email: values.email,
                password: values.password,
            },
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        await navigateTo('/verification')
    })

    return {
        username,
        usernameProps,
        email,
        emailProps,
        password,
        passwordProps,
        confirmPassword,
        confirmPasswordProps,
        handleSignup,
        meta,
        resetForm,
        loading,
    }
})
