<template>
    <div id="profile">
        <div class="words">
            <div class="greetings">Hi, I'm</div>
            <div class="name">Sriram V</div>
            <div @click="typeIt" class="job"><span id="role"></span> Developer</div>
            <a href="/Sriram-V-Resume.pdf" class="resume" download>
                <i class="download icon"></i>
                Resume
            </a>
        </div>
        <img id="chair" alt="chair" src="~/assets/background/chair.svg"/>
        <img id="lamp" alt="lamp" src="~/assets/background/street-light.svg"/>
        <div class="light"></div>

        <Photos/>

        <div class="vertical-line" id="social-media-line">
            <div class="icons">
                <a href="https://www.linkedin.com/in/srira-venkat/" target="_blank"><i class="linkedin link icon"></i></a>
                <a href="https://github.com/ruby-ist" target="_blank"><i class="github link icon"></i></a>
                <a href="https://www.hackerrank.com/srira" target="_blank"><i class="hackerrank link icon"></i></a>
                <a href="https://www.codewars.com/users/Sriram2311" target="_blank">
                    <svg class="codewars icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 223.59879 220.34131">
                        <path class="cls-1" d="M505.9622,305.478a10.92262,10.92262,0,0,0-5.61-9.93c-2.27-1.3-2.88-3.4-2.83-5.91.1-4.46.26-8.79-3.45-12.46-1.57-1.55-1.9-4.45-.54-6.97,1.62-3,1.86-5.99-.94-8.56a2.61426,2.61426,0,0,1-1.07-2.62c2.48-8.13-3.68-13.93-5.59-20.87-.68-2.45-2.15-4.39-5.3-4.23-2.26.11-2.79-1.48-3.2-3.55-1.23-6.19-5.16-9.36-11.57-9.2-3.75.1-6.42-.63-8.77-4.01-3.64-5.27-9.47-5.59-15.19-4.57-2.85.51-5.5-.13-8.19-.14-9.84-.06-18.4-3.59-24.51-10.63-3.8-4.38-7.86-2.43-11.67-3.25-4.13-.9-8.46-.82-12.46-2.61-2.99-1.33-4.66,1-6.23,2.83-2.28,2.68-4.32,3.36-8.09,2.15-5.31-1.71-10.99-2.18-15.11,3.66-2.3,3.27-6.38,4.6-9.84,6.53-1.87,1.04-4.27,1.9-4.87,3.99-1.63,5.61-5.26,9.27-10.04,12.25-2,1.25-2.92,3.63-3.34,5.92-.67,3.67-2.83,5-6.33,4.68-3.83-.35-8.25,2.81-11.61005-2.22a.35686.35686,0,0,0-.09.04c1.86,7.52-3.18,9.93-7.44,14.13-3.38,3.35-9.52,7.22-8.14,14.24a3.2034,3.2034,0,0,1-1.61,3.42c-5.53,2.83-6.94,7.46-4.96,12.9,2.15,5.9-2.01,9.68-3.91,14.26v3.98c2.41,3.35,3.27,7.91,7.69,9.72a1.94838,1.94838,0,0,1,.66,1.74c-1.41,5.65.26,11.21.38,16.81.01.44.01,1.17.25,1.29,5.54,2.65,3.85,5.65.6,8.93-.83.84-.63,2.22-.26,3.35,1.69,5.23.12,11.3,4.26,15.98.78.87.48,2.89.32,4.35-.5,4.68,1.72,7.72,5.87,9.18,3.07,1.09,4.63,2.89,4.92,6.06.57,6.04,4.54,8.99,9.97,10.09a13.8429,13.8429,0,0,1,8.37,4.75c3.7,4.38,8.81,5.03,14.05,3.97,2.71-.55,4.94-1.26,7.14,1.26,1.48,1.7,4.08,1.47,6.12,1.6,6.42.4,11.25,3.57,15.49,7.97,2.39,2.47,4.94,4.39,8.62,4.16a4.33276,4.33276,0,0,1,3.87006,1.82992,4.66578,4.66578,0,0,0,.65.75c4.88,4.07,24.69,4.67,29.79.79a3.71463,3.71463,0,0,1,3.59-.72c6.88,1.66,13.26,1.77,16.49-6.3.82-2.04,2.65-2.03,4.56-2.17,8.54-.61,13.09-4.69,14.82-13.24.51-2.5,1.17-4.46,4.22-4.55a3.79829,3.79829,0,0,0,2.65-1.06c3.66-4.9,10.35-6.76,12.87-12.73,1.36005-3.2,3.55-4.61,6.99-4.08,3.08.48,4.99-.61,5.82-3.79a5.19058,5.19058,0,0,1,2.3-3.13c6.4-2.96,9.62-9.39,12.5-14.59,3.84-6.93,5.97-15.4,7.66-23.16C507.84221,318.528,505.9322,311.698,505.9622,305.478Zm-101.22-60.49c.55-3.39,2.26-5.14,5.61-4.89,3.27.26,5.82-1.3,8.14-3.06,4.74-3.58,11.42-1.36,15.91-5.67,1.02-.99,2.56.33,3.55,1.08a12.276,12.276,0,0,0,11.7,1.99c2.35-.73,4.02-.52,5.1,2.16,1.3,3.25,3.91,4.78,7.5,4.39,2.33-.25,3.68.73,4.38,3.03.36,1.2,1.14,2.83,2.12,3.2,6.47,2.41,5.57,9.17,8.33,13.72,1.63,2.7.51,4.61-2.91,3.78-4.38995-1.08-8.56-3.47-13.33-1.14-.8.39-2.68-.48-3.54-1.32-5.07-4.91-10.63-3.67-16.08-1.23a9.01235,9.01235,0,0,1-5.61.63c-4.37-.67-8.64-.15-11.88,3.28-1.58,1.66-3.38,1.77-5.4,1.79-1.78.02-4.02-.53-5.13,1.13-4.25,6.36-12.42,8.81-15.77,16.08-.64,1.39-1.12,4.02-3.54,3.35-2.47-.7-2-3.08-1.81-5.96-2.54-4.56.78-10.04-.09-15.5-.18-1.15-.47-2.22.9-2.99,2.87-1.61005,3.21-4.41,3.11-7.31-.07-1.98.14-3.89,2.56-4.01C402.83223,251.318,404.19221,248.388,404.7422,244.988Zm-56.03,14.05c4.27-3.24,3.55-6.99,2.81-11.07-.56-3.05,3.56-14.91,5.9-16.94,1.11005-.97,2.52-1.89,3.08-3.15,2.3-5.22,6.54-7.58,11.81-8.66a5.57147,5.57147,0,0,0,2.24-.84c6.91-5.33,6.9-5.35,15.61-5.62.6.04,2.58.13,4.56006.28,5.42.41,6.16,1.69,3.72,6.35-1.6,3.03-4.04,5.62-4.4,9.3-.16,1.66-1.91,1.99-3.32,2.57-7.01,2.89-9.01,6.2-8.01,13.71.26,1.92-.91,2.7-1.81,3.77-3.02,3.61-5.69,7.23-3.87,12.43a4.90157,4.90157,0,0,1-.85,4.26c-1.81,2.59-1.63,5.21-.26,7.92.44.87,1.14,2.21.8,2.76-4.53,7.25,2.24,10.95,4.97,15.82.91,1.61,2.53,2.76.76,4.64-1.8,1.93-3.04-.06-4.66-.49-5.79-1.53-9.78-6.35-15.44-7.97-.63-.18-1.57-.44-1.72-.88-1.95-5.62-8.4-8.47-9.12-14.78a8.3034,8.3034,0,0,0-2.79-5.07C345.98222,264.638,346.12221,260.998,348.7122,259.038Zm-36.91,31.39a2.52284,2.52284,0,0,0,.3-.89c-1.56-1.84-5.98-1.39-5.43-4.12.99-4.92-.67-10.44,2.69-14.77a16.5344,16.5344,0,0,0,3.3-7.04c1.05-5.13,5.64-7.98,8.38-12.03,1.22-1.82,4.1-.78,3.8,2.02-.52,4.91.02,9.14,4.1,12.53,1.26,1.06,1.22,2.99.72,4.7-1.86,6.29.6,10.63,6.26,13.39a5.532,5.532,0,0,1,3.52,4.93c.32,5.42,3.87,7.25,8.64,7.62,1.47.11,3.14-.28,3.98,1.36,3.66,7.16,10.89,7.29,17.36,8.59,3.52.7,7.26.39,10.89.46,2.08.04,3.76,1.21,2.45,2.93a53.28533,53.28533,0,0,1-6.94,7.79c-4.58,4.07-10.46,3.57-15.38,6.35-4.2,2.37-10.33,3.03-16.35,1.79a49.98991,49.98991,0,0,1-19.03-8.16c-3.01-2.09-6.25-3.02-6.59-7.3-.24-3.03-2.85-4.32-4.99-5.78-5.42-3.68-6.1-9.14-1.68-14.37Zm43.56,82.88c-5.13.09-6.85-1.57-7.43-6.19-2.32,6.86-2.23,6.32-9.33,5.13-4.05-.68-5.74-4.06-8.87-5.71-4.8-2.53-10.1-4.82-13.91-10.02-3.12-4.25-3.67-8.2-4.22-12.68a2.12619,2.12619,0,0,1,2.43-2.45,6.8263,6.8263,0,0,1,3.34.65c4.01,2.56,8.28-3.1,11.57-.07,3.09,2.84,6.03,4.96,10.24,5.14,1.63.07,3.77,1.11,4.79-.16,3.37-4.2,7.56-2.65,11.67-2.31,3.26.28,6.26-.25,8.31-3.28,1.15-1.7,3.01-1.77,4.88-1.84,4.36-.18,8.2-1.25,9.78-6.02.4-1.21,1.47-1.58,2.62-2,1.2-.45,3-1.24,3.17-2.14,1.12-5.71,7.16-7.53,9.34-12.29.37-.81.82-1.53,1.77-1.39a1.61563,1.61563,0,0,1,1.31,1.84c-.73,5.48,3.78,11.07-.42,16.52a3.76286,3.76286,0,0,0-.52,3.28c1.85,3.45-.42,5.58-1.63,8.47-1.97,4.73-6.5,7.58-8.45,11.18-3.23,5.95-7.13,7.8-12.73,10.46-5.85,2.78006-10.81,5.77-17.71,5.88007Zm86.73-22.93c.58,6.54.26,11.62-4.1,16.61-1.58,1.81-.88,4.79-.81,7.27.07,2.46-.75,4.41-3.32,4.71-4.5.53-6.54,3.73-7.93,7.29-1.08,2.76-2.68,3.98-5.52,3.91-.82-.02-1.93994-.23-2.43.2-5.84,5.25-13.38,5.59-20.46,6.86a35.91754,35.91754,0,0,1-12.48-.4c-2.98-.55-5.71-2.44-8.89-2.81-1.14-.13-2.38-1.08-2.15-2.34.39-2.08,2.09-.99,3.23-.84,8.22,1.07995,13.35-2.45,14.98-10.7a6.95154,6.95154,0,0,1,4.25-5.52,14.41531,14.41531,0,0,0,8.66-10.71,10.54463,10.54463,0,0,1,3.35-5.75c3.5-3.36,4.32-7.97,3.59-12.78-.27-1.76-.41-2.92,1.59-4.45,3.16-2.42,1.79-6.55.57-9.53a15.946,15.946,0,0,1-1.42-7.08c.11-2.07-.11-4.24-1.74-5.47-4.05-3.08-3.43-7.5-4.18-11.71,1.95-.06,2.98,2.92,5.37.59,1.38-1.34,3.77.83,4.48,2.05,1.88,3.19,4.44,4.43,7.9,5.1,4.32.83,7.81,2.89,8.51,7.97.14,1.04,1.57,2.12,2.66,2.75,2.6,1.52,3.33,3.95,3.68,6.63.16,1.15-.31,2.77.31,3.39C444.25221,340.15805,441.6522,345.348,442.09221,350.378Zm43-31.46a8.41865,8.41865,0,0,0-1.1,8.97c3.29,6.74-1.4,11.16-4.55,15.4-1.86,2.49-3.79,4.88-4.79,7.73a7.69539,7.69539,0,0,1-3.94,4.19,2.815,2.815,0,0,1-3.62-.69,2.61921,2.61921,0,0,1-.6-3.13c2.39-5.43.88-9.69-4.22-12.57-1.92-1.09-1.7-2.51-1.42-4.22,1.07-6.7-.55-10.05-6.72-12.52-2.8-1.12-3.55-2.64-3.77-5.47-.5-6.53-2.35-8.28-8.85-9-2.11-.23-3.56-.72-3.67-3.06-.06-1.46-.83-3.09-1.92-3.24-6.07-.87-10.93-5.75-17.18-5.44-3.07.16-5.98-1.81-9.11-.29-.95.47-1.83-.54-2.35-1.43-.71-1.21-.11005-2.18.69-3.12,3.1-3.68,7.49-5.45,11.71-7.01,5.93-2.17,12.18-3.49,18.32-5.07,4.6-1.18,8.47,2.57,12.99,2.13-.55,5.6,2.63,3.52,5.98,3.75a15.77248,15.77248,0,0,1,12.42,7.05c2.37,3.52,4.98,7.33,10.2,7.96,3.38.4,1.54,3.75,1.79,4.63.35,4.77.02,8.47,3.69,10.88C486.4922,316.288,485.86223,317.938,485.09221,318.918Z" transform="translate(-283.46214 -195.57568)"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="vertical-line" id="email-line">
            <div class="mail-id">
                <a @mouseenter="lightOn"
                   @mouseleave="lightOff"
                   href="mailto:srira.venkat@gmail.com">srira.venkat@gmail.com</a>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import Typed from "typed.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import $ from 'jquery'

