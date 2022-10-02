<template>
    <div class="phone-template">
        <img src="~/assets/background/iphone-outline.svg" alt="phone"/>
        <div id="iphone-carousel">
            <img class="iphone-carousel-img" src="/static/iphone-carousel/geobits-1.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/geobits-2.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/geobits-3.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/geobits-4.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/geobits-5.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/pingcoders-1.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/pingcoders-2.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/pingcoders-3.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/pingcoders-4.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/pingcoders-5.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/rubyonwasm-1.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/rubyonwasm-2.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/rubyonwasm-3.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/rubyonwasm-4.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/rubyonwasm-5.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/narrateit-1.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/narrateit-2.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/narrateit-3.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/narrateit-4.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/narrateit-5.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/flames-1.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/flames-2.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/flames-3.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/flames-4.png"/>
            <img class="iphone-carousel-img" src="/static/iphone-carousel/flames-5.png"/>
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
                    start: () => "top -" + (window.innerHeight * (i + 0.25)),
                    end: () => "+=" + window.innerHeight,
                    toggleActions: "play complete complete reset",
                    invalidateOnRefresh: true,
                }
            });
            tl.to(image, {
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
    top: 30%;
    left: -4%;

    img {
        position: absolute;
        width: 190px;
        z-index: 5;
    }

    #iphone-carousel {
        width: 171px;
        height: 354px;
        position: absolute;
        top: 21px;
        left: 10px;
        z-index: 4;
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

@media only screen and (max-width: 480px) {
    .phone-template{
        top: 650%;
        left: 75%;

        img{
            width: 80px;
        }

        #iphone-carousel{
            width: 72px;
            height: 149px;
            top: 9px;
            left: 4px;
        }
    }
}
</style>