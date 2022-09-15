<template>
    <svg id="triangles-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.77057 44.70346">
        <g id="triangles">
            <path id="triangle-3" class="green-triangle"
                  d="M373.30011,374.064c13.0553,7.52579,25.76022,14.84961,38.77057,22.34946l-38.77057,22.354Z"
                  transform="translate(-286.30011 -374.064)"/>
            <path id="triangle-2" class="white-triangle"
                  d="M328.30011,374.064c13.0553,7.52579,25.76022,14.84961,38.77057,22.34946l-38.77057,22.354Z"
                  transform="translate(-286.30011 -374.064)"/>
            <path id="triangle-1" class="white-triangle"
                  d="M286.30011,374.064c13.0553,7.52579,25.76022,14.84961,38.77057,22.34946l-38.77057,22.354Z"
                  transform="translate(-286.30011 -374.064)"/>
        </g>
    </svg>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default defineNuxtComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('#triangles-svg', {
            scrollTrigger: {
                trigger: '#triangles-svg',
                toggleActions: "restart none restart none"
            },
            scaleX: 0,
            transformOrigin: 'left',
            ease: 'slow',
            duration: 1
        });
    }
});
</script>

<style scoped lang="scss">
#triangles-svg {
    position: absolute;
    top: 15%;
    left: 40%;
    width: 120px;

    .green-triangle {
        fill: #00df2b;
    }

    .white-triangle {
        fill: #f1f2f2;
    }
}
</style>