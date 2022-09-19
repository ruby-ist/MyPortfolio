<template>
    <div class="mac-template">
        <img src="~/assets/mac-outline.svg" alt="mac"/>
        <div id="mac-carousel">
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-4.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/geobits-5.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/pingcoders-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/pingcoders-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/pingcoders-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/pingcoders-4.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/pingcoders-5.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/rubyonwasm-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/rubyonwasm-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/rubyonwasm-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/rubyonwasm-4.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/rubyonwasm-5.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/narrateit-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/narrateit-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/narrateit-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/narrateit-4.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/narrateit-5.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/flames-1.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/flames-2.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/flames-3.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/flames-4.png"/>
            <img class="mac-carousel-img" src="~/assets/mac-carousel/flames-5.png"/>
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
                    start: () => "top -" + (window.innerHeight * (i + 0.8)),
                    end: () => "+=" + window.innerHeight,
                    toggleActions: "play complete complete reset",
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
            width: 100%;
            height: 100%;
        }
    }
}
</style>