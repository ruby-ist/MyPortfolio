<template>
    <footer id="footer">
        <img id="train" alt="train" src="~/assets/ski-mountain.svg" />
        <div class="credit">
            Designed and developed by © Sriram V 2022
        </div>
    </footer>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({
});
</script>

<style scoped lang="scss">
#footer{
    height: 21vh;
    width: 100vw;
    background: #7090BD;
    position: relative;
    display: grid;
    place-items: center;

    #train{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-99%);
    }

    .credit{
        font-size: 1.2rem;
    }
}
</style>