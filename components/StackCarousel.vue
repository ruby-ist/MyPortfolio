<template>
    <div class="frameworks-list">
        <span>Tech stack:</span>
        <div class="frameworks">
            <div class="stack-group">
                <img alt="icon" class="framework-icon" src="/icons/ruby.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/rails.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/vue.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/nuxt.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/gsap-dark.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/semantic-ui.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/jquery.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/rest.svg"/>
            </div>
            <div class="stack-group">
                <img alt="icon" class="framework-icon" src="/icons/rails.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/rest.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/turbo.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/stimulus.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/semantic-ui.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/jquery.svg"/>
            </div>
            <div class="stack-group">
                <img alt="icon" class="framework-icon" src="/icons/wasm.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/javascript.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/html.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/css.svg"/>
                <img alt="icon" id="gsap-dark" class="framework-icon" src="/icons/gsap-dark.svg"/>
                <img alt="icon" id="jekyll" class="framework-icon" src="/icons/jekyll.svg"/>
            </div>
            <div class="stack-group">
                <img alt="icon" class="framework-icon" src="/icons/rails.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/turbo.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/semantic-ui.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/jquery.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/scss.svg"/>
            </div>
            <div class="stack-group">
                <img alt="icon" class="framework-icon" src="/icons/ruby.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/sinatra.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/html.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/css.svg"/>
                <img alt="icon" class="framework-icon" src="/icons/jquery.svg"/>
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
                    invalidateOnRefresh: false,
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
    top: 15%;
    left: 15%;
    display: flex;
    align-items: center;

    span {
        font-size: 1.3rem;
        font-family: 'Alegreya Sans', sans-serif;
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
@media only screen and (min-width: 576px) and (max-width: 992px) {
    .frameworks-list{
        top: 11%;
    }
}
</style>