<template>
    <section id="featured">
        <img id="mountain" src="~/assets/mountain.svg" />
        <div class="ui huge orange centered header">Featured Project</div>
        <div>
            <div class="ui large header orange">Dijkstra Trace</div>
            <div class="ui indigo header">A ruby gem package</div>
            <div id="rubygems"></div>
            <div class="package-info">
                A simple Dijkstra algorithm implementation to find the shortest path between any two points in the undirected graph.
            </div>
        </div>
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
    height: 150vh;
    background: #FEECE9;
    position: relative;
    padding: 0 10% 5%;

    #mountain{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
    }

    .centered{
        text-align: center;
        margin-bottom: 80px;
    }

    .orange{
        color: #d86149 !important;
    }

    .indigo{
        color: #2F3A8F !important;
        font-family: monospace;
    }

    #rubygems{
        position: absolute;
        width: 42%;
        height: 32%;
        border-radius: 20px;
        background: url("/assets/dijkstra_trace.png") no-repeat top;
        background-size: cover;
        right: 16%;
        top: 20%;
    }

    .package-info{
        position: absolute;
        padding: 50px;
        border-radius: 10px;
        left: 15%;
        top: 28%;
        background: #d86149;
        color: white;
        width: 30%;
    }
}
</style>