<template>
    <section id="skill-sets">
        <div class="skill-info">
            My skill sets and tech stack.
        </div>
        <div class="skills">
            <div class="skill-icons">
                <img class="skill-icon" alt="" src="~/assets/images/ruby.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/rails.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/vue.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/nuxt.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/rest.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/sinatra.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/turbo.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/stimulus.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/semantic-ui.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/scss.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/jquery.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/svg.svg"/>
                <img style="width: 90px; margin: 18px 3px;" class="skill-icon" alt="" src="~/assets/images/gsap.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/illustrator.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/figma.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/mysql.svg"/>
                <img style="width: 64px;" class="skill-icon" alt="" src="~/assets/images/postgres.svg"/>
                <img style="width: 36px;" class="skill-icon" alt="" src="~/assets/images/render.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/heroku.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/docker.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/c.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/c++.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/swift.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/javascript.svg"/>
                <img class="skill-icon" alt="" src="~/assets/images/python.svg"/>
            </div>
        </div>
    </section>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default {
    name: "skills",
    mounted(){
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.skill-icon',{
            scrollTrigger:{
                trigger: '.skill-icons',
                toggleActions: "restart none restart none"
            },
            scale: 0.1,
            yPercent: 50,
            ease: "power1.inOut",
            duration: 1.2,
            stagger: {
                grid: [5,5],
                from: "end",
                amount: -1
            }
        });

        gsap.from('.skill-info',{
            scrollTrigger:{
                trigger: '.skill-icons',
                toggleActions: "restart none reverse none"
            },
            xPercent: -30,
        });
    }
}
</script>

<style scoped lang="scss">
#skill-sets {
    width: 100%;
    background: #393E46;
    padding: 15% 10% 10%;
    display: flex;
    justify-content: space-between;

    .skill-info{
        display: flex;
        align-items: center;
        width: 30%;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #ddeced;
    }

    .skills{
        width: 45%;
    }

    .skill-icons {
        width: 100%;
    }

    .skill-icon {
        height: 3.5vw;
        width: 3.5vw;
        margin: 23px;
        cursor: pointer;
    }
}
</style>