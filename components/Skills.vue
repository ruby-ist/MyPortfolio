<template>
    <section id="skill-sets">
        <div class="skills">
            <div class="skill-info">
                My skill sets and tech stack:
            </div>
            <SkillSet v-for="skills in skillSets" :skills="skills"/>
        </div>
        <ThreeTriangles />
        <MemphisPattern />
        <StripedCircle />
        <SlantingStripes />
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

type dataGroup = {
    skillSets: String[][]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        skillSets: [
            ['ruby', 'rails', 'rspec', 'vue', 'nuxt'],
            ['sinatra', 'turbo', 'stimulus', 'semantic-ui', 'scss'],
            ['jquery', 'svg', 'gsap', 'illustrator', 'figma'],
            ['mysql', 'rest', 'render', 'heroku', 'docker'],
            ['c', 'c++', 'typescript', 'javascript', 'python'],
        ]
    }),
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.skill-icon', {
            scrollTrigger: {
                trigger: '.skill-icons',
                toggleActions: "restart none restart none"
            },
            scale: 0.1,
            yPercent: 50,
            ease: "power1.inOut",
            duration: 0.5,
            stagger: {
                grid: [5, 5],
                from: "end",
                amount: -1
            }
        });
        gsap.from('.skill-info', {
            scrollTrigger: {
                trigger: '.skill-icons',
                toggleActions: "restart none none none"
            },
            opacity: 0,
            duration: 1,
        });
    }
})
</script>

<style scoped lang="scss">
#skill-sets {
    position: relative;
    width: 100%;
    background: #151516;
    padding: 15% 10%;
    display: flex;
    justify-content: space-around;
    height: 150vh;

    .skills {
        height: 450px;
        position: absolute;
        top: 15%;
        right: 5%;
    }

    .skill-info {
        font-size: 1.3rem;
        line-height: 1.3rem;
        color: #ddeced;
        padding-bottom: 30px;
        font-family: monospace;
    }
}
</style>