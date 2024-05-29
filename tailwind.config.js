/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    base: 'rgba(128, 152, 249, 1)',
                    hover: 'rgba(128, 152, 249, 0.8)',
                    active: 'rgba(128, 152, 249, 0.7)',
                    lighter: 'rgba(128, 152, 249, 0.1)',
                    border: 'rgba(128, 152, 249, 0.5)',
                },
                text: {
                    placeholder: 'rgba(45, 49, 166, 0.2)',
                },
            }
        },
    },
    plugins: [],
}
