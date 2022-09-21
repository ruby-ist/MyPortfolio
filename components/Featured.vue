<template>
    <section id="featured">
        <img id="train" src="~/assets/train.svg" />
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({
});
</script>

<style scoped lang="scss">
#featured{
    width: 100%;
    height: 100vh;
    background: #FEECE9;
    position: relative;

    #train{
        width: 100vw;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
    }
}
</style>