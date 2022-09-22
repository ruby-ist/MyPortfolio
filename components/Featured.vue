<template>
    <section id="featured">
        <img id="mountain" src="~/assets/mountain.svg" />
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
    height: 120vh;
    background: #FEECE9;
    position: relative;

    #mountain{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
    }
}
</style>