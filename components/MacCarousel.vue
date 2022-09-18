<template>
    <div class="mac-template">
        <img src="~/assets/mac-outline.svg" alt="mac"/>
        <div id="mac-carousel">
            <img class="mac-carousel-img first-img" src="~/assets/mac-carousel/geobits-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-4.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.set("#mac-carousel img", {zIndex: (i, target, targets) => targets.length - i});
        let images: HTMLElement[] = gsap.utils.toArray('.mac-carousel-img');
        images.forEach((image, i) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    start: () => "top -" + (window.innerHeight * (i + 1)),
                    end: () => "+=" + window.innerHeight,
                    toggleActions: "play complete reverse reset",
                    invalidateOnRefresh: true,
                }
            })
            tl.to(image, {
                opacity: 0,
                duration: 0.5,
            });
        });
    }
});
</script>

<style scoped lang="scss">
.mac-template {
    position: absolute;
    top: 10%;
    left: 27%;

    img {
        position: absolute;
        width: 500px;
        z-index: 3;
    }

    #mac-carousel {
        width: 379px;
        height: 240px;
        position: absolute;
        top: 21px;
        left: 61px;
        z-index: 2;
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;

        img {
            width: 379px;
            height: 240px;
        }
    }
}
</style>