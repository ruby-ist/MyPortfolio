<template>
    <div class="phone-template">
        <img src="~/assets/iphone-outline.svg" alt="phone"/>
        <div id="iphone-carousel">
            <img class="iphone-carousel-img first-img" src="~/assets/iphone-carousel/geobits-1.png"/>
            <img class="iphone-carousel-img" src="~/assets/iphone-carousel/geobits-2.png"/>
            <img class="iphone-carousel-img" src="~/assets/iphone-carousel/geobits-3.png"/>
            <img class="iphone-carousel-img" src="~/assets/iphone-carousel/geobits-4.png"/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set("#iphone-carousel img", {zIndex: (i, target, targets) => targets.length - i});
        let images: HTMLElement[] = gsap.utils.toArray('.iphone-carousel-img');
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
                scaleX: 0,
                transformOrigin: 'left',
                opacity: 0,
                duration: 0.5,
            });
        });
    }
});
</script>

<style scoped lang="scss">
.phone-template {
    position: absolute;
    top: 35%;
    left: 2%;

    img {
        position: absolute;
        width: 150px;
        z-index: 5;
    }

    #iphone-carousel {
        width: 135px;
        height: 279px;
        position: absolute;
        top: 18px;
        left: 8px;
        z-index: 4;
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;

        img {
            width: 135px;
            height: 279px;
        }
    }
}
</style>