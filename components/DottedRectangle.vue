<template>
    <div id="dotted-rect">
        <div class="dotted-rect-bg"></div>
        <div class="dots">
            <div v-for="i in [...Array(55).keys()]" class="dot"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.dot', {
            scrollTrigger: {
                trigger: "#dotted-rect",
                toggleActions: "restart none restart none",
                start: "-180% bottom",
            },
            stagger: {
                grid: [11, 5],
                from: "center",
                amount: 0.5
            },
            scale: 0,
            transformOrigin: "center",
            ease: "start",
            duration: 1.5
        });
    }
});
</script>

<style scoped lang="scss">
#dotted-rect{
    position: absolute;
    bottom: 15%;
    left: 3%;

    .dotted-rect-bg{
        height: 320px;
        width: 150px;
        background: linear-gradient(210deg, #1A2A7D, #0C133A);
    }

    .dots{
        display: flex;
        justify-content: space-evenly;
        flex-flow: row wrap;
        width: 150px;
        position: absolute;
        top: -20%;
        right: -40%;

        .dot{
            width: 10px;
            height: 10px;
            background: #3E3E3E;
            margin: 10px;
        }
    }
}
</style>