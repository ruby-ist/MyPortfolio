<template>
    <div id="navbar">
        <div class="ui secondary right menu">
            <div class="ui huge item header">Srira.me</div>
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
    height: 90px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 3;
    background: linear-gradient(#F5F6F911, transparent);

    .ui.secondary.menu {
        width: 100%;
        padding: 0 6rem 0 3rem;

        .right.menu {
            .item {
                font-size: 1.2rem;
            }
        }
    }

    .ui.header {
        color: #1CD96E;
        font-family: 'Geo', sans-serif;
        font-size: 3.2rem;
    }
}
</style>