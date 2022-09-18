<template>
    <div class="backstage">
        <section id="projects" ref="projects">
            <svg id="underground" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1440" height="85.0001"
                 viewBox="0 0 1440 85.0001">
                <path class="ground"
                      d="M1424.81006,61.4026H1440V0L0,.00013,0,75.2469l45.60686-7.47506L90.0767,75.2469,113.633,81.944l59.11794-2.83442,71.26546-7.69343,77.74414-1.21475L354.96375,71.821,375.019,75.2469l42.716,1.1121,43.721,2.4911,16.735,2.9683H580.987l13.706.7025h40.749L657.84912,85h59.09766L802.172,82.5209l41.589,2.4792L881.884,85l38.34448-8.32L1002.54,80.3453l36.19-4.5327,44.96-4.8284h88.13l39.29-2.4602,16.96-3.933h42.39l13.37-1.8072,21.28-1.5655,16.9-1.117,17.65,1.117,18.59,1.5655h12.29L1389.08,60.2305l8.76-1.0212Z"/>
            </svg>
            <div class="ui center secondary menu">
                <a class="active item">GeoBITs</a>
                <a class="item">Pingcoders</a>
                <a class="item">RubyOnWasm</a>
                <a class="item">ArcaneChats</a>
                <a class="item">Narrate-it</a>
            </div>

            <div class="showcase">
                <div class="ui grid">
                    <div class="eight wide column">
                        <div class="project-container">
                            <div class="Websites-log">
                                <img class="logo-img" src="~/assets/geobits.svg" alt="geoBits"/>
                                <img class="logo-img" src="~/assets/pingcoders.svg" alt="pingCoders"/>
                                <img class="logo-img" src="~/assets/rubyonwasm.svg" alt="rubyOnWASM"/>
                                <img class="logo-img" src="~/assets/arcanechats.svg" alt="arcaneChats"/>
                                <img class="logo-img" src="~/assets/narrateit.svg" alt="narrateIt"/>
                            </div>
                            <div class="frameworks-list">
                                <span>Frameworks:</span>
                                <div class="frameworks">
                                    <img class="framework-icon" src="~/assets/images/rails.svg"/>
                                    <img class="framework-icon" src="~/assets/images/vue.svg"/>
                                    <img class="framework-icon" src="~/assets/images/nuxt.svg"/>
                                </div>
                            </div>
                            <div class="site-url">
                                <span>Url:</span>
                                <a href="https://geobits.onrender.com">
                                    https://geobits.onrender.com
                                    <i class="external link icon"></i>
                                </a>
                            </div>
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
            <div id="geobits">
                <div id="empty"></div>
                <div class="box" id="box_1"></div>
                <div class="box" id="box_2"></div>
                <div class="box" id="box_3"></div>
                <div class="box" id="box_4"></div>
                <div class="box" id="box_5"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";

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

        gsap.set(".logo-img", {zIndex: (i, target, targets) => targets.length - i});
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
        padding-top: 120px;
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

    .column {
        display: grid !important;
        place-items: center;
        padding: 50px;
    }

    #underground {
        position: absolute;
        top: 0;
        width: 100vw;
        height: auto;
    }

    .project-container {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 100px 50px;

        .logo-img {
            position: absolute;
            height: 40px;
            width: auto;
            opacity: 0;
            top: 10%;
            left: 15%;

            &:first-child {
                opacity: 1;
            }
        }

        .frameworks-list {
            position: absolute;
            top: 20%;
            left: 15%;
            display: flex;
            align-items: center;

            span {
                font-size: 1.2rem;
            }

            .frameworks {
                display: inline-flex;
                flex-flow: row nowrap;
                margin-left: 20px;
            }

            .framework-icon {
                height: 25px;
                margin: 0 5px;
            }
        }

        .site-url {
            position: absolute;
            bottom: 20%;
            right: -90%;
            font-size: 1.1rem;
        }
    }

    .ground {
        fill: #151516;
    }

    .boxes div {
        width: 100vw;
    }

    #empty {
        height: 120vh;
    }

    .box {
        height: 100vh;
    }

    .eight.wide.column {
        position: relative;
    }
}
</style>