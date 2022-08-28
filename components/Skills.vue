<template>
    <section id="skills">
        <div class="skill-icons">
            <img class="skill-icon" alt="" src="~/assets/images/ruby.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/rails.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/sinatra.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/vue.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/nuxt.svg" />
        </div>
        <div class="skill-icons">
            <img class="skill-icon" alt="" src="~/assets/images/python.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/javascript.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/turbo.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/stimulus.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/semantic-ui.svg" />
        </div>
        <div class="skill-icons">
            <img class="skill-icon" alt="" src="~/assets/images/c.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/c++.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/gsap.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/svg.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/illustrator.svg" />
        </div>
        <div class="skill-icons">
            <img class="skill-icon" alt="" src="~/assets/images/jquery.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/scss.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/figma.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/rest.svg" />
            <img class="skill-icon" alt="" src="~/assets/images/docker.svg" />
        </div>
    </section>
</template>

<script>
export default {
    name: "skills"
}
</script>

<style scoped lang="scss">
#skills{
    width: 100%;
    background: #393E46;
    padding: 10%;

    .skill-icons{
        display: flex;
        width: 50%;
        flex-flow: row wrap;
        text-align: right;
    }

    .skill-icon{
        height: 45px;
        width: 45px;
        margin: 18px;
        transition: 1s transform;
        cursor: pointer;

        &:hover{
            transform: scale(1.3);
        }
    }
}
</style>