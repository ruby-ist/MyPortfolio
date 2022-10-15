<template>
    <section id="featured">
        <img alt="mountain" id="mountain" src="~/assets/background/mountain.svg"/>
        <div class="ui huge orange centered header">Mini Projects</div>
        <div id="dijkstra_trace">
            <div class="ui huge orange header">Dijkstra Trace</div>
            <div class="ui indigo header">A ruby gem package</div>
            <div id="dijkstra_icons" class="orange other-icons">
                <a href="https://github.com/ruby-ist/dijkstra_trace/packages/1558735"><i class="big github link icon"></i></a>
                <a href="https://github.com/ruby-ist/ArcaneChats"><i class="big sketch link icon"></i></a>
            </div>
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
            <div class="ui huge red header">ArcaneChats</div>
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
                <div class="grey other-icons">
                    <a href="https://rubygems.org/gems/dijkstra_trace"><i class="large github link icon"></i></a>
                    <a href="https://arcanechats.herokuapp.com"><i class="large linkify link icon"></i></a>
                </div>
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

        gsap.fromTo('.huge.orange.header',
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

        gsap.from('#dijkstra_icons', {
            scrollTrigger: {
                trigger: '#dijkstra_trace',
                toggleActions: 'restart none none none',
                start: "-150% top",
            },
            yPercent: -100,
            duration: 1
        })

        gsap.fromTo('.huge.red.header',
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

    .orange {
        color: #d86149 !important;
    }

    .other-icons{
        i{
            margin: 20px 10px 0 0;
        }
    }

    #dijkstra_trace {
        position: relative;
        min-height: 90vh;

        .indigo {
            color: #2F3A8F !important;
            font-family: 'Anonymous Pro', monospace;
            margin-top: 0;
        }

        a {
            color: #d86149 !important;
        }

        #rubygems {
            position: absolute;
            width: 44vw;
            height: 30vw;
            border-radius: 20px;
            background: url("/dijkstra_trace.webp") no-repeat top;
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
            font-family: 'Sen', sans-serif;
        }
    }

    #arcanechats{
        min-height: 90vh;
        position: relative;

        .red{
            color: #da0037 !important;
        }

        .grey {
            color: #30475e !important;
            font-family: 'Anonymous Pro', monospace;
            margin-top: 0;
        }

        a {
            color: #30475e !important;
        }

        .project-info{
            width: 32%;
            position: absolute;
            text-align: justify;
            top: 20%;
            font-size: 1.2rem;
            font-family: 'Sen', sans-serif;
        }

        #arcanechats-repo{
            position: absolute;
            width: 42vw;
            height: 23vw;
            border-radius: 20px;
            background: url("/arcanechats-repo.webp") no-repeat top;
            background-size: cover;
            right: 10%;
            top: 20%;
        }

        .arcane-img{
            position: absolute;
            width: 13vw;
            height: 25vw;
            border-radius: 5px;
        }


        #arcanechats-1{
            background: url("/arcanechats-1.webp") no-repeat top;
            background-size: cover;
            right: 55%;
            top: 42%;
        }

        #arcanechats-2{
            background: url("/arcanechats-2.webp") no-repeat top;
            background-size: cover;
            right: 2%;
            top: 7%;
        }

        #arcanechats-3{
            background: url("/arcanechats-3.webp") no-repeat top;
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
            padding-bottom: 10px;
        }
    }

    .huge.header{
        font-family: 'Alegreya Sans', sans-serif;
    }
}

@media only screen and (max-width: 576px) {
    #featured{
        #dijkstra_trace{
            #rubygems{
                width: 100%;
                height: 30%;
                border-radius: 10px;
                top: 23%;
                left: 50%;
                transform: translateX(-50%) !important;
            }

            .package-info{
                padding: 15px 30px;
                font-size: 1rem;
                border-radius: 5px;
                top: 56%;
                width: 100%;
                line-height: initial;
                left: 50%;
                transform: translateX(-50%) !important;
                background: transparent;
            }
        }

        #arcanechats{
            #arcanechats-repo{
                display: none;
            }

            .arcane-img{
                top: 18% !important;
                width: 100px;
                height: 194px;
            }

            #arcanechats-1{
                left: 0;
            }
            #arcanechats-2{
                right: 50%;
                transform: translateX(50%) !important;
            }
            #arcanechats-3{
                right: 0;
            }
            .project-info{
                font-size: 1rem;
                width: 100%;
                top: 55%;
            }
        }
    }
}
@media only screen and (min-width: 576px) and (max-width: 992px){
    #featured{
        #dijkstra_trace{
            #rubygems{
                width: 60vw;
                height: 40vw;
                top: 23%;
                left: 50%;
                transform: translateX(-50%) !important;
            }
            .package-info{
                width: 84vw;
                font-size: 1rem;
                top: initial;
                bottom: 5%;
                left: 50%;
                transform: translateX(-50%) !important;
                background: transparent;
            }
        }
        #arcanechats{
            #arcanechats-repo{
                display: none;
            }
            #arcanechats-1{
                top: initial;
                left: initial;
                right: 25%;
                bottom: 8%;
            }
            #arcanechats-2{
                top: initial;
                right: 8%;
                bottom: 18%;
            }
            #arcanechats-3{
                top: initial;
                right: -5%;
                bottom: 28%;
            }
            .project-info{
                font-size: 1rem;
                width: 43vw;
            }
        }
    }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {
    #featured{
        #arcanechats{
            #arcanechats-1{
                display: none;
            }
        }
    }
}
@media only screen and (min-width: 992px) and (max-width: 1200px){
    #featured{
        #dijkstra_trace{
            .package-info{
                left: 0;
            }
        }
        #arcanechats{
            #arcanechats-1{
                right: 48%;
            }
        }
    }
}
</style>