<template>
    <div class="mac-template">
        <img src="~/assets/background/mac-outline.svg" alt="mac"/>
        <div id="mac-carousel">
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/geobits-1.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/geobits-2.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/geobits-3.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/geobits-4.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/geobits-5.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/pingcoders-1.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/pingcoders-2.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/pingcoders-3.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/pingcoders-4.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/pingcoders-5.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/rubyonwasm-1.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/rubyonwasm-2.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/rubyonwasm-3.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/rubyonwasm-4.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/rubyonwasm-5.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/narrateit-1.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/narrateit-2.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/narrateit-3.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/narrateit-4.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/narrateit-5.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/flames-1.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/flames-2.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/flames-3.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/flames-4.webp"/>
            <img alt="preview" class="mac-carousel-img" src="/mac-carousel/flames-5.webp"/>
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
                    start: () => "top -" + (window.innerHeight * (i + 0.25)),
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
        background: black;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
@media only screen and (min-width: 576px) and (max-width: 768px){
    .mac-template{
        display: none;
    }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
    .mac-template{
        top: 32%;
        left: 8%;
        img{
            width: 360px;
        }
        #mac-carousel{
            width: 273px;
            height: 173px;
            top: 15px;
            left: 44px;
        }
    }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .mac-template{
        top: 20%;
        img{
            width: 360px;
        }
        #mac-carousel{
            width: 273px;
            height: 173px;
            top: 15px;
            left: 44px;
        }
    }
}
@media only screen and (min-width: 1680px){
    .mac-template{
        top: 15%;
        left: 25%;
        img{
            width: 660px;
        }
        #mac-carousel{
            width: 500px;
            height: 317px;
            top: 27px;
            left: 80px;
        }
    }
}
</style>