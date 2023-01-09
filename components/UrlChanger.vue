<template>
    <div class="site-url">
        <span class="label">Url:</span>
        <a id="url-link" target="_blank" href="https://geobits.onrender.com">
            <span id="url-holder"></span>
            <i class="external link icon"></i>
        </a>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import $ from "jquery"

type dataGroup = {
    URLArray: String[]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        URLArray: [
            'https://geobits.onrender.com',
            'https://pingcoders.onrender.com',
            'https://rubyonwasm.onrender.com',
            'https://narrate-it.onrender.com',
            'https://flames.onrender.com'
        ]
    }),
    mounted() {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        this.URLArray.forEach((url, i) => {
            gsap.to('#url-holder', {
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    toggleActions: "play complete none reset",
                    start: () => "-100% -" +  (window.innerHeight * 5 * i),
                    end: () => "+=" + window.innerHeight * 5,
                    onEnter: () => {
                        $('#url-link').attr('href', url);
                        let current = $('.projects-menu .active.item');
                        if (current !== undefined)
                            current.removeClass('active');
                        let items = $('.projects-menu .item');
                        items[i].classList.add('active');
                    },
                    onEnterBack: () => {
                        $('#url-link').attr('href', url);
                        gsap.set('#url-holder', {text: {value: url}});
                        let current = $('.projects-menu .active.item');
                        if (current !== undefined)
                            current.removeClass('active');
                        let items = $('.projects-menu .item');
                        items[i].classList.add('active');
                    },
                    invalidateOnRefresh: true
                },
                duration: 1.2,
                text: { value: url },
            });
        });
    }
});
</script>

<style scoped lang="scss">
.site-url {
    position: absolute;
    bottom: 18%;
    right: -95%;
    font-size: 1.1rem;
    z-index: 7;
    font-family: 'Anonymous Pro', monospace;

    span.label{
        margin-right: 5px;
    }

    #url-link{
        cursor: pointer;
    }
}
@media only screen and (min-width: 576px) and (max-width: 992px){
    .site-url{
        bottom: 15%;
    }
}
</style>