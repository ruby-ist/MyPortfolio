<template>
    <div id="navbar" class="profile-version">
        <div class="bg"></div>
        <div class="ui secondary right menu">
            <svg id="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.80095 219.53557">
                <g>
                    <path class="cls-1"
                          d="M291.85515,244.77111q-2.74755,1.79618-5.495,3.59241a30.02623,30.02623,0,0,0,3.042-10.71739c.77942-8.9175-2.79959-15.7225-4.50357-18.87344-1.7911-3.31249-4.91879-6.829-11.15439-13.85149-3.33367-3.74014-6.16033-6.75108-8.09451-8.77594-7.45383,21.98033-7.41629,39.47378-6.40726,50.17351,1.47867,15.75891,6.46219,31.84056,7.19083,34.16394,3.04691,9.71594,5.70892,15.22439,9.21771,28.75921a131.2618,131.2618,0,0,1,3.90741,20.33307,68.92354,68.92354,0,0,1-3.39816,27.29361,36.212,36.212,0,0,0-2.656-9.759,37.85776,37.85776,0,0,0-13.326-16.02063,75.75566,75.75566,0,0,0-5.77775,13.819c-1.763,5.74939-3.41333,11.35083-2.7919,18.55307.42221,4.9183.93476,10.93842,5.67252,15.02371a16.285,16.285,0,0,0,9.54593,3.67111l-.286.895c-.03147.07947-.05286.15906-.08429.23853a119.42782,119.42782,0,0,1-16.44125,32.39145,92.64316,92.64316,0,0,0,14.27874-17.71771c1.8226-2.92792,2.9928-5.16739,5.18857-9.38886.90112-1.73416,1.85388-3.5574,2.81839-5.4805a158.14721,158.14721,0,0,0,7.29434-16.41235c2.41629-6.48783,4.95825-13.29355,6.14478-22.60379,1.62607-12.643-.14566-22.6362-1.42255-29.54013-1.35058-7.25528-2.73392-11.00061-5.74243-20.62589-7.351-23.5251-11.03134-35.29266-12.2901-46.567a101.9631,101.9631,0,0,1,2.34494-34.96368,48.10682,48.10682,0,0,1,9.24414,9.92672c2.63275,3.78763,4.68066,6.72464,5.47138,11.16947.99923,5.64876-.6063,10.42088-1.84183,14.07939a40.14141,40.14141,0,0,1-3.733,7.97456,46.69561,46.69561,0,0,0-1.02872,9.43314,1.76609,1.76609,0,0,0,.00589.23013c.08011,5.03226.03509,7.55181.58185,7.74159.40756.13732,1.3298-.53633,3.68942-4.97486a10.58354,10.58354,0,0,1,2.28415-6.37017,10.01363,10.01363,0,0,1,2.934-2.438,21.37341,21.37341,0,0,1,1.59964-5.00218,21.83979,21.83979,0,0,1,2.78049-4.48108c1.26928-1.06746,2.52856-2.13516,3.79782-3.20262q1.36532-5.88657,2.72076-11.77329Q294.49556,239.73251,291.85515,244.77111Zm-21.6254,123.82344a8.68947,8.68947,0,0,1-1.86777,3.77726c-.45959.53192-2.26736,2.62991-4.42288,2.36136a4.113,4.113,0,0,1-2.631-1.64725c-2.16513-2.52909-4.29746-8.018-3.73581-15.37918a33.82474,33.82474,0,0,1,4.92914-15.02439,29.42456,29.42456,0,0,1,6.53347,10.49839,29.81266,29.81266,0,0,1,1.63895,10.15091A24.58953,24.58953,0,0,1,270.22975,368.59455Z"
                          transform="translate(-250.01546 -196.14526)"/>
                    <path class="cls-2" d="M265.69047,385.32429a79.66633,79.66633,0,0,0,4.85352-18.93552"
                          transform="translate(-250.01546 -196.14526)"/>
                    <path class="cls-2"
                          d="M276.16237,356.86454a44.82923,44.82923,0,0,1,.48135,8.70114,45.53527,45.53527,0,0,1-1.47613,9.66294,46.043,46.043,0,0,1-2.86374,7.86639"
                          transform="translate(-250.01546 -196.14526)"/>
                </g>
                <text class="cls-3" transform="translate(41.37712 112.68763)">rira</text>
                <text class="cls-4" transform="translate(135.37712 112.68763)">.me</text>
            </svg>
            <div id="nav-menu" class="right menu">
                <a href="/#about" class="item">About</a>
                <a href="/#skills" class="item">Skills</a>
                <a href="/#projects" class="item">Projects</a>
                <a href="/#footer" class="item">Contact</a>
            </div>
            <div class="mobile-menu right menu">
                <i class="big hamburger link icon"></i>
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
            } else {
                gsap.to('#navbar', {yPercent: 0, ease: 'sine', duration: 0.5});
                button.removeClass('down');
                button.addClass('up');
            }
            that.oldScroll = window.scrollY;

            let nav = $('#navbar');
            let version: String = "profile-version";

            let skills = document.querySelector('#skill-sets');
            let projects = document.querySelector('#underground');
            let dijkstra = document.querySelector('#mountain');
            let arcane = document.querySelector('.package-info');

            if(skills.getBoundingClientRect().top < 0)
                version = "skills-version";
            if(projects.getBoundingClientRect().top <= 0)
                version = "project-version";
            if(dijkstra.getBoundingClientRect().top < 0)
                version = "dijkstra-version";
            if(arcane.getBoundingClientRect().top < 0)
                version = "arcane-version";

            nav.removeClass();
            nav.addClass(version);
        }
    }
})
</script>

