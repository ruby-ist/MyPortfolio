<template>
    <div id="profile">
        <div class="greetings">Hi, I'm</div>
        <div class="name">Sriram V</div>
        <div class="job"><span id="role"></span> Developer</div>

        <Photos/>

        <div class="vertical-line" id="social-media-line">
            <div class="icons">
                <i class="linkedin icon"></i>
                <i class="github icon"></i>
                <i class="whatsapp icon"></i>
                <i class="instagram icon"></i>
            </div>
        </div>
        <div class="vertical-line" id="email-line">
            <div class="mail-id">
                srira.venkat@gmail.com
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import Typed from "typed.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

type dataGroup = {
    colors: String[]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        colors: ['#42b883', '#e50500', '#f57b35', '#4D96FF']
    }),
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set('.mail-id', {
            rotate: 90,
            transformOrigin: 'right'
        });

        gsap.from('.icons i', {
            scrollTrigger: {
                trigger: ".icons",
                toggleActions: "restart none restart none"
            },
            scale: 0,
            duration: 1,
            stagger: -0.25,
        });

        let typed = new Typed('#role', {
            strings: ['Front-end', 'Back-end', 'Full-stack', 'Web'],
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,

            preStringTyped: (arrayPos) => {
                $('.job span').css('color', this.colors[arrayPos]);
            },

            onComplete: () => {
                setTimeout( () => {
                    $('.typed-cursor').hide()
                }, 500);
            }
        });
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sen&family=Ubuntu:wght@500&family=Cutive+Mono&display=swap');

#profile {
    padding: 320px 320px 560px;
    position: relative;

    .greetings {
        font-family: 'Sen', sans-serif;
        font-size: 2.2rem;
    }

    .name {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 5.5rem;
        margin: 60px auto;
    }

    .job {
        font-size: 2.4rem;
    }

    .role {
        color: #6BCB77;
    }

    #walle {
        position: absolute;
        height: 200px;
        width: 200px;
        bottom: 0;
        right: 20vw;

        .cls-1, .cls-24, .cls-4 {
            fill: none;
        }

        .cls-2 {
            fill: #a2b2b3;
        }

        .cls-16, .cls-20, .cls-3 {
            fill: #636767;
        }

        .cls-24, .cls-4 {
            stroke: #636767;
            stroke-miterlimit: 10;
            stroke-width: 0.5px;
        }

        .cls-22, .cls-5 {
            fill: #394848;
        }

        .cls-6 {
            fill: #ddeced;
        }

        .cls-21, .cls-7 {
            fill: #0c1112;
        }

        .cls-8 {
            clip-path: url(#clip-path);
        }

        .cls-9 {
            fill: #fff;
        }

        .cls-10 {
            clip-path: url(#clip-path-2);
        }

        .cls-11 {
            fill: #f49123;
        }

        .cls-12 {
            clip-path: url(#clip-path-3);
        }

        .cls-13 {
            fill: #c6690c;
        }

        .cls-14 {
            clip-path: url(#clip-path-4);
        }

        .cls-15 {
            fill: #424e4f;
        }

        .cls-16, .cls-20, .cls-21, .cls-22, .cls-24 {
            isolation: isolate;
        }

        .cls-16, .cls-21 {
            opacity: 0.41;
        }

        .cls-17 {
            fill: #f2791e;
        }

        .cls-18 {
            fill: #bedb45;
        }

        .cls-19 {
            fill: #f76f6f;
        }

        .cls-20 {
            opacity: 0.34;
        }

        .cls-22 {
            opacity: 0.78;
        }

        .cls-23 {
            clip-path: url(#clip-path-5);
        }

        .cls-24 {
            stroke-linecap: round;
            opacity: 0.46;
        }
    }

    .vertical-line {
        width: 4px;
        background: #40514E;
        position: absolute;

        &#social-media-line {
            height: 27rem;
            bottom: 0;
            left: 4.5rem;

            .icons {
                position: absolute;
                transform: translateX(-50%);
                left: 50%;
                bottom: 28rem;

                i {
                    color: #40514E;
                    margin: 10px auto;
                    font-size: xx-large;
                }
            }
        }

        &#email-line {
            height: 24rem;
            bottom: 0;
            right: 4.5rem;

            .mail-id {
                position: absolute;
                color: #40514E;
                font-size: 1.5rem;
                font-family: 'Cutive Mono', monospace;
                right: 50%;
                bottom: 25rem;
            }
        }
    }
}
</style>