<template>
    <div class="phone-template">
        <img src="~/assets/background/iphone-outline.svg" alt="phone"/>
        <div id="iphone-carousel">
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/geobits-1.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/geobits-2.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/geobits-3.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/geobits-4.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/geobits-5.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/pingcoders-1.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/pingcoders-2.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/pingcoders-3.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/pingcoders-4.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/pingcoders-5.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/rubyonwasm-1.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/rubyonwasm-2.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/rubyonwasm-3.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/rubyonwasm-4.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/rubyonwasm-5.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/narrateit-1.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/narrateit-2.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/narrateit-3.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/narrateit-4.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/narrateit-5.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/flames-1.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/flames-2.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/flames-3.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/flames-4.webp"/>
            <img alt="preview" class="iphone-carousel-img" src="/iphone-carousel/flames-5.webp"/>
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
        background: black;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
@media only screen and (min-width: 576px) and (max-width: 768px){
    .phone-template{
        top: 23%;
        left: 32%;
        img{
            width: 150px;
        }
        #iphone-carousel{
            width: 135px;
            height: 280px;
            left: 8px;
            top: 16px;
        }
    }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
    .phone-template{
        display: none;
    }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .phone-template {
        img {
            width: 150px;
        }
        #iphone-carousel {
            width: 135px;
            height: 280px;
            left: 8px;
            top: 16px;
        }
    }
}
@media only screen and (min-width: 1680px) {
    .phone-template{
        img{
            width: 250px;
        }
        #iphone-carousel{
            width: 225px;
            left: 13px;
            height: 467px;
            top: 27px;
        }
    }

}
</style>