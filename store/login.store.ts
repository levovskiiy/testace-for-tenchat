import { object, string } from 'yup'

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

    const [email, emailProps] = defineField('email')
    const [password, passwordProps] = defineField('password')

    const handleOnLogin = handleSubmit((values) => {
        return
    })

    return {
        meta,
        email,
        emailProps,
        password,
        passwordProps,
        handleOnLogin,
    }
})
