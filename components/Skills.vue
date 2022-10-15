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
            <div>
                My name is Sriram V. I design and build things for the Web. I am currently in the third year of my CSE
                degree at Bannari Amman Institute of Technology, Tamil Nadu, India. I’ve always enjoyed problem solving
                and am geek enough to code for fun. I went on to explore various programming languages and finally settled
                on Ruby. Even though they say language doesn't matter, I loved Ruby enough to base my career on that. So
                eventually I started learning Ruby on Rails, entering the world of web development.
            </div>
            <div>
                I dabbled in various things in Web development, from database design to SVG animations, and
                inevitably, I learned a JavaScript framework, Vue JS. Aside from programming, I am a huge cinephile
                and I used to fold origami as a hobby. I even had an Instagram page solely for that and designed some new
                origami models myself.
            </div>
            <div>
                Check out my pins if you are interested:
                <a href="https://www.instagram.com/quiet.mate/?theme=dark"><i class="large instagram link icon"></i></a>
                <a href="https://in.pinterest.com/sriram2520/pins/"><i class="large pinterest link icon"></i></a>
            </div>
            <div class="image-holder">
                <img alt="figures" src="/origami/me-and-her.webp" />
                <StripedCircle />
            </div>
        </div>
        <ThreeTriangles />
        <MemphisPattern />
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
        });

        gsap.from('.about-info', {
            scrollTrigger: {
                trigger: '.about-info',
                toggleActions: 'restart none none none',
                start: "top 90%"
            },
            opacity: 0,
            duration: 1.5
        });

        gsap.from('.image-holder img', {
            scrollTrigger: {
                trigger: '.image-holder',
                toggleActions: 'restart none restart none',
            },
            scale: 0,
            duration: 1
        });
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
    height: 190vh;

    .skills {
        height: 450px;
        position: absolute;
        top: 15%;
        right: 7%;
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
        color: #007750;
        position: absolute;
        font-size: 1.25rem;
        width: 42%;
        line-height: 35px;
        left: 22%;
        top: 28%;
        font-family: 'Sen', sans-serif;
        text-align: justify;

        div{
            margin-bottom: 18px;
        }

        .link.icon{
            color: #393E46 !important;
            opacity: 1 !important;
        }

        .image-holder{
            height: 300px;
            width: 100%;
            position: relative;
        }

        img{
            width: 180px;
            height: 180px;
            position: absolute;
            border: 2px solid #393E46;
            border-radius: 10%;
            top: 10%;
            right: 0;
            transform: rotate(-4deg);
        }
    }
}

@media only screen and (max-width: 576px){
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

            .image-holder{
                display: none;
            }
        }
    }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
    #skill-sets {
        .skills {
            top: 4%;
        }
        .about-info{
            top: 32%;
            width: 55%;
            .image-holder{
                display: none;
            }
        }
    }
}
</style>