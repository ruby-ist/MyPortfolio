<template>
    <div id="photos">
        <div class="frame" id="bg">
            <img class="image" alt="face" src="/anime_bg.webp" />
        </div>

        <div class="frame" id="face">
            <img class="image" alt="face" src="/face.webp" />
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
    }
})
</script>

<style scoped lang="scss">
#photos{

    .frame{
        position: absolute;

        &#face{
            height: 28vw;
            width: 25vw;
            background: #1EE494;
            top: 23%;
            right: 18%;
            transform: rotateZ(10deg);
            padding: 1.8vw;

            img{
                height: 90%;
                width: 100%;
            }
        }

        &#bg{
            height: 21vw;
            width: 18vw;
            background: #6ACAFC;
            top: 18%;
            right: 30%;
            transform: rotateZ(-15deg);
            padding: 1.3vw;

            img{
                height: 90%;
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 480px) {
    #photos{
        display: none;
    }
}
</style>