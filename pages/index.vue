<template>
    <div id="main">
        <NavBar />
        <Profile />
        <div class="empty"></div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600&display=swap');
#main{
    height: 200vh;
    overflow: hidden;
    background: #F5F6F9;
    font-family: 'Signika Negative', sans-serif;
    color: #393E46;

    .empty{
        width: 100%;
        height: 500px;
        background: #393E46;
    }
}
</style>