<template>
    <div class="frameworks-list">
        <span>Tech stack:</span>
        <div class="frameworks">
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/icons/ruby.svg"/>
                <img class="framework-icon" src="~/assets/icons/rails.svg"/>
                <img class="framework-icon" src="~/assets/icons/vue.svg"/>
                <img class="framework-icon" src="~/assets/icons/nuxt.svg"/>
                <img class="framework-icon" src="~/assets/icons/gsap-dark.svg"/>
                <img class="framework-icon" src="~/assets/icons/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/icons/jquery.svg"/>
                <img class="framework-icon" src="~/assets/icons/rest.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/icons/rails.svg"/>
                <img class="framework-icon" src="~/assets/icons/rest.svg"/>
                <img class="framework-icon" src="~/assets/icons/turbo.svg"/>
                <img class="framework-icon" src="~/assets/icons/stimulus.svg"/>
                <img class="framework-icon" src="~/assets/icons/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/icons/jquery.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/icons/wasm.svg"/>
                <img class="framework-icon" src="~/assets/icons/javascript.svg"/>
                <img class="framework-icon" src="~/assets/icons/html.svg"/>
                <img class="framework-icon" src="~/assets/icons/css.svg"/>
                <img id="gsap-dark" class="framework-icon" src="~/assets/icons/gsap-dark.svg"/>
                <img id="jekyll" class="framework-icon" src="~/assets/icons/jekyll.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/icons/rails.svg"/>
                <img class="framework-icon" src="~/assets/icons/turbo.svg"/>
                <img class="framework-icon" src="~/assets/icons/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/icons/jquery.svg"/>
                <img class="framework-icon" src="~/assets/icons/scss.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/icons/ruby.svg"/>
                <img class="framework-icon" src="~/assets/icons/sinatra.svg"/>
                <img class="framework-icon" src="~/assets/icons/html.svg"/>
                <img class="framework-icon" src="~/assets/icons/css.svg"/>
                <img class="framework-icon" src="~/assets/icons/jquery.svg"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default defineNuxtComponent({
    mounted(){
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(".stack-group", {zIndex: (i, target, targets) => targets.length - i});
        let stacks: HTMLElement[] = gsap.utils.toArray('.stack-group');

        stacks.forEach((stack: HTMLElement, i: number) => {

            let icons: HTMLCollection = stack.children;
            let nextIcons: HTMLCollection;

            if(stacks[i+1]){
                nextIcons = stacks[i+1].children;
                gsap.set(nextIcons, {scale: 0});
            }

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    start: () => "top -" + (window.innerHeight * (5 * (i + 1) - 1)),
                    end: () => "+=" + window.innerHeight * 5,
                    toggleActions: "play complete complete reset",
                    invalidateOnRefresh: true,
                }
            });
            tl.to(icons, {
                opacity: 0,
                scale: 0,
                transformOrigin: "center",
                stagger: -0.1,
                duration: 0.25,
                ease: 'slow'
            }).to(stacks[i+1], {
                opacity: 1,
                duration: 0,
            }).to(nextIcons,{
                scale: 1,
                transformOrigin: "center",
                opacity: 1,
                stagger: 0.1,
                duration: 0.25,
                ease: 'slow',
            });
        });
    }
})
</script>

<style scoped lang="scss">
.frameworks-list {
    position: absolute;
    top: 18%;
    left: 15%;
    display: flex;
    align-items: center;

    span {
        font-size: 1.2rem;
    }

    .stack-group{
        position: absolute;
        width: 400px;
        top: 0;
        opacity: 0;

        &:first-child{
            opacity: 1;
        }
    }

    .frameworks {
        display: inline-flex;
        flex-flow: row nowrap;
        margin-left: 20px;
    }

    .framework-icon {
        height: 25px;
        margin: 0 7px;
    }

    #jekyll{
        margin: 0;
    }

    #gsap-dark{
        margin: 1px;
    }
}

@media only screen and (max-width: 480px) {
    .frameworks-list{
        top: -110%;
        left: 5%;

        span{
            font-size: 1rem;
        }

        .stack-group{
            width: 280px;
        }

        .frameworks{
            margin-left: 5px;
        }

        .framework-icon{
            height: 20px;
            margin: 0 5px 7px;
        }
    }
}
</style>