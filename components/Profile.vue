<template>
    <div id="profile">
        <div class="greetings">Hi, I'm</div>
        <div class="name">Sriram V</div>
        <div class="job"><span id="role"></span> Developer</div>

        <Photos/>
    </div>
</template>

<script>
import Typed from "typed.js";

export default {
    data(){
        return {
            colors: ['#6BCB77', '#FD5D5D', '#4D96FF']
        }
    },
    mounted() {
        let typed = new Typed('#role', {
            strings: ['Front end', 'Back end', 'Web'],
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,

            preStringTyped: (arrayPos) => {
                $('.job span').css('color', this.colors[arrayPos]);
            },

            onComplete: () => {
                setTimeout( () => {
                    $('.typed-cursor').hide()
                }, 500);
            }
        })
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sen&family=Ubuntu:wght@500&display=swap');

#profile {
    margin-top: 90px;
    padding: 11rem 20rem 8rem;

    .greetings {
        font-family: 'Sen', sans-serif;
        font-size: 2.2rem;
    }

    .name {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 5.5rem;
        margin: 60px auto;
    }

    .job {
        font-size: 2.4rem;
    }

    .role{
        color: #6BCB77;
    }
}
</style>