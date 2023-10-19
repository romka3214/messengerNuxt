// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            bodyAttrs: {
                class: 'bg-black-100'
            }
        },
    },

    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/tailwindcss']
})
