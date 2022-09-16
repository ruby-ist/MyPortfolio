<template>
    <section id="skill-sets">
        <div class="skills">
            <div class="skill-info">
                My skill sets and tech stack:
            </div>
            <SkillSet v-for="skills in skillSets" :skills="skills"/>
        </div>
        <div class="skills-gradient"></div>
        <ThreeTriangles />
        <MemphisPattern />
        <StripedCircle />
        <SlantingStripes />
        <DottedRectangle />
        <TwoCircles />
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
            yPercent: 25,
            transformOrigin: 'center',
            ease: "power1.inOut",
            duration: 0.5,
            stagger: {
                grid: [5, 5],
                from: "end",
                amount: -1
            }
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
        z-index: 2;
    }

    .skill-info {
        font-size: 1.3rem;
        line-height: 1.3rem;
        color: #ddeced;
        padding-bottom: 30px;
        font-family: monospace;
    }

    .skills-gradient{
        position: absolute;
        z-index: 1;
        height: 480px;
        width: 480px;
        top: 10%;
        right: 0;
        background: radial-gradient(#053218, #151516, #151516);
    }
}
</style>