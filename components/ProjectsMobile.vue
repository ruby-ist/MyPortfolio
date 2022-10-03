<template>
    <section id="projects">
        <h3 class="ui header">My Projects</h3>
        <div class="logo">
            <img :src="'/logos/' + projects[index]['logo']" alt="logo">
        </div>
        <div class="images">
            <div id="mac">
                <img id="mac-template" src="~/assets/background/mac-outline.svg" alt="mac"/>
                <img class="mac-image" :src="'/mac-carousel/' + projects[index]['macImage']" alt="preview 1"/>
            </div>
            <div id="iphone">
                <img id="phone-template" src="~/assets/background/iphone-outline.svg" alt="phone"/>
                <img class="phone-image" :src="'/iphone-carousel/' + projects[index]['phoneImage']" alt="preview 2"/>
            </div>
        </div>
        <div class="url-holder">
            <span class="label">Url:</span>
            <a id="url-link" :href="projects[index]['url']">
                <span id="url">{{ projects[index]['url'] }}</span>
                <i class="external link icon"></i>
            </a>
        </div>
        <div class="content">
            {{ projects[index]['content'] }}
        </div>
        <div class="frameworks-list">
            <span>Tech Stack:</span>
            <div class="frameworks">
                <div class="stack-group">
                    <img v-for="icon in projects[index]['stacks']"
                         alt="icon"
                         class="stack-icon"
                         :src="'/icons/' + icon + '.svg'"/>
                </div>
            </div>
        </div>
        <div class="menu">
            <div id="mini-menu" class="ui secondary menu">
                <a class="active item" @click="switchTo(0)">
                    <img src="/logos/geobits-mini.svg" alt="mini"/>
                </a>
                <a class="item" @click="switchTo(1)">
                    <img src="/logos/pingcoders-mini.svg" alt="mini"/>
                </a>
                <a class="item" @click="switchTo(2)">
                    <img src="/logos/rubyonwasm-mini.svg" alt="mini"/>
                </a>
                <a class="item" @click="switchTo(3)">
                    <img src="/logos/narrateit-mini.svg" alt="mini"/>
                </a>
                <a class="item" @click="switchTo(4)">
                    <img src="/logos/flames-mini.svg" alt="mini"/>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";

type Project = {
    logo: String
    stacks: String[]
    macImage: String
    phoneImage: String
    url: String
    content: String
}

