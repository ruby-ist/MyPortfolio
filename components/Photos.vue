<template>
    <div id="photos">
        <div class="frame" id="bg">
            <div class="label">_ words by colleagues</div>
            <img class="image" alt="face" src="/word_cloud.webp" />
        </div>

        <div class="frame" id="face">
            <div class="label">_ Updated: 16-Oct-2022</div>
            <img class="image" alt="face" src="/face.png" />
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted(){
        gsap.registerPlugin(ScrollTrigger)
        gsap.from('.frame#face',{
            scrollTrigger: {
              trigger: '#photos',
              toggleActions: 'restart none restart pause'
            },
            scale: 0.1,
            xPercent: 20,
            yPercent: -90,
            rotation: 90,
            duration: 1.2,
        });
        gsap.from('.frame#bg',{
            scrollTrigger: {
                trigger: '#photos',
                toggleActions: 'restart none restart pause'
            },
            scale: 0.2,
            xPercent: 40,
            yPercent: -120,
            rotation: -120,
            duration: 1.2,
        });
        gsap.from('.label',{
            scrollTrigger: {
                trigger: '#photos',
                toggleActions: 'restart none restart pause'
            },
            opacity: 0,
            delay: 0.8,
        });
    }
})
</script>

<style scoped lang="scss">
#photos{

    .frame{
        position: absolute;

        .label {
            font-family: 'Cutive Mono', monospace;
            font-size: 0.9rem;
            position: absolute;
        }

        &#face{
            height: 26vw;
            width: 23vw;
            background: #1EE494;
            top: 23%;
            right: 18%;
            transform: rotateZ(10deg);
            padding: 1.5vw;

            .label{
                bottom: -5.9%;
                right: 0;
            }

            img{
                height: 90%;
                width: 100%;
                background: #393e46;
            }
        }

        &#bg{
            height: 21vw;
            width: 18vw;
            background: #6ACAFC;
            top: 15%;
            right: 31%;
            transform: rotateZ(-15deg);
            padding: 1vw;

            .label{
                top: -7%;
                left: 0;
            }

            img{
                height: 90%;
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 576px) {
    #photos{
        display: none;
    }
}
</style>