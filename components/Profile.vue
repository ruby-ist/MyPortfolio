<template>
    <div id="profile">
        <div class="greetings">Hi, I'm</div>
        <div class="name">Sriram V</div>
        <div class="job"><span id="role"></span> Developer</div>
        <img id="chair" alt="chair" src="~/assets/background/chair.svg"/>
        <img id="lamp" alt="lamp" src="~/assets/background/street-light.svg"/>

        <Photos/>

        <div class="vertical-line" id="social-media-line">
            <div class="icons">
                <a href="https://www.linkedin.com/in/srira-venkat/"><i class="linkedin link icon"></i></a>
                <a href="https://github.com/ruby-ist"><i class="github link icon"></i></a>
                <a href="https://wa.me/918344000240"><i class="whatsapp link icon"></i></a>
                <a href="https://www.instagram.com/_srira.me/"><i class="instagram link icon"></i></a>
            </div>
        </div>
        <div class="vertical-line" id="email-line">
            <div class="mail-id">
                <a href="mailto:srira.venkat@gmail.com">srira.venkat@gmail.com</a>
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
                setTimeout(() => {
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

    #chair {
        position: absolute;
        width: 250px;
        bottom: -1%;
        left: 12%;
    }

    #lamp {
        position: absolute;
        width: 30px;
        bottom: -1%;
        right: 8%;
    }

    .chair-piece {
        fill: #393e46;
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
                font-size: 1.5rem;
                font-family: 'Cutive Mono', monospace;
                right: 50%;
                bottom: 25rem;

                a{
                    color: #40514E;
                }
            }
        }
    }

    .link.icon{
        opacity: 1 !important;
    }

    .linkedin:hover{
        color: #0a66c2 !important;
    }

    .github:hover{
        color: #161b22 !important;;
    }

    .whatsapp:hover{
        color: #42c452 !important;
    }

    .instagram:hover{
        color: #f200b8 !important;
    }
}
</style>