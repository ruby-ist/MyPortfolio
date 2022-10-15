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
                {name: "description", content: "My name is Sriram V. I design and build things for the Web. I would still like to consider myself as just a beginner. Aside from programming, I am a huge cinephile and I used to fold origami as a hobby. I even had an Instagram page solely for that and designed some new origami models myself."}
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
                    rel: "stylesheet",
                    type: "text/css",
                    href: "https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css"
                },
            ],
        }
    },

    components: true
})
