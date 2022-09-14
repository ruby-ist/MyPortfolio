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
                        <GeobitsContent />
                        <GeobitsContent />
                    </div>
                    <div class="eight wide column">
                        <div class="mac-template">
                            <img src="~/assets/mac-outline.svg" alt="mac" />
                            <div id="mac-carousel"></div>
                        </div>
                        <div class="phone-template">
                            <img src="~/assets/iphone-outline.svg" alt="phone" />
                            <div id="iphone-carousel"></div>
                        </div>
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
                <div class="box" id="box_1"></div>
                <div class="box" id="box_2"></div>
                <div class="box" id="box_3"></div>
                <div class="box" id="box_4"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"

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
    }
});
</script>

<style scoped lang="scss">
.backstage {
    padding-top: 100px;
    position: relative;

    .ui.secondary.menu {
        justify-content: center;
    }

    #projects{
        padding-top: 120px;
        position: absolute;
        top: 0;
        width: 100vw;
    }

    .showcase {
        display: grid !important;
        place-items: center;
        height: 80vh;

        .ui.grid{
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

    .ground {
        fill: #393e46;
    }

    .boxes div{
        width: 100vw;
    }

    #empty{
        height: 120vh;
    }

    .box{
        height: 100vh;
    }

    .eight.wide.column{
        position: relative;
    }

    .mac-template{
        position: absolute;
        top: 18%;
        left: 0;
        img{
            position: absolute;
            width: 560px;
            z-index: 3;
        }

        #mac-carousel{
            width: 424px;
            height: 269px;
            background: #1CD96E;
            position: absolute;
            top: 24px;
            left: 68px;
            z-index: 2;
        }
    }

    .phone-template{
        position: absolute;
        top: 28%;
        left: 73%;
        img{
            position: absolute;
            width: 180px;
            z-index: 5;
        }

        #iphone-carousel{
            width: 160px;
            height: 335px;
            background: #1CD96E;
            position: absolute;
            top: 21px;
            left: 10px;
            z-index: 4;
        }
    }
}
</style>