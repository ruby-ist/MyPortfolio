<template>
    <section id="skill-sets">
        <div class="skill-info">
            My skill sets and tech stack.
        </div>
        <div class="skills">
            <div class="skill-icons">
                <img v-for="(skill, index) in skills"
                     :id="skill"
                     class="skill-icon"
                     :alt="skill"
                     :src="imagePath(skill)"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

type dataGroup = {
    skills: String[]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        skills: [
            'ruby',
            'rails',
            'vue',
            'nuxt',
            'rest',
            'sinatra',
            'turbo',
            'stimulus',
            'semantic-ui',
            'scss',
            'jquery',
            'svg',
            'gsap',
            'illustrator',
            'figma',
            'mysql',
            'postgres',
            'render',
            'heroku',
            'docker',
            'c',
            'c++',
            'swift',
            'javascript',
            'python'
        ]
    }),
    methods: {
        // animate(index){
        //     gsap.fromTo('.skill-icon',{
        //         scale: 0.1,
        //         duration: 0.5,
        //         stagger: {
        //             grid: [5,5],
        //             from: index,
        //             amount: 0.5
        //         }
        //     },{
        //         scale: 1,
        //         ease: "back",
        //         duration: 0.5,
        //         stagger: {
        //             grid: [5,5],
        //             from: index,
        //             amount: 0.5
        //         }
        //     });
        // },

        imagePath(name: String): String {
            return `/assets/images/${name}.svg`
        }
    },
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
    justify-content: space-between;

    .skill-info {
        display: flex;
        align-items: center;
        width: 30%;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #ddeced;
    }

    .skills {
        width: 45%;
    }

    .skill-icons {
        width: 100%;
    }

    .skill-icon {
        height: 3vw;
        width: 3vw;
        margin: 23px;
        cursor: pointer;
    }

    #gsap {
        width: 90px;
        margin: 18px 3px;
    }

    #postgres {
        width: 64px;
    }

    #render {
        width: 36px;
    }
}
</style>