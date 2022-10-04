<template>
    <div id="navbar">
        <div class="ui secondary right menu">
            <svg id="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.4163 289.86095">
                <g>
                    <path class="cls-1" d="M376.8902,220.91066q-2.7475,1.79618-5.495,3.59241a30.0268,30.0268,0,0,0,3.042-10.71739c.77942-8.91749-2.79959-15.72251-4.50357-18.87345-1.7911-3.31248-4.91879-6.82895-11.15439-13.85148-3.33367-3.74015-6.16033-6.75109-8.09451-8.77594-7.45383,21.98033-7.41629,39.47378-6.40726,50.1735,1.47867,15.75891,6.46219,31.84056,7.19083,34.16394,3.04691,9.71595,5.70892,15.2244,9.21771,28.75922a131.26182,131.26182,0,0,1,3.90741,20.33307,68.92322,68.92322,0,0,1-3.39816,27.29361,36.212,36.212,0,0,0-2.656-9.759,37.85765,37.85765,0,0,0-13.326-16.02063,75.75483,75.75483,0,0,0-5.77775,13.819c-1.763,5.74939-3.41333,11.35083-2.7919,18.55307.42221,4.9183.93476,10.93841,5.67252,15.02371a16.28494,16.28494,0,0,0,9.54593,3.67111l-.286.895c-.03146.07947-.05286.15906-.08429.23853a119.42793,119.42793,0,0,1-16.44125,32.39145,92.64213,92.64213,0,0,0,14.27874-17.71772c1.8226-2.92791,2.9928-5.16739,5.18857-9.38885.90112-1.73416,1.85388-3.55741,2.81839-5.4805a158.15422,158.15422,0,0,0,7.29434-16.41235c2.41629-6.48783,4.95826-13.29355,6.14478-22.60379,1.62607-12.643-.14566-22.6362-1.42255-29.54014-1.35058-7.25527-2.73392-11.00061-5.74243-20.62588-7.351-23.5251-11.03134-35.29266-12.2901-46.567a101.96373,101.96373,0,0,1,2.34494-34.96368,48.1071,48.1071,0,0,1,9.24414,9.92673c2.63275,3.78763,4.68067,6.72464,5.47138,11.16946.99923,5.64876-.6063,10.42088-1.84183,14.07939a40.14254,40.14254,0,0,1-3.733,7.97457,46.69627,46.69627,0,0,0-1.02872,9.43313,1.76633,1.76633,0,0,0,.00589.23014c.08011,5.03225.03509,7.55181.58185,7.7416.40756.13732,1.3298-.53633,3.68942-4.97487a10.58358,10.58358,0,0,1,2.28415-6.37017,10.01337,10.01337,0,0,1,2.934-2.438,21.37425,21.37425,0,0,1,1.59964-5.00218,21.84014,21.84014,0,0,1,2.78049-4.48108c1.26928-1.06746,2.52856-2.13516,3.79782-3.20262q1.36533-5.88657,2.72076-11.77329Q379.53065,215.87205,376.8902,220.91066ZM355.26481,344.7341a8.68928,8.68928,0,0,1-1.86776,3.77724c-.45959.53191-2.26737,2.6299-4.42289,2.36137a4.113,4.113,0,0,1-2.631-1.64724c-2.16513-2.52907-4.29746-8.018-3.73581-15.37919a33.82477,33.82477,0,0,1,4.92915-15.02439,29.42417,29.42417,0,0,1,6.53347,10.49839,29.81308,29.81308,0,0,1,1.63894,10.1509A24.59012,24.59012,0,0,1,355.26481,344.7341Z" transform="translate(-334.94894 -172.04927)"/>
                    <path class="cls-2" d="M350.72554,361.46385a79.6657,79.6657,0,0,0,4.85351-18.93552" transform="translate(-334.94894 -172.04927)"/>
                    <path class="cls-2" d="M361.19741,333.0041a44.82873,44.82873,0,0,1,.48136,8.70115,45.53377,45.53377,0,0,1-1.47614,9.66292,46.04281,46.04281,0,0,1-2.86373,7.86639" transform="translate(-334.94894 -172.04927)"/>
                </g>
                <text class="cls-3" transform="translate(37.47871 112.92316)">rira</text><text class="cls-3 black" transform="translate(132.47871 112.92316)">.me</text>
            </svg>

            <div class="right menu">
                <a href="/#about" class="item">About</a>
                <a href="/#skills" class="item">Skills</a>
                <a href="/#projects" class="item">Projects</a>
                <a href="/#footer" class="item">Contact</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from '#app'
import {gsap} from "gsap"
import $ from 'jquery'

type dataGroup = {
    oldScroll: Number
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        oldScroll: 0
    }),
    mounted() {
        let that = this;
        window.onscroll = () => {
            let button = $('#scrollIcon');
            if (window.scrollY > that.oldScroll && window.scrollY > 0) {
                gsap.to('#navbar', {yPercent: -100, ease: 'sine', duration: 0.5});
                button.removeClass('up');
                button.addClass('down');
            }
            else {
                gsap.to('#navbar', {yPercent: 0, ease: 'sine', duration: 0.5});
                button.removeClass('down');
                button.addClass('up');
            }
            that.oldScroll = window.scrollY;
        }
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Alegreya+Sans&display=swap');

#navbar {
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 3;
    background: linear-gradient(#F5F6F911, transparent);

    .ui.secondary.menu {
        width: 100%;
        padding: 0 3rem 0 6rem;

        .right.menu {
            .item {
                font-size: 1.3rem;
                font-family: 'Alegreya Sans', sans-serif;

                &:hover{
                    color: #4586FF;
                }
            }
        }
    }

    #main-logo{
        width: 98px;
        margin-top: 40px;

        .cls-1, .cls-3 {
            fill: #4586FF;
        }

        .cls-2 {
            fill: none;
        }

        .cls-3 {
            font-size: 60px;
            font-family: 'Comic Neue', sans-serif;
            font-weight: 700;
        }

        .black{
            fill: #32424A;
        }
    }
}

@media only screen and (max-width: 480px) {
    #navbar{
        .ui.secondary.menu{
            padding: 0 2rem 0 2rem;

            .right.menu{
                display: none;
            }
        }

        #main-logo{
            width: 72px;
            margin-top: 10px;
        }
    }
}
</style>