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
                {name: "viewport", content: "width=device-width, initial-scale=1"},
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: true
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Anonymous+Pro&family=Comic+Neue:wght@700&family=Cutive+Mono&family=Sen&family=Signika+Negative:wght@400;500;600&family=Special+Elite&family=Ubuntu:wght@500&display=swap"
                },
                {
                    rel: "preload",
                    href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/themes/default/assets/fonts/brand-icons.woff2",
                    as: "font"
                },
                {
                    rel: "preload",
                    href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/themes/default/assets/fonts/icons.woff2",
                    as: "font"
                },
                {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css"
                },
            ],
        }
    },

    components: true
})
