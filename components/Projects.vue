<template>
    <section id="projects">
        <div class="ui center secondary menu">
            <a class="active item">GeoBITs</a>
            <a class="item">Pingcoders</a>
            <a class="item">RubyOnWasm</a>
            <a class="item">ArcaneChats</a>
            <a class="item">Narrate-it</a>
        </div>

        <div class="showcase">
            <div class="ui grid">
                <div class="nine wide column">
                    <div class="content-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div class="seven wide column">
                    <div class="ui card">
                        <div class="image">
                            <img src="/images/avatar2/large/kristy.png">
                        </div>
                        <div class="content">
                            <a class="header">Kristy</a>
                            <div class="meta">
                                <span class="date">Joined in 2013</span>
                            </div>
                            <div class="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div class="extra content">
                            <a>
                                <i class="user icon"></i>
                                22 Friends
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({});
</script>

<style scoped lang="scss">
#projects {
    padding-top: 100px;

    .ui.secondary.menu {
        justify-content: center;
    }

    .showcase{
        display: grid !important;
        place-items: center;
        height: 80vh;
    }

    .column{
        display: grid !important;
        place-items: center;
        padding: 50px;
    }

    .content-info{
        padding: 50px 150px;
    }
}
</style>