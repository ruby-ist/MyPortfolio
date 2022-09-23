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
        <svg id="underground" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 941.8 91.4" preserveAspectRatio="none">
            <rect class="background" width="941.8" height="91.4"/>
            <polygon class="ground" points="941.8,0 941.8,91.4 675.6,53.9 607.6,61.8 208.6,61.8 0,87.9 0,0 "/>
        </svg>
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
    height: 200vh;

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

    #underground {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: auto;
    }

    .ground {
        fill: #151516;
    }

    .background{
        fill: #F5F6F9;
    }
}
</style>