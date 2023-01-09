<template>
    <div class="content-carousel">
        <div class="gradient-layer"></div>
        <div id="actual-contents">
        <div id="geobits-content">
            <div class="content-info">
                GeoBITS is a web mapping platform exclusively made for navigating and finding classes inside the
                Bannari Amman Institute of Technology college campus. This project was created without
                using any pre-existing Map APIs.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                This map has a navigation feature. The routes are displayed dynamically with the help of
                SVG animations and the Dijkstra algorithm to find the shortest path on the map. There are
                two types of paths: vehicle paths and pedestrian paths.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It supports both light mode and dark mode and has details about each class and lab in
                every building on campus. You could also pin and share a location or find the route for
                any pinned location.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The map has two different layers: satellite and SVG. The SVG layer map is drawn with
                Illustrator, marking each and every building, playground, path, and road.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                You can also view your current location inside the campus. GeoBITs matches your device's
                latitude and longitude with the map's corners and shows the location of your device
                relative to the map, which will keep updating itself while you navigate around the campus.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="pingcoders-content">
            <div class="content-info">
                Pingcoders is an intra-college programmers profile showcase and community. The app has two
                different OAuths, google and github and only the user with college mail id can create an account.
                It has an email verification system made with Devise.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The colours of each language are taken from Github's programming language's colour system. The
                suggestions are created dynamically by interacting with the GitHub and StackOverflow APIs.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The user can add their projects, experiences, skills and contact information and they can also view
                other user's projects and skill sets. The user can add any number of projects as an repo belonging to
                their github account. It also has an in-app chatting feature with web sockets support.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                You can also add other social media links and profile photo. You can also directly fetch your profile pic
                from your Github account. Once the user sign in with Github OAuth, their github username will be automatically
                detected. You can also recruit other people for your project ideas by posting a job. It also supports markdown formatting.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                The user can also showcase submit their certificates in achievements section. The main goal of this project was to
                locate other coders and programmers within the college based on the language you are currently using in your project.
                You can search the other user with a name, language or particular skill.
            </div>
            <div class="content-info"></div>
        </div>
        <div id="rubyonwasm-content">
            <div class="content-info">
                RubyOnWasm is a static page that serves as an online Ruby language interpreter. It runs the code completely on
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
                Because it is entirely browser-based, it almost always runs any code in a relatively short
                period of time, considering that no HTTP request is sent to run the code and obtain the output.
                It also has shortcut keyboard keys to run the code.
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
                Flames is a find-a-match kinda app, created as fun project that turned out well responsive.
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
                UI with vanilla javascript and css.
            </div>
            <div class="content-info"></div>
            <div class="content-info">
                It is the first app that made me feel like I've created something that serves a purpose even though a
                silly one.
            </div>
            <div class="content-info"></div>
        </div>
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
    top: 25%;
    left: 15%;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Sen', sans-serif;
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
@media only screen and (min-width: 576px) and (max-width: 768px) {
    .content-carousel{
        top: 22%;
        width: 100%;
        font-size: 1.2rem;
    }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
    .content-carousel{
        top: 22%;
        width: 85%;
    }
}
</style>