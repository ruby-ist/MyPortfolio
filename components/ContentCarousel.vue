<template>
    <div class="content-carousel">
        <div class="gradient-layer"></div>
        <div class="content-info">
            GeoBITS is an online map made for navigating around and finding classes inside the
            Bannari Amman Institute of Technology college campus. The special thing about this
            project, it done without using any pre-existing Map APIs as they were not yet to
            date at the time of the project.
        </div>
        <div class="content-info"></div>
        <div class="content-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
            in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="content-info"></div>
        <div class="content-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="content-info"></div>
        <div class="content-info">
            Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
<!--        <div class="content-info"></div>-->
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        let texts: HTMLElement[] = gsap.utils.toArray(".content-info");

        gsap.to(texts, {
            scrollTrigger: {
                trigger: "#projects",
                scroller: "body",
                start: () => "top top",
                end: () => "+=" + window.innerHeight * (texts.length/2 - 1),
                toggleActions: "play none reverse none",
                scrub: true,
            },
            yPercent: -100 * (texts.length - 1),
            ease: "none"
        });
    }
})
</script>

<style scoped lang="scss">
.content-carousel {
    position: absolute;
    top: 30%;
    left: 15%;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.5rem;
    height: 350px;
    width: 70%;
    overflow-y: hidden;

    .gradient-layer{
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient( #F5F6F9, transparent, transparent, transparent, #F5F6F9);
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    .content-info {
        height: 350px;
        background: #F5F6F9;
        text-align: justify;
        padding: 15% 0;
    }
}
</style>