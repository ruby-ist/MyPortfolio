<template>
    <div id="photos">
        <div class="frame" id="bg">
            <img class="image" alt="face" src="~/assets/anime_bg.jpg" />
        </div>

        <div class="frame" id="face">
            <img class="image" alt="face" src="~/assets/face.png" />
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
            height: 400px;
            width: 360px;
            background: #60EFB8;
            top: 15rem;
            right: 20rem;
            transform: rotateZ(10deg);
            padding: 25px;

            img{
                height: 310px;
                width: 310px;
            }
        }

        &#bg{
            height: 267px;
            width: 240px;
            background: #6ACAFC;
            top: 12rem;
            right: 33rem;
            transform: rotateZ(-15deg);
            padding: 17px;

            img{
                height: 207px;
                width: 207px;
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