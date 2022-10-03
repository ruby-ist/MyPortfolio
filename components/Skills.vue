<template>
    <section id="skill-sets">
        <div class="skills">
            <div id="skills" class="skill-info">
                My skill sets and tech stack:
            </div>
            <div class="skills-gradient"></div>
            <SkillSet v-for="skills in skillSets" :skills="skills"/>
        </div>
        <div id="about" class="about-header">ABOUT <br/><br />ME</div>
        <div class="about-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris in aliquam. Iaculis eu non diam phasellus
            vestibulum lorem sed. Amet justo donec enim diam vulputate ut pharetra. Morbi leo urna molestie at elementum
            eu facilisis sed odio. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. In dictum
            non consectetur a erat nam at lectus. Adipiscing at in tellus integer feugiat. Aliquet eget sit amet tellus
            cras adipiscing. Erat pellentesque adipiscing commodo elit. Consectetur a erat nam at lectus urna duis
            convallis convallis. Nunc scelerisque viverra mauris in aliquam sem fringilla
            Aliquet eget sit amet tellus cras adipiscing.
            </div>
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

        gsap.from('.about-header', {
            scrollTrigger: {
                trigger: '.about-header',
                toggleActions: 'restart none none none',
                start: "top 90%"
            },
            scaleY: 0,
            opacity: 0,
            transformOrigin: 'top',
            duration: 1
        })

        gsap.from('.about-info', {
            scrollTrigger: {
                trigger: '.about-info',
                toggleActions: 'restart none none none',
                start: "top 90%"
            },
            opacity: 0,
            duration: 1.5
        })
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

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
        font-family: 'Anonymous Pro', sans-serif;
        text-align: center;
    }

    .skills-gradient{
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
        top: 0;
        background: radial-gradient(#053218, transparent, transparent);
    }

    #underground {
        position: absolute;
        bottom: -1%;
        width: 100vw;
        height: auto;
    }

    .ground {
        fill: #151516;
    }

    .background{
        fill: #F5F6F9;
    }

    .about-header{
        color: #f15b2b;
        position: absolute;
        font-size: 1.4rem;
        width: 1.4rem;
        line-break: anywhere;
        text-align: center;
        line-height: 30px;
        left: 14.5%;
        top: 20%;
        font-family: 'Special Elite', cursive;
    }

    .about-info{
        color: #009967;
        position: absolute;
        font-size: 1.4rem;
        width: 42%;
        line-height: 35px;
        left: 22%;
        top: 28%;
        font-family: 'sen', sans-serif;
        text-align: justify;
    }
}

@media only screen and (max-width: 480px){
    #skill-sets{
        height: 1400px;

        .skill-info {
            font-size: 1.1rem;
            padding-bottom: 15px;
            text-align: center;
        }

        .skills {
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }

        .skills-gradient{
            top: -5%;
        }

        .about-header{
            text-align: left;
            width: initial;
            line-break: normal;
            left: 14.5%;
            top: 40%;

            br{
                display: none;
            }
        }

        .about-info{
            font-size: 1rem;
            width: 75%;
            top: 44%;
            left: 50%;
            transform: translateX(-50%);
            line-height: 25px;
        }
    }
}
</style>