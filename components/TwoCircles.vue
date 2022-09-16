<template>
    <div id="two-circle">
        <div class="filled-circle"></div>
        <div class="stroked-circle"></div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.filled-circle', {
            scrollTrigger: {
                trigger: '#two-circle',
                toggleActions: "restart none restart none"
            },
            xPercent: -10,
            yPercent: 10,
            opacity: 0,
            ease: 'sine',
            duration: 1.8
        });

        gsap.from('.stroked-circle', {
            scrollTrigger: {
                trigger: '#two-circle',
                toggleActions: "restart none restart none"
            },
            xPercent: 10,
            yPercent: -10,
            opacity: 0,
            ease: 'sine',
            duration: 1.8
        });
    }
});
</script>

<style scoped lang="scss">
#two-circle{
    position: absolute;
    bottom: 25%;
    right: -5%;

    .filled-circle{
        border-radius: 50%;
        height: 300px;
        width: 300px;
        background: linear-gradient(210deg, #0D6533, #05180E);
    }

    .stroked-circle{
        border-radius: 50%;
        height: 300px;
        width: 300px;
        border: 2px solid #0a4b26;
        position: absolute;
        top: 20%;
        left: -20%;
    }
}
</style>