type dataGroup = {
    colors: String[]
    started: false
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        colors: ['#42b883', '#e50500', '#4586FF'],
        started: false
    }),
    methods: {
        lightOn() {
            $('.light').css('opacity', '1');
        },
        lightOff() {
            $('.light').css('opacity', '0');
        },
        typeIt() {
            $('#role')[0].innerHTML = "";
            if (!this.started) {
                this.started = true;
                let typed = new Typed('#role', {
                    strings: ['Front-end', 'Back-end', 'Web'],
                    typeSpeed: 30,
                    backSpeed: 30,
                    backDelay: 800,

                    preStringTyped: (arrayPos) => {
                        $('.job span').css('color', this.colors[arrayPos]);
                    },

                    onComplete: () => {
                        setTimeout(() => {
                            $('.typed-cursor').hide();
                            this.started = false;
                        }, 500);
                    }
                });
            }
        }
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set('.mail-id', {
            rotate: 90,
            transformOrigin: 'right'
        });

        gsap.from('.icons .icon', {
            scrollTrigger: {
                trigger: ".icons",
                toggleActions: "restart none restart none"
            },
            scale: 0,
            duration: 1,
            stagger: -0.25,
        });
        this.typeIt();
    }
})
</script>

<style scoped lang="scss">
#profile {
    padding: 16.5% 19% 31.5%;
    position: relative;
    max-height: 101vh;

    .words{
        position: relative;
    }

    .greetings {
        font-family: 'Sen', sans-serif;
        font-size: 2rem;
    }

    .name {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 5.2rem;
        margin: 50px auto 55px;
    }

    .job {
        font-size: 2.4rem;
    }

    .role {
        color: #6BCB77;
    }

    .resume{
        font-size: 1.3rem;
        color: inherit;
        background:  linear-gradient(140deg, #1EE494 45%, #6ACAFC);
        border: 0.01em solid black;
        padding: 16px 21px;
        position: absolute;
        top: 135%;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            background:  linear-gradient(140deg, #1EE494 45%, #4586FF);
            box-shadow: 0 0 5px -1px #00000067;
            color: black;
        }
    }

    #chair {
        position: absolute;
        width: 250px;
        bottom: -1%;
        left: 10%;

        .cls-1 {
            fill: #393e46;
        }
    }

    #lamp {
        position: absolute;
        width: 30px;
        bottom: -1%;
        right: 8%;
    }

    .light {
        height: 30px;
        width: 30px;
        position: absolute;
        bottom: 225px;
        right: 8%;
        background: radial-gradient(#6fe9fe, #0094eb88, #0094eb44, transparent, transparent);
        opacity: 0;
        transition: opacity 0.5s;
    }

    .chair-piece {
        fill: #393e46;
    }

    .vertical-line {
        width: 4px;
        background: #40514E;
        position: absolute;

        &#social-media-line {
            height: 16rem;
            bottom: 0;
            left: 4.5rem;

            .icons {
                position: absolute;
                transform: translateX(-50%);
                left: 50%;
                bottom: 17rem;

                i {
                    color: #40514E;
                    margin: 10px auto;
                    font-size: xx-large;
                }
            }
        }

        &#email-line {
            height: 18rem;
            bottom: 0;
            right: 4.5rem;

            .mail-id {
                position: absolute;
                font-size: 1.5rem;
                font-family: 'Cutive Mono', monospace;
                right: 50%;
                bottom: 19rem;

                a {
                    color: #40514E;

                    &:hover {
                        color: #0094eb;
                    }
                }
            }
        }
    }

    .link.icon {
        opacity: 1 !important;
    }

    .linkedin:hover {
        color: #0a66c2 !important;
    }

    .github:hover {
        color: #161b22 !important;;
    }

    .hackerrank:hover {
        color: #1ba94c !important;
    }

    .codewars {
        height: 32px;
        margin: 10px auto;
        transform: translateX(8%);

        .cls-1 {
            fill: #40514e;
        }

        &:hover {
            .cls-1 {
                fill: #b1361e;
            }
        }
    }
}

