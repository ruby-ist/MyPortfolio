<template>
    <div class="Websites-log">
        <GeobitsLogo class="logo-img"/>
        <img class="logo-img" src="~/assets/logos/pingcoders.svg" alt="pingCoders"/>
        <img class="logo-img" src="~/assets/logos/rubyonwasm.svg" alt="rubyOnWASM"/>
        <img class="logo-img" src="~/assets/logos/narrateit.svg" alt="narrateIt"/>
        <img class="logo-img" src="~/assets/logos/flames.svg" alt="narrateIt"/>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted(){
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".logo-img", {zIndex: (i, target, targets) => targets.length - i});
        let logos: HTMLElement[] = gsap.utils.toArray('.logo-img');
        logos.forEach((logo, i, logos) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    start: () => "top -" + (window.innerHeight * (5 * (i + 1) - 1)),
                    end: () => "+=" + window.innerHeight * 5,
                    toggleActions: "play complete complete reset",
                }
            })
            tl.to(logo, {
                opacity: 0,
                duration: 0.5,
            }).to(logos[i+1], {
                opacity: 1,
                duration: 0.5,
            });
        });
    }
});
</script>

<style scoped lang="scss">
.logo-img {
    position: absolute;
    height: 40px;
    width: auto;
    opacity: 0;
    top: 8%;
    left: 15%;
    padding-right: 20%;

    &:first-child {
        opacity: 1;
    }
}
</style>