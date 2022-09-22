<template>
    <footer id="footer">
        <img id="train" alt="train" src="~/assets/train-landscape.svg" />
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
    background: #F9F6F7;
    position: relative;

    #train{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
    }
}
</style>