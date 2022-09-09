<template>
    <section id="skill-sets">
        <div class="skill-info">
            My skill sets and tech stack.
        </div>
        <div class="skills">
            <SkillSet v-for="skills in skillSets" :skills="skills"/>
        </div>
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
                toggleActions: "restart none reverse none"
            },
            xPercent: -30,
        });
    }
})
</script>

<style scoped lang="scss">
#skill-sets {
    width: 100%;
    background: #393E46;
    padding: 15% 10% 10%;
    display: flex;
    justify-content: space-around;

    .skill-info {
        display: flex;
        align-items: center;
        width: 30%;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #ddeced;
    }
}
</style>