@media only screen and (max-width: 576px) {
    #profile {
        height: 88vh;
        padding: 47% 15% 55%;

        .vertical-line {
            width: 3px;

            &#email-line {
                display: none;
            }

            &#social-media-line {
                left: initial;
                right: 10%;
                height: 16rem;

                .icons {
                    bottom: 17rem;

                    i {
                        margin: 8px auto;
                        font-size: xx-large;
                    }
                }
            }
        }

        .greetings {
            font-size: 1.8rem;
        }

        .name {
            font-size: 3.7rem;
            margin: 40px auto 35px;
        }

        .job {
            font-size: 1.7rem;
        }

        .resume{
            top: 125%;
        }

        #chair {
            width: 150px;
            bottom: -1%;
            left: 18%;
        }

        #lamp {
            width: 20px;
            bottom: -1%;
            right: initial;
            left: 8%;
        }

        .light {
            display: none;
        }
    }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
    #profile {
        padding: 30% 18% 35%;

        .greetings {
            font-size: 1.3rem;
        }

        .name {
            font-size: 3.2rem;
            margin: 35px auto 28px;
        }

        .job {
            font-size: 1.7rem;
        }

        .vertical-line {
            width: 3px;

            &#social-media-line {
                height: 12rem;
                left: 3rem;

                .icons {
                    bottom: 12.5rem;
                }
            }

            &#email-line {
                height: 10rem;
                right: 3rem;

                .mail-id {
                    bottom: 10rem;
                    font-size: 1.2rem;
                }
            }
        }

        #chair {
            width: 180px;
            bottom: -1%;
            left: 12%;
        }

        #lamp {
            width: 20px;
            bottom: -1%;
            right: 10%;
        }

        .light {
            bottom: 145px;
            right: 9.2%;
        }
    }
}
</style>