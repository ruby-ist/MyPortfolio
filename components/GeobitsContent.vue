<template>
    <div id="geobits-info-1" class="content-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi
    </div>
    <div id="geobits-info-2" class="content-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div id="geobits-info-3" class="content-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div id="geobits-info-4" class="content-info">
        Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".content-info", {zIndex: (i, target, targets) => targets.length - i});
        let texts: HTMLElement[] = gsap.utils.toArray(".content-info");

        texts.forEach((text, i) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    start: () => "top -" + (window.innerHeight * i),
                    end: () => "+=" + window.innerHeight,
                    toggleActions: "play none reverse none",
                    invalidateOnRefresh: true,
                }
            });
            tl
                .fromTo(text, {
                    rotateX: 90,
                    transformOrigin: 'bottom',
                    duration: 0.5
                }, {
                    rotateX: 0,
                    duration: 0.5,
                    opacity: 1
                }).to(text, {
                    duration: 0.5,
                    opacity: 0,
                    rotateX: 90,
                    transformOrigin: "top"
                }, 0.66)
            ;
        });
    }
})
</script>

<style scoped lang="scss">
.content-info {
    position: absolute;
    padding: 50px 150px;
    opacity: 0;
    background: #F5F6F9;

    &:first-child {
        opacity: 1;
    }
}
</style>