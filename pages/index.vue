<template>
    <div id="main">
        <NavBar />
        <Profile />
        <Skills />
        <Projects />
    </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
export default defineNuxtComponent({
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600&display=swap');
#main{
    background: #F5F6F9;
    font-family: 'Signika Negative', sans-serif;
    color: #393E46;
    min-height: 700vh;
}
</style>