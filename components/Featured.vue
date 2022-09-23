<template>
    <section id="featured">
        <img id="mountain" src="~/assets/background/mountain.svg"/>
        <div class="ui huge orange centered header">Featured Project</div>
        <div>
            <div class="ui large orange header">Dijkstra Trace</div>
            <div class="ui indigo header">A ruby gem package</div>
            <div id="rubygems"></div>
            <div class="package-info">
                A simple Dijkstra algorithm implementation to find the shortest path between any two points in the
                undirected graph.
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set('.centered.header', {opacity: 0});
        gsap.fromTo('.centered.header',
            {opacity: 0},
            {
                scrollTrigger: {
                    trigger: '#featured',
                    toggleActions: 'restart none reverse none',
                    start: "-90% top",
                },
                opacity: 1,
                duration: 1
            })

        gsap.fromTo('.large.orange.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#featured',
                    toggleActions: 'restart none reverse none',
                    start: "-90% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            })

        gsap.fromTo('.indigo.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#featured',
                    toggleActions: 'restart none reverse none',
                    start: "-90% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            })

        gsap.from('.package-info',
            {
                scrollTrigger: {
                    trigger: '#featured',
                    toggleActions: 'restart none reverse none',
                    start: "-98% top",
                },
                opacity: 0.5,
                xPercent: -40,
                duration: 1
            })

        gsap.from('#rubygems',
            {
                scrollTrigger: {
                    trigger: '#featured',
                    toggleActions: 'restart none reverse none',
                    start: "-98% top",
                },
                opacity: 0,
                xPercent: 20,
                duration: 1
            })
    }
});
</script>

<style scoped lang="scss">
#featured {
    width: 100%;
    height: 150vh;
    background: #FEECE9;
    position: relative;
    padding: 0 10% 5%;

    #mountain {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
    }

    .centered {
        text-align: center;
        margin-bottom: 80px;
    }

    .orange {
        color: #d86149 !important;
    }

    .indigo {
        color: #2F3A8F !important;
        font-family: monospace;
    }

    #rubygems {
        position: absolute;
        width: 42%;
        height: 32%;
        border-radius: 20px;
        background: url("/assets/dijkstra_trace.png") no-repeat top;
        background-size: cover;
        right: 12%;
        top: 20%;
    }

    .package-info {
        position: absolute;
        padding: 50px;
        border-radius: 2px;
        left: 18%;
        top: 28%;
        background: #ffd6ce;
        color: #d86149;
        width: 30%;
    }
}
</style>