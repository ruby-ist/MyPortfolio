<template>
    <svg id="memphis" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 148.68037 406.99589">
        <rect class="memphis-shapes" x="31.80123" y="62.50194" width="34.54658" height="34.54658"/>
        <line id="memphis-h2" class="memphis-lines" x1="49.07454" y1="218.41201" x2="49.07453" y2="97.04853"/>
        <line id="memphis-h1" class="memphis-lines" x1="123.82977" y1="406.99589" x2="123.82975"/>
        <line id="memphis-v1" class="memphis-lines" y1="120.12146" x2="148.68037" y2="120.12143"/>
        <line id="memphis-v2" class="memphis-lines" x1="99.64153" y1="79.77522" x2="148.68037" y2="79.77519"/>
        <circle class="memphis-shapes" cx="111.76033" cy="108.05926" r="4.13143"/>
    </svg>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('#memphis-h1', {
            scrollTrigger: {
                trigger: '#memphis-v1',
                toggleActions: "restart none restart none"
            },
            scaleY: 0,
            transformOrigin: "top",
            ease: 'slow',
            duration: 0.7,
            delay: 0.5
        });
        gsap.from('#memphis-h2', {
            scrollTrigger: {
                trigger: '#memphis-v1',
                toggleActions: "restart none restart none"
            },
            scaleY: 0,
            transformOrigin: "bottom",
            ease: 'slow',
            duration: 0.7,
            delay: 0.5
        });
        gsap.from('#memphis-v1', {
            scrollTrigger: {
                trigger: '#memphis-v1',
                toggleActions: "restart none restart none"
            },
            scaleX: 0,
            transformOrigin: "left",
            ease: 'slow',
            duration: 0.7,
            delay: 0.5
        });
        gsap.from('#memphis-v2', {
            scrollTrigger: {
                trigger: '#memphis-v1',
                toggleActions: "restart none restart none"
            },
            scaleX: 0,
            transformOrigin: "center",
            ease: 'slow',
            duration: 0.7,
            delay: 0.5
        });
    }
});
</script>

<style scoped lang="scss">
#memphis {
    position: absolute;
    width: 240px;
    top: 0;
    left: 3%;

    .memphis-shapes {
        fill: #f15b2b;
    }

    .memphis-lines {
        fill: none;
        stroke: #393E46;
        stroke-miterlimit: 10;
        stroke-width: 2px;
    }
}
</style>