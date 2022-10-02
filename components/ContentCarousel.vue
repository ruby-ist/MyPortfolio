<template>
    <div class="content-carousel">
        <div class="gradient-layer"></div>
        <div id="geobits-contents">
            <div class="content-info">
                GeoBITS is an online map made for navigating and finding classes inside the
                Bannari Amman Institute of Technology college campus. The special thing about this
                project, it is made without using any pre-existing Map APIs.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                This map has navigation feature, the routes are displayed dynamically with help of
                svg animations and the dijkstra algorithm to find the shortest path in the map. There are
                two modes of paths, vehicle and pedestrian paths.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It has both light mode and dark mode, and have details about each classes and
                labs in every building in the campus. You could also has pin and share an location, or find
                the route for any pinned location.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The map has two different layers, satellite and svg. The SVG layer map are drawn with
                Illustrator marking each and every building, playgrounds, path ways and roads.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                You can also view your current location inside the campus, GeoBITs matches your device's latitude
                and longitude along with the map's corners lat and long, and shows the location of your device, which
                will be keep updating itself while navigating around the campus.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="pingcoders-content">
            <div class="content-info">
                Pingcoders is an inter college programmer profile showcase and community. The app has two
                different OAuths, google and github and only the user with college mail id can create an account.
                It has an email verification system made with devise gem.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The colors of the each languages are taken from the github's programming language's color system. The
                suggestions are created dynamically by interacting with github and stackoverflow APIs.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The user can add their projects, languages, skills and contact information and they can also view
                other user's projects and skill sets. The user can add any number of projects as an repo belonging to
                their github account. It also has language used in the repo as github does.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                You can also add other social media links and your profile photo. If the user already provided the github name,
                they can also use their github avatar directly with the link. If the user was signed in with Github OAuth,
                their github username will be automatically detected.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The main idea of this project was to find the fellow coders or programmers inside the college by the language
                you are currently using in your project. You can search the other user with a name, language or particular skill.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="rubyonwasm-content">
            <div class="content-info">
                RubyOnWasm is a static online Ruby language interpreter. It runs the code completely on
                browser using WebAssembly without any backend server.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The recent version of Ruby 3.2.0 has come with WASI based WebAssembly support. This enables
                a CRuby binary to be available on Web browser, Serverless Edge environment, and other
                WebAssembly/WASI embedders.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The website have syntax highlighting, running, copying the code and some extra features.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                Since it runs completely on browser, it runs any code within a second. It also has shortcut
                keys to run the code.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The website can be shared natively using the new WebShare API.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="narrateit-content">
            <div class="content-info">
                Narrate-it is an blogging website, the first web app I developed with Rails framework. It
                was create as a part of the odin project tutorial.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The user can use markdown format to edit the content of their post. Each post have its comment
                section also.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                Each user have their own profile page, if the user is admin, his profile is displayed with
                crown. The profile contains user's details and their recent posts.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The app also has an admin dashboard which contains list of all users. The admin can delete any user's
                post or comment or delete the account permanently.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It also has an about page and responsive menu.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="flames-content">
            <div class="content-info">
                Flames is a find-a-match kinda app, created as fun project that turned out well.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It's just a game of predicting relationship status from two names. The result might be one of
                Friend, Love, Affection, Marriage, Enemy & Sibling.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The result also comes with a quote which is selected randomly from the group of quotes for that
                result in the backend.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                This app is created with Sinatra, Ruby's micro framework for web development and a minimal
                Ui with vanilla javascript and css.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It is the first app that made me feel like I've created something that serves a purpose even though a
                silly one.
            </div>
            <div class="content-info"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineNuxtComponent} from "#app";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

type dataGroup = {
    contentId: String[]
}

export default defineNuxtComponent({
    data: (): dataGroup => ({
        contentId: ["geobits", "pingcoders", "rubyonwasm", "narrate-it", "flames"]
    }),
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        let texts: HTMLElement[] = gsap.utils.toArray(".content-info");

        gsap.to(texts, {
            scrollTrigger: {
                trigger: "#projects",
                scroller: "body",
                start: () => "top top",
                end: () => "+=" + window.innerHeight * (texts.length / 2 - 1),
                toggleActions: "play none reverse none",
                scrub: true,
            },
            yPercent: -100 * (texts.length - 1),
            ease: "none"
        });
    }
})
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@400;500;600&display=swap');
.content-carousel {
    position: absolute;
    top: 30%;
    left: 15%;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Athiti', sans-serif;
    line-height: 2.5rem;
    height: 350px;
    width: 70%;
    overflow-y: hidden;

    .gradient-layer {
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(#F5F6F9, transparent, transparent, transparent, #F5F6F9);
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    .content-info {
        height: 350px;
        background: #F5F6F9;
        text-align: justify;
        padding: 15% 0;
    }
}

@media only screen and (max-width: 480px) {
    .content-carousel{
        font-size: 1rem;
        width: 90%;
        height: 200px;
        top: 210%;
        left: 5%;
        line-height: initial;
    }
}
</style>