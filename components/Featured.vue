<template>
    <section id="featured">
        <img id="mountain" src="~/assets/background/mountain.svg"/>
        <div class="ui huge orange centered header">Mini Projects</div>
        <div id="dijkstra_trace">
            <div class="ui large orange header">Dijkstra Trace</div>
            <div class="ui indigo header">A ruby gem package</div>
            <div id="rubygems"></div>
            <div class="package-info">
                Dijkstra trace is an ruby gem to find the shortest path between two places in the graph using
                the same algorithm's implementation. The user would need first need to create an object for the
                graph and can add edges of that graph object. The edge name can be a number, character or
                strings. After adding the edges, the shortest path between any two edges can be easily calculated
                with a function.
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
                ArcaneChats is a minimal chatting app I've created to figure out how the backend structure should
                be designed for an messaging facility. The app is initially created with Web socket supporting
                feature but since I could not find a suitable hosting service for an redis database, I hosted an app
                with ajax calls for message updates. Since the app is created only as an hobby, only mobile view is
                developed.
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
                    toggleActions: 'restart none none none',
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
                    toggleActions: 'restart none none none',
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
                    toggleActions: 'restart none none none',
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
                    toggleActions: 'restart none none none',
                    start: "-150% top",
                },
                xPercent: -40,
                duration: 1
        })

        gsap.from('#rubygems', {
                scrollTrigger: {
                    trigger: '#dijkstra_trace',
                    toggleActions: 'restart none none none',
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
            yPercent: 50,
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
        min-width: 100%;
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
            padding: 25px 40px;
            text-align: justify;
            font-size: 1.1rem;
            border-radius: 5px;
            left: 8%;
            top: 28%;
            background: #ffd6ce;
            color: #d86149;
            width: 40%;
            line-height: 1.7rem;
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

        .project-info{
            position: absolute;
            text-align: justify;
            font-size: 1.1rem;
            border-radius: 5px;
            left: 0;
            top: 15%;
            width: 35%;
            color: #da0037;
            line-height: 1.7rem;
        }
    }
}
</style>