<template>
    <div class="backstage">
        <section id="projects" ref="projects">
            <h3 class="ui header">My Projects</h3>

            <div class="ui center secondary menu projects-menu">
                <a class="item" @click="scrollToProject(0)" style="--special-color: #116cff">GeoBITs</a>
                <a class="item" @click="scrollToProject(1)" style="--special-color: #4992fe">Pingcoders</a>
                <a class="item" @click="scrollToProject(2)" style="--special-color: #f92024">RubyOnWasm</a>
                <a class="item" @click="scrollToProject(3)" style="--special-color: #637ee2">Narrate-it</a>
                <a class="item" @click="scrollToProject(4)" style="--special-color: #e78347">Flames</a>
            </div>

            <div class="showcase">
                <div class="ui grid">
                    <div id="project-contents" class="sixteen wide mobile eight wide computer column">
                        <div class="project-container">
                            <LogosCarousel />
                            <StackCarousel />
                            <UrlChanger />
                            <ContentCarousel />
                        </div>
                    </div>
                    <div class="sixteen wide mobile eight wide computer column">
                        <MacCarousel />
                        <IphoneCarousel />
                    </div>
                </div>
            </div>
        </section>
        <div class="boxes" ref="boxes">
            <div class="box-section" v-for="i in [...Array(5).keys()]" :data-index="i">
                <div class="box" v-for="j in [...Array(5).keys()]" :data-index="i"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import $ from "jquery"

export default defineNuxtComponent({
    data: () => ({
        lastScroll: 0,
        currentScroll: 0,
    }),
    methods: {
        scrollToProject(num: number){
            document.documentElement.scrollTop = $('.boxes').offset().top + (window.innerHeight * 5) * num + ((5-num) * 100);
        }
    },
    mounted() {
        let previousSection: HTMLElement = document.querySelector('#skill-sets');
        let that = this;
        document.addEventListener('scroll', () => {
            that.lastScroll = that.currentScroll;
            that.currentScroll = document.documentElement.scrollTop;
            if (this.$refs.projects.getBoundingClientRect().top < 0)
                this.$refs.projects.style.position = "fixed";
            if (previousSection.getBoundingClientRect().bottom > 0) {
                this.$refs.projects.style.position = "absolute";
                this.$refs.projects.style.top = 0;
                this.$refs.projects.style.bottom = "initial";
            }
            if (this.$refs.boxes.getBoundingClientRect().bottom <= window.innerHeight){
                this.$refs.projects.style.position = "absolute";
                this.$refs.projects.style.top = "initial";
                this.$refs.projects.style.bottom = 0;
            }
            if(previousSection.getBoundingClientRect().bottom < 0 &&
                this.$refs.boxes.getBoundingClientRect().bottom > window.innerHeight) {
                this.$refs.projects.style.position = "fixed";
            }
        });

        let boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.box');
        boxes.forEach(async (box) => {
            box.style.height = String(window.innerHeight) + 'px';
        });

        let observer: IntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && that.lastScroll > that.currentScroll) {
                    let current = $('.projects-menu .active.item');
                    if(current !== undefined)
                        current.removeClass('active');
                    let items = $('.projects-menu .item');
                    let index = parseInt((entry.target as HTMLElement).dataset.index);
                    items[index].classList.add('active');
                }
            });
        });

        let anotherObserver: IntersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && that.lastScroll <= that.currentScroll) {
                    let current = $('.projects-menu .active.item');
                    if(current !== undefined)
                        current.removeClass('active');
                    let items = $('.projects-menu .item');
                    let index = parseInt((entry.target as HTMLElement).dataset.index);
                    items[index].classList.add('active');
                }
            });
        });

        let sections: NodeListOf<HTMLElement> = document.querySelectorAll('.box-section');
        sections.forEach((i) => { observer.observe(i) });
        let secondBoxes: NodeListOf<HTMLElement> = document.querySelectorAll('.box:nth-child(1)');
        secondBoxes.forEach((i) => { anotherObserver.observe(i) });
    }
})
;
</script>

<style scoped lang="scss">
.backstage {
    padding-top: 100px;
    position: relative;

    .ui.secondary.menu {
        justify-content: center;
    }

    #projects {
        padding-top: 40px;
        position: absolute;
        top: 0;
        width: 100vw;

        h3{
            text-align: center;
            margin-bottom: 30px;
            font-family: "Alegreya Sans", sans-serif;
            color: #606470;
        }
    }

    .showcase {
        display: grid !important;
        place-items: center;
        height: 80vh;

        .ui.grid {
            width: 100vw;
            height: 100%;
        }
    }

    .eight.wide.column {
        position: relative;
    }

    .column {
        display: grid !important;
        place-items: center;
        padding: 50px;
    }

    .project-container {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 100px 50px;
    }

    .boxes div {
        width: 100vw;
    }

    .boxes{
        margin-bottom: 400px;
    }

    .projects-menu{
        position: relative;
        z-index: 4;

        .item{
            font-family: 'Alegreya Sans', sans-serif;
            font-size: 1.1rem;
        }

       .active.item{
           color: var(--special-color) !important;
       }
    }
}

@media only screen and (max-width: 480px) {
    .backstage{
        display: none;
    }
}
</style>