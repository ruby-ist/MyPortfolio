import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    ssr: false,

    target: 'static',

    app: {
        head: {
            title: 'Srira',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {charset: 'utf-8'},
                {name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=0"},
            ],
            link: [
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css"
                },
            ],
            script: [
                {src: "https://code.jquery.com/jquery-3.6.1.min.js"},
                {src: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.js"},
            ]
        }
    },

    modules: [
        // '@nuxt/http'
    ],

    buildModules: [
        // '@nuxtjs/composition-api/module',
        // '@pinia/nuxt'
    ],

    // http: {
    //     proxy: true
    // },
    //
    // server: {
    //     port: 3000,
    //     host: '0.0.0.0'
    // },

    components: true
})