type dataGroup = {
    projects: Project[],
    index: Number
}
export default defineNuxtComponent({
    data: (): dataGroup => ({
        projects: [
            {
                logo: "geobits.svg",
                stacks: ['ruby', 'rails', 'vue', 'nuxt', 'gsap-dark', 'semantic-ui', 'jquery', 'rest'],
                macImage: 'geobits-2.png',
                phoneImage: 'geobits-5.png',
                url: "https://geobits.onrender.com",
                content: `GeoBITS is an online map made for navigating and finding classes inside the
            Bannari Amman Institute of Technology college campus. The special thing about this
            project, it is made without using any pre-existing Map APIs. This map has navigation feature,
            the routes are displayed dynamically with help of svg animations and the dijkstra algorithm to
            find the shortest path in the map. There are two modes of paths, vehicle and pedestrian paths.`
            },
            {
                logo: "pingcoders.svg",
                stacks: ['rails', 'rest', 'turbo', 'stimulus', 'semantic-ui', 'jquery'],
                macImage: 'pingcoders-2.png',
                phoneImage: 'pingcoders-4.png',
                url: "https://pingcoders.herokuapp.com",
                content: `Pingcoders is an inter college programmer profile showcase and community. The app has two
                different OAuths, google and github and only the user with college mail id can create an account.
                It has an email verification system made with devise gem.The colors of the each languages are taken
                from the github's programming language's color system. The suggestions are created dynamically by
                interacting with github and stackoverflow APIs.`
            },
            {
                logo: "rubyonwasm.svg",
                stacks: ['wasm', 'javascript', 'html', 'css', 'gsap-dark', 'jekyll'],
                macImage: 'rubyonwasm-3.png',
                phoneImage: 'rubyonwasm-5.png',
                url: "https://rubyonwasm.onrender.com",
                content: `RubyOnWasm is a static online Ruby language interpreter. It runs the code completely on
                browser using WebAssembly without any backend server. The recent version of Ruby 3.2.0 has come with
                WASI based WebAssembly support. This enables a CRuby binary to be available on Web browser, Serverless
                Edge environment, and other WebAssembly/WASI embedders. The website have syntax highlighting, running,
                copying the code and some extra features.`
            },
            {
                logo: "narrateit.svg",
                stacks: ['rails', 'turbo', 'semantic-ui', 'jquery', 'scss'],
                macImage: 'narrateit-2.png',
                phoneImage: 'narrateit-4.png',
                url: "https://narrate-it.herokuapp.com",
                content: `Narrate-it is an blogging website, the first web app I developed with Rails framework. It
                was create as a part of the odin project tutorial. The user can use markdown format to edit the
                content of their post. Each post have its comment section also. Each user have their own profile page,
                if the user is admin, his profile is displayed with crown. The profile contains user's details
                and their recent posts.`
            },
            {
                logo: "flames.svg",
                stacks: ['ruby', 'sinatra', 'html', 'css', 'jquery'],
                macImage: 'flames-3.png',
                phoneImage: 'flames-2.png',
                url: "https://burningheart.herokuapp.com",
                content: `Flames is a find-a-match kinda app, created as fun project that turned out well.
                It's just a game of predicting relationship status from two names. The result might be one of
                Friend, Love, Affection, Marriage, Enemy & Sibling. The result also comes with a quote which is
                selected randomly from the group of quotes for that result in the backend. This app is created with
                Sinatra, Ruby's micro framework for web development and a minimal Ui with vanilla javascript and css. `
            }
        ],
        index: 0
    }),
    methods: {
        switchTo(num) {
            this.index = num;
            let current = $('#mini-menu .active.item');
            if (current !== undefined)
                current.removeClass('active');
            let items = $('#mini-menu .item');
            items[num].classList.add('active');
        }
    }
})
</script>

<style scoped lang="scss">
#projects {
    display: none;
    padding: 6rem 3rem 200px;

    h3 {
        text-align: center;
        margin-bottom: 50px;
    }

    .ui.large.header {
        color: #116cff;
    }

    .logo {
        margin-bottom: 20px;
        img {
            height: 30px;
        }
    }

    .frameworks-list {
        display: flex;
        align-items: center;
        margin-top: 25px;

        .frameworks {
            display: inline-flex;
            flex-flow: row nowrap;
            margin-left: 20px;
        }

        span {
            font-size: 1rem;
            display: block ruby;
        }

        .stack-group {
            width: 60vw;
        }

        .stack-icon {
            height: 20px;
            margin: 0 5px 7px;
            transform: none !important;
        }
    }

    .images {
        height: 240px;
        position: relative;

        #mac, #iphone{
            position: absolute;
        }

        img {
            position: absolute;
        }

        #phone-template {
            width: 80px;
            z-index: 5;
        }

        #mac-template {
            width: 300px;
            z-index: 3;
        }

        #mac{
            left: -15%;
            top: 10%;
        }

        .mac-image {
            width: 228px;
            height: 144px;
            top: 13px;
            left: 36px;
            z-index: 2;
        }

        #iphone{
            top: 25%;
            right: 15%;
        }

        .phone-image {
            width: 72px;
            height: 149px;
            top: 9px;
            left: 4px;
            z-index: 4;
        }
    }

    .url-holder {
        font-size: 1.1rem;
        z-index: 7;

        span.label {
            margin-right: 5px;
        }

        #url-link {
            cursor: pointer;
        }
    }

    .content {
        margin: 30px 0;
        text-align: justify;
    }

    .menu {
        margin: 40px auto 10px;

        .ui.secondary.menu {
            background: #e6e7e8;
            display: flex;
            justify-content: center;
            width: max-content;
            border-radius: 50px;

            .item {
                border-radius: 50%;
                margin: 0 !important;

                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
}

@media only screen and (max-width: 480px) {
    #projects {
        display: block;
    }
}
</style>