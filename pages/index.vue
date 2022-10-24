<template>
    <Loader v-if="loading" />
    <div v-if="!(loading)" id="main">
        <NavBar/>
        <Profile/>
        <Skills/>
        <Projects/>
        <ProjectsMobile/>
        <Featured/>
        <Footer/>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from '#app'
import {gsap} from "gsap"

export default defineNuxtComponent({
    data: () => ({
        loading: true
    }),
    mounted() {
        setTimeout( () => {
            gsap.timeline().to('.curtain', {
                opacity: 0,
                duration: 0.3
            });
        }, 1900);
        setTimeout(() => {
            this.loading = false;
        }, 2100);
        if (screen.width > 576) {
            window.onresize = function () {
                location.reload();
            }
        }
        document.documentElement.scrollTop = 0;
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600&display=swap');

:root {
    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
}

#main {
    background: #F5F6F9;
    font-family: 'Signika Negative', sans-serif;
    color: #393E46;
    overflow-x: hidden;
}
</style>