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

<script>
import {gsap} from "gsap";
export default {
    mounted(){
        gsap.from('.frame#face',{
            xPercent: 20,
            yPercent: -90,
            rotation: 90,
            duration: 1.2,
        });
        gsap.from('.frame#bg',{
            xPercent: 40,
            yPercent: -120,
            rotation: -120,
            duration: 1.2,
        });
    }
}
</script>

<style scoped lang="scss">
#photos{

    .frame{
        position: absolute;

        &#face{
            height: 400px;
            width: 360px;
            background: lightgreen;
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
            background: lightskyblue;
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
</style>