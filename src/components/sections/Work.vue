<template>
    <section class="work" id="work">
        <Title text="My Work"/>
        <div class="card-holder">
            <div ref="card" class="card" v-for="card in work" :key="card.src">
                <h1>{{card.title}}</h1>
                <p>{{card.desc}}</p>
                <img :src="require(`../../assets/${card.src}.svg`)" :alt="card.alt"/>
             </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '../Title.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
    components: {
        Title
    }
})
export default class Work extends Vue {
    work = require("../../assets/work.json");

    mounted() {
        const cards = this.$refs.card as Element[];
        for (const card of cards) {
            gsap.from(card,{
                scrollTrigger: {
                    trigger: card,
                    toggleActions: "restart none none none"
                },
                opacity: 0,
                duration: 2
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../variables';

.work {
    margin: 5rem;
    
    .card-holder {
        display: grid;
        gap: 4rem;
        justify-items: center;

        .card {
            padding: 1em;
            background-image: url("../../assets/graphic-bg.svg");
            background-position: center;
            border: 0.5em $main-dark solid;
            display: grid;
            width: 100%;
            grid-gap: 1em;

            h1, p {
                text-align: center;
            }
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
}
</style>