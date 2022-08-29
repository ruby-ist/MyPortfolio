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
                    href: "https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.8/semantic.min.css"
                },
            ],
            script: [
                {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"},
                {src: "https://cdnjs.cloudflare.com/ajax/libs/fomantic-ui/2.8.8/semantic.min.js"},
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