<style scoped lang="scss">
#navbar {
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 3;
    background: linear-gradient(#F5F6F911, transparent);

    .bg {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .ui.secondary.menu {
        width: 100%;
        height: 100%;
        margin-top: 0;
        padding: 0 3rem 0 6rem;

        .right.menu {
            .item {
                font-size: 1.3rem;
                font-family: 'Alegreya Sans', sans-serif;
            }
        }
    }

    .mobile-menu{
        display: none;
    }

    #main-logo {
        width: 98px;
        margin: 12px 0;
        z-index:11;

        .cls-2 {
            fill: none;
        }

        .cls-3, .cls-4 {
            isolation: isolate;
            font-size: 60px;
            font-family: "Comic Neue", sans-serif;
            font-weight: 700;
        }
    }
}

.profile-version {
    .bg {
        background: rgba(245, 246, 249, 0.36);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
    }
    #nav-menu {
        .item {
            &:hover {
                color: #4586FF;
            }
        }
    }
    #main-logo {
        .cls-1, .cls-3 {
            fill: #4586ff;
        }

        .cls-4 {
            fill: #32424a;
        }
    }
}

.skills-version {
    .bg {
        background: rgba(21, 21, 22, 0.53);
        backdrop-filter: blur(12.1px);
        -webkit-backdrop-filter: blur(12.1px);
    }
    #nav-menu {
        .item {
            color: #009967;

            &:hover {
                color: #f15b2b;
            }
        }
    }
    #main-logo {
        .cls-1, .cls-3 {
            fill: #f15b2b;
        }

        .cls-4 {
            fill: #393E46;
        }
    }
}

.project-version {
    z-index: initial;

    #nav-menu {
        .item {
            &:hover {
                color: #4586FF;
            }
        }
    }

    #main-logo {
        .cls-1, .cls-3 {
            fill: #4586ff;
        }

        .cls-4 {
            fill: #32424a;
        }
    }
}

.dijkstra-version {
    .bg {
        background: rgba(254, 236, 233, 0.53);
        backdrop-filter: blur(8.7px);
        -webkit-backdrop-filter: blur(8.7px);
    }
    #nav-menu {
        .item {
            color: #2F3A8F;

            &:hover {
                color: #f15b2b;
            }
        }
    }
    #main-logo {
        .cls-1, .cls-3 {
            fill: #f15b2b;
        }

        .cls-4 {
            fill: #2F3A8F;
        }
    }
}

.arcane-version {
    .bg {
        background: rgba(254, 236, 233, 0.53);
        backdrop-filter: blur(8.7px);
        -webkit-backdrop-filter: blur(8.7px);
    }

    #nav-menu {
        .item {
            color: #30475e;

            &:hover {
                color: #da0037;
            }
        }
    }

    #main-logo {
        .cls-1, .cls-3 {
            fill: #da0037;
        }

        .cls-4 {
            fill: #30475e;
        }
    }
}

@media only screen and (max-width: 480px) {
    #navbar {
        height: 70px;
        .ui.secondary.menu {
            padding: 0 2rem 0 2rem;

            #nav-menu {
                display: none;
            }
        }

        #main-logo {
            width: 72px;
            margin: 10px 0 0;
        }

        .mobile-menu{
            display: block;
        }

        .hamburger.icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
        }
    }

    .profile-version{
        .hamburger.icon{
            color: #32424a;
        }
    }
    .skills-version{
        .hamburger.icon{
            color: #009967;
        }
    }
    #navbar.project-version{
        .bg {
            background: rgba(245, 246, 249, 0.36);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        z-index: 7;
    }
    .dijkstra-version{
        .hamburger.icon{
            color: #2F3A8F;
        }
    }
    .arcane-version{
        .hamburger.icon{
            color: #30475e;
        }
    }
}
</style>