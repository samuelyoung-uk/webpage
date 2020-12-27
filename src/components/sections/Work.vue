<template>
    <div class="work">
        <h1>My Work</h1>
        <div class="card-holder">
            <div class="card">
                <h1>Large Scale Java Application</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto corrupti nisi autem? Dolore quia vero, ullam architecto praesentium saepe placeat, illo ratione nisi provident odio reiciendis unde labore corrupti! Eius.</p>
                <img src="../../assets/graphic-blocks.svg" alt="Block Graphic">
            </div>
            <div class="card">
                <h1>Online Verification Flow</h1>
                <p>Repellendus ad voluptatem tenetur ea debitis consequatur dignissimos, impedit deleniti labore quasi, in, temporibus recusandae non quisquam maxime. Similique ipsam nam modi eius exercitationem provident, incidunt tenetur et distinctio quae?</p>
                <img src="../../assets/graphic-shield.svg" alt="Shield Graphic">
            </div>
            <div class="card">
                <h1>Backend NoSQL database &amp; release manager</h1>
                <p>Quaerat at sit minus corporis nisi suscipit repellendus laborum, dolorem illo dolores beatae eligendi natus, ullam voluptatum modi nobis magnam soluta quas magni tenetur ut enim, quis et. Nam, accusamus.</p>
                <img src="../../assets/graphic-server.svg" alt="Server Graphic">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../variables';

h1, p {
    text-align: center;
}

.card-holder {
    margin: 5em;
    display: grid;
    gap: 4em;
    justify-items: center;

    .card {
        padding: 1em;
        background-image: url("../../assets/graphic-bg.svg");
        background-position: center;
        border: 0.5em $main-dark solid;
        display: grid;
        width: 100%;
        grid-gap: 1em;
    }
}

@media only screen and (max-width: 800px) {
    .card-holder {
        margin: 2em;

        .card {
            grid-template-columns: auto 8em;

            h1, p {
                grid-column: 1;
                text-align: left;
            }

            img {
                grid-row: 1 / 3;
                grid-column: 2;
                width: 6em;
                margin: auto;
            }
        }
        
        .card:nth-child(even) {
            grid-template-columns: 8em auto;
            text-align: right;

            h1, p {
                grid-column: 2;
                text-align: right;
            }

            img {
                grid-row: 1 / 3;
                grid-column: 1;
                height: auto;
                margin:auto;
            }
        }
    }
}

@media only screen and (min-width: 800px) {
    .card-holder {
        display: flex;
        justify-content: space-between;

        .card {
            img {
                height: 8em;
                margin: auto;
            }

            h1 {
                align-self: end;
            }
        }

        .card:nth-child(even) {
            h1 {
                grid-row: 2;
            }

            p {
                grid-row: 3;
            }

            img {
                grid-row: 1;
            }
        }
    }
}
</style>