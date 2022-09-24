<template>
    <section id="featured">
        <img id="mountain" src="~/assets/background/mountain.svg"/>
        <div class="ui huge orange centered header">Mini Projects</div>
        <div id="dijkstra_trace">
            <div class="ui large orange header">Dijkstra Trace</div>
            <div class="ui indigo header">A ruby gem package</div>
            <div id="rubygems"></div>
            <div class="package-info">
                A simple Dijkstra algorithm implementation to find the shortest path between any two points in the
                undirected graph.
            </div>
        </div>

        <div id="arcanechats">
            <div class="ui large red header">ArcaneChats</div>
            <div class="ui grey header">Chatting App</div>
            <div id="arcanechats-repo"></div>
            <div class="arcane-img" id="arcanechats-1"></div>
            <div class="arcane-img" id="arcanechats-2"></div>
            <div class="arcane-img" id="arcanechats-3"></div>

            <div class="project-info">
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
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 1,
                duration: 1
            }
        )

        gsap.fromTo('.large.orange.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            }
        )

        gsap.fromTo('.indigo.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            }
        )

        gsap.from('.package-info', {
                scrollTrigger: {
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                xPercent: -40,
                duration: 1
        })

        gsap.from('#rubygems', {
                scrollTrigger: {
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 0,
                xPercent: 20,
                duration: 1
        })

        gsap.fromTo('.large.red.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#arcanechats',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            }
        )

        gsap.fromTo('.grey.header',
            {
                opacity: 0,
                scaleX: 0,
            },
            {
                scrollTrigger: {
                    trigger: '#arcanechats',
                    toggleActions: 'restart none reverse none',
                    start: "-150% top",
                },
                opacity: 1,
                scaleX: 1,
                transformOrigin: 'left',
                duration: 1
            }
        )

        gsap.from('.project-info',{
            scrollTrigger: {
                trigger: '#arcanechats',
                toggleActions: 'restart none reverse none',
                start: "-150% top",
            },
            opacity: 0,
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1
        })

        gsap.from('#arcanechats-repo', {
            scrollTrigger: {
                trigger: '#arcanechats',
                toggleActions: 'restart none reverse none',
                start: "-150% top",
            },
            opacity: 0,
            scale: 0,
            transformOrigin: 'center',
            duration: 1
        })

        gsap.from('#arcanechats-1', {
            scrollTrigger: {
                trigger: '#arcanechats',
                toggleActions: 'restart none reverse none',
                start: "-150% top",
            },
            xPercent: -50,
            duration: 1
        })

        gsap.from('#arcanechats-2', {
            scrollTrigger: {
                trigger: '#arcanechats',
                toggleActions: 'restart none reverse none',
                start: "-150% top",
            },
            yPercent: -50,
            duration: 1
        })

        gsap.from('#arcanechats-3', {
            scrollTrigger: {
                trigger: '#arcanechats',
                toggleActions: 'restart none reverse none',
                start: "-150% top",
            },
            xPercent: 50,
            duration: 1
        })
    }
});
</script>

<style scoped lang="scss">
#featured {
    width: 100%;
    min-height: 150vh;
    background: #FEECE9;
    position: relative;
    padding: 0 10% 30%;

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

    #dijkstra_trace {
        position: relative;
        height: 90vh;
        .orange {
            color: #d86149 !important;
        }

        .indigo {
            color: #2F3A8F !important;
            font-family: monospace;
        }

        #rubygems {
            position: absolute;
            width: 55%;
            height: 60%;
            border-radius: 20px;
            background: url("/assets/dijkstra_trace.png") no-repeat top;
            background-size: cover;
            right: 0;
            top: 16%;
        }

        .package-info {
            position: absolute;
            padding: 50px;
            border-radius: 2px;
            left: 8%;
            top: 32%;
            background: #ffd6ce;
            color: #d86149;
            width: 40%;
        }
    }

    #arcanechats{
        height: 90vh;
        position: relative;

        .red{
            color: #da0037 !important;
        }

        .grey {
            color: #30475e !important;
            font-family: monospace;
        }

        .project-info{
            width: 32%;
            position: absolute;
            text-align: justify;
            top: 20%;
            font-size: 1.2rem;
        }

        #arcanechats-repo{
            position: absolute;
            width: 50%;
            height: 45%;
            border-radius: 20px;
            background: url("/assets/arcanechats-repo.png") no-repeat top;
            background-size: cover;
            right: 10%;
            top: 20%;
        }

        .arcane-img{
            position: absolute;
            width: 15%;
            height: 45%;
            border-radius: 5px;
        }


        #arcanechats-1{
            background: url("/assets/arcanechats-1.jpeg") no-repeat top;
            background-size: cover;
            left: 30%;
            top: 40%;
        }

        #arcanechats-2{
            background: url("/assets/arcanechats-2.jpeg") no-repeat top;
            background-size: cover;
            right: 2%;
            top: 7%;
        }

        #arcanechats-3{
            background: url("/assets/arcanechats-3.jpeg") no-repeat top;
            background-size: cover;
            right: -8%;
            top: 41%;
        }
    }
}
</style>