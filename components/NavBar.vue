<template>
    <div id="navbar">
        <div class="ui secondary right menu">
            <img id="main-logo" src="~/assets/srira-logo.svg" alt="srira" />
            <div class="right menu">
                <a class="item">About</a>
                <a class="item">Skills</a>
                <a class="item">Projects</a>
                <a class="item">Contact</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from '#app'
import {gsap} from "gsap";

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
            if (window.scrollY > that.oldScroll)
                gsap.to('#navbar', {yPercent: -100, ease: 'sine', duration: 0.5});
            else
                gsap.to('#navbar', {yPercent: 0, ease: 'sine', duration: 0.5});
            that.oldScroll = window.scrollY;
        }
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Geo&display=swap');

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
        padding: 0 6rem 0 6rem;

        .right.menu {
            .item {
                font-size: 1.2rem;
            }
        }
    }

    #main-logo{
        width: 98px;
        margin-top: 40px;
    }
}

@media only screen and (max-width: 480px) {
    #navbar{
        .ui.secondary.menu{
            padding: 0 3rem 0 3rem;

            .right.menu{
                display: none;
            }
        }
    }
}
</style>