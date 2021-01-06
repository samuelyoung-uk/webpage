<template>
    <section class="start">
        <div class="main">
            <div class="titlebox">
                <p class="title">You Name It</p>
                <p class="subtitle">Samuel Young - Full Stack Uni Student</p>
            </div>
            <nav>
                <img src="../../assets/graphic-down.svg" alt="arrow down" class="left">
                <img src="../../assets/graphic.svg" alt="emblem" class="middle">
                <img src="../../assets/graphic-down.svg" alt="arrow down" class="right">
                <a href="#work" class="left">My Work</a>
                <a href="#skills" class="right">My Skills</a>
            </nav>
        </div>
        <div class="side">
            <img src="../../assets/side-graphic.svg" alt="side graphic">
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
  @import '../../variables';

.start {
    .main {
        height: 80vh;
        padding-left: 50px;
        padding-right: 50px;
        background-color: $main-dark;
        display: grid;
        align-items: center;

        .titlebox {
            text-align: center;
            .title {
                color: $accent-dark;
                font-size: 3.6rem;
                font-weight: bold;
            }

            .subtitle {
                color: $accent-med;
                font-size: 1.2rem;
            }
        }

        nav {
            display: grid;
            grid-template-columns: auto 6.4rem 2.6rem 6.4rem 2.6rem 6.4rem auto;
            grid-template-rows: 2;
            row-gap: 3.2rem;

            img {
                grid-row: 1;
                height: 6.4rem;
            }

            a {
                grid-row: 2;
                font-size: 1.2rem;
                text-decoration: none;
                text-align: center;
                padding: 0.5rem;
                background-color: $main-light;
                border-radius: 0.3rem;
            }

            .left {
                grid-column: 2;
            }

            .middle {
                grid-column: 4;
            }

            .right {
                grid-column: 6;
            }

            padding-bottom: 4rem;
        }
    }

    .side {
        img {
            display: none;
        }
    }

    &::after {
        display: block;
        background-image: url("../../assets/footer.svg");
        background-size: auto 9.6rem;
        background-position: center;
        width: 100%;
        height: 9.6rem;
        position: relative;
        top: -4.8rem;
        content: "";
    }
}

@media only screen and (min-width: 800px) {
    .start{
        display: grid;
        grid-template-columns: 66% 33%;
        grid-template-rows: 1;

        .main {
            grid-column: 1;
            grid-row: 1;
        }

        .side {
            grid-column: 2;
            grid-row: 1;
            display: grid;
            align-items: center;

            img {
                display: initial;
                position: relative;
                left: -9.6rem;
                height: 25.6rem;
            }
        }
    }
}

@media only screen and (min-width: 1400px) {
    .start{
        .main {
            height: 70vh;
        }
    }
}


</style>