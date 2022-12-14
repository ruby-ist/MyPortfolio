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
            return `/icons/${name}.svg`
        }
    },
    mounted() {
        const icons: NodeListOf<HTMLElement> = this.$refs.icons;
        const dock: HTMLElement = this.$refs.dock;
        const firstIcon: HTMLElement = icons[0];

        let min = 62;
        let max = 100;
        let bound = min * Math.PI;

        gsap.set(icons, {
            transformOrigin: "center",
            height: 62
        });

        gsap.set(dock, {
            position: "relative",
            height: 62
        });

        dock.addEventListener("mousemove", (event: MouseEvent) => {
            let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
            updateIcons(event.clientX - offset);
            gsap.to(dock, {
                height: 105,
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
                height: 62
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
    height: 32px;
    width: 32px;
    margin: 7.5px 15px;
    cursor: pointer;
}

#gsap {
    width: 64px;
    margin: 15px 0;
}

#render {
    width: 33px;
}

@media only screen and (max-width: 576px){
    .skill-icon {
        height: 28px;
        width: 28px;
    }

    #gsap {
        width: 56px;
        margin: 15px 0;
    }

    #render {
        width: 28px;
    }
}
</style>