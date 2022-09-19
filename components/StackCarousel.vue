<template>
    <div class="frameworks-list">
        <span>Tech stack:</span>
        <div class="frameworks">
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/images/ruby.svg"/>
                <img class="framework-icon" src="~/assets/images/rails.svg"/>
                <img class="framework-icon" src="~/assets/images/vue.svg"/>
                <img class="framework-icon" src="~/assets/images/nuxt.svg"/>
                <img class="framework-icon" src="~/assets/images/gsap-dark.svg"/>
                <img class="framework-icon" src="~/assets/images/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/images/jquery.svg"/>
                <img class="framework-icon" src="~/assets/images/rest.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/images/rails.svg"/>
                <img class="framework-icon" src="~/assets/images/rest.svg"/>
                <img class="framework-icon" src="~/assets/images/turbo.svg"/>
                <img class="framework-icon" src="~/assets/images/stimulus.svg"/>
                <img class="framework-icon" src="~/assets/images/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/images/jquery.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/images/wasm.svg"/>
                <img class="framework-icon" src="~/assets/images/javascript.svg"/>
                <img class="framework-icon" src="~/assets/images/html.svg"/>
                <img class="framework-icon" src="~/assets/images/css.svg"/>
                <img id="gsap-dark" class="framework-icon" src="~/assets/images/gsap-dark.svg"/>
                <img id="jekyll" class="framework-icon" src="~/assets/images/jekyll.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/images/rails.svg"/>
                <img class="framework-icon" src="~/assets/images/turbo.svg"/>
                <img class="framework-icon" src="~/assets/images/semantic-ui.svg"/>
                <img class="framework-icon" src="~/assets/images/jquery.svg"/>
                <img class="framework-icon" src="~/assets/images/scss.svg"/>
            </div>
            <div class="stack-group">
                <img class="framework-icon" src="~/assets/images/ruby.svg"/>
                <img class="framework-icon" src="~/assets/images/sinatra.svg"/>
                <img class="framework-icon" src="~/assets/images/html.svg"/>
                <img class="framework-icon" src="~/assets/images/css.svg"/>
                <img class="framework-icon" src="~/assets/images/jquery.svg"/>
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
        stacks.forEach((stack, i, stacks) => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects",
                    scroller: "body",
                    start: () => "top -" + (window.innerHeight * (5 * (i + 1) - 1)),
                    end: () => "+=" + window.innerHeight * 5,
                    toggleActions: "play complete complete reset",
                    invalidateOnRefresh: true,
                }
            })
            tl.to(stack, {
                opacity: 0,
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.5,
                ease: 'slow'
            }).fromTo(stacks[i+1],{
                scaleX: 0,
            }, {
                scaleX: 1,
                transformOrigin: "left",
                opacity: 1,
                duration: 0.5,
                ease: 'slow'
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
</style>