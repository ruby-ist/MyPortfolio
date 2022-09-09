<template>
    <div class="skill-icons" ref="dock">
        <img v-for="skill in skills"
             :id="skill"
             class="skill-icon"
             :alt="skill"
             ref="icons"
             :src="imagePath(skill)"/>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import type {PropType} from "@vue/runtime-core";
import {gsap} from "gsap";

export default defineNuxtComponent({
    props: {
        skills: Array as PropType<String[]>
    },
    methods: {
        imagePath(name: String): String {
            return `/assets/images/${name}.svg`
        }
    },
    mounted() {
        const icons: NodeListOf<HTMLElement> = this.$refs.icons;
        const dock: HTMLElement = this.$refs.dock;
        const firstIcon: HTMLElement = icons[0];

        let min = 91;
        let max = 120;
        let bound = min * Math.PI;

        gsap.set(icons, {
            transformOrigin: "center",
            height: 45
        });

        gsap.set(dock, {
            position: "relative",
            height: 81
        });

        dock.addEventListener("mousemove", (event: MouseEvent) => {
            let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
            updateIcons(event.clientX - offset);
            gsap.to(dock, {
                height: 125,
            })
        });

        dock.addEventListener("mouseleave", () => {
            gsap.to(icons, {
                duration: 0.3,
                scale: 1,
                x: 0
            });
            gsap.to(dock, {
                transformOrigin: "center",
                height: 81
            })
        });

        function updateIcons(pointer) {
            for (let i = 0; i < icons.length; i++) {
                let icon = icons[i];
                let distance = (i * min + min / 2) - pointer;
                let x = 0;
                let scale = 1;

                if (-bound < distance && distance < bound) {
                    let rad = distance / min * 0.5;
                    scale = 1 + (max / min - 1) * Math.cos(rad);
                    x = 2 * (max - min) * Math.sin(rad);
                } else {
                    x = (-bound < distance ? 2 : -2) * (max - min);
                }

                gsap.to(icon, {
                    duration: 0.3,
                    x: x,
                    scale: scale
                });
            }
        }
    }
})
</script>

<style scoped lang="scss">
.skill-icons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-icon {
    height: 45px;
    width: 45px;
    margin: 18px;
    cursor: pointer;
}

#gsap {
    width: 90px;
    margin: 18px 1px;
}

#render {
    width: 36px;
}
</style>