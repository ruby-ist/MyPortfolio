<template>
    <div class="backstage">
        <section id="projects" ref="projects">
            <div class="ui center secondary menu">
                <a class="active item">GeoBITs</a>
                <a class="item">Pingcoders</a>
                <a class="item">RubyOnWasm</a>
                <a class="item">Narrate-it</a>
                <a class="item">Flames</a>
            </div>

            <div class="showcase">
                <div class="ui grid">
                    <div class="eight wide column">
                        <div class="project-container">
                            <LogosCarousel />
                            <StackCarousel />
                            <UrlChanger />
                            <ContentCarousel />
                        </div>
                    </div>
                    <div class="eight wide column">
                        <MacCarousel />
                        <IphoneCarousel />
                    </div>
                </div>
            </div>
        </section>
        <div class="boxes">
            <div id="geobits-box" v-for="i in [...Array(5).keys()]">
                <div class="box" v-for="i in [...Array(5).keys()]"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({
    mounted() {
        document.addEventListener('scroll', () => {
            if (this.$refs.projects.getBoundingClientRect().top < 0) {
                this.$refs.projects.style.position = "fixed";
            }
            if ($('#skill-sets')[0].getBoundingClientRect().bottom > 0) {
                this.$refs.projects.style.position = "absolute";
            }
        });

        let boxes: NodeListOf<HTMLElement> = document.querySelectorAll('.box');
        boxes.forEach((box) => {
            box.style.height = String(window.innerHeight) + 'px';
        })
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
        padding-top: 80px;
        position: absolute;
        top: 0;
        width: 100vw;
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
}
</style>