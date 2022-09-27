<template>
    <div class="site-url">
        <span class="label">Url:</span>
        <a id="url-link" href="https://geobits.onrender.com">
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

type dataGroup = {
    URLArray: String[]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        URLArray: [
            'https://geobits.onrender.com',
            'https://pingcoders.herokuapp.com',
            'https://rubyonwasm.onrender.com',
            'https://narrate-it.herokuapp.com',
            'https://burningheart.herokuapp.com'
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
                    onEnter: () => { $('#url-link').attr('href', url); },
                    onEnterBack: () => {
                        $('#url-link').attr('href', url);
                        gsap.set('#url-holder', {text: {value: url}})
                    },
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
    bottom: 20%;
    right: -90%;
    font-size: 1.1rem;
    z-index: 7;

    span.label{
        margin-right: 5px;
    }

    #url-link{
        cursor: pointer;
    }
}

@media only screen and (max-width: 480px) {
    .site-url{
        right: initial;
        left: 5%;
        bottom: 55%;
    }

}
</style>