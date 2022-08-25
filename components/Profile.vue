<template>
    <div id="profile">
        <div class="greetings">Hi, I'm</div>
        <div class="name">Sriram V</div>
        <div class="job"><span class="role">Backend</span> Developer</div>

        <Photos />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sen&family=Ubuntu:wght@500&display=swap');
#profile{
    margin-top: 90px;
    padding: 11rem 20rem 8rem;

    .greetings{
        font-family: 'Sen', sans-serif;
        font-size: 2.2rem;
    }

    .name{
        font-family: 'Ubuntu', sans-serif;
        font-weight: 500;
        font-size: 5.5rem;
        margin: 60px auto;
    }

    .job{
        font-size: 2.4rem;
    }

    .role{
        color: #1CD96E;
    }
}
</style>