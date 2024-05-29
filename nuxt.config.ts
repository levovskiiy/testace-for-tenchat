// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@pinia/nuxt',
        '@nuxt/eslint',
        '@vee-validate/nuxt',
        '@nuxtjs/google-fonts'
    ],
    css: ['~/assets/css/main.css'],
    eslint: {
        config: {
            stylistic: {
                indent: 4,
                commaDangle: 'only-multiline',
            },
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    googleFonts: {
        families: {
            Montserrat: [400, 500, 700],
        }
    }
})
