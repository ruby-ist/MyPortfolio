<template>
    <div id="navbar">
        <div class="ui secondary right menu">
            <div class="ui huge item header">Srira.me</div>
            <div class="right menu">
                <a class="item">About</a>
                <a class="item">Skills</a>
                <a class="item">Projects</a>
                <a class="item">Contact</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            oldScroll: 0
        }
    },
    mounted(){
        let that = this;
        window.onscroll = function(e) {
            if(this.scrollY > that.oldScroll)
                gsap.to('#navbar', {yPercent: -100, ease: 'sine', duration: 0.5})
            else
                gsap.to('#navbar', {yPercent: 0, ease: 'sine', duration: 0.5})
            that.oldScroll = this.scrollY;
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Geo&display=swap');
#navbar{
    height: 90px;
    background: #F5F6F9;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;

    .ui.secondary.menu{
        width: 100%;
        padding: 0 6rem 0 3rem;

        .right.menu{
            .item{
                font-size: 1.2rem;
            }
        }
    }

    .ui.header{
        color: #1CD96E;
        font-family: 'Geo', sans-serif;
        font-size: 3.2rem;
    }
}
</style>