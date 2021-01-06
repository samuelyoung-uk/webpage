<template>
    <div class="skills">
        <Title text="My Skills"/>
        <div class="skills-holder">
            <div class="skill-card" ref="skill" v-for="link in links" :key="link.src">
                <a :href="link.href" target="_blank"><img :src="require(`../../assets/logos/${link.src}.svg`)" :alt="link.src"/></a>
            </div>
        </div>
    </div>
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
export default class Skills extends Vue {
    links: {href?: string; src: string}[] = require("../../assets/skills.json");

    mounted() {
        const skills = this.$refs.skill as Element[];
        for (const skill of skills) {
            gsap.from(skill,{
                scrollTrigger: {
                    trigger: skill,
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

.skills {
    margin: 5rem;

    .skills-holder {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .skill-card {
            background-image: url("../../assets/frame.svg");
            background-size: 100% 100%;
            width: 12.8rem;
            height: 12.8rem;
            margin: 1rem;
            display: grid;
            justify-content: center;
            align-items: center;

            img {
                position: relative;
                top: 0.2rem; /* it wants to be special */
                width: 6.4rem;
                height: auto;
                transition: width 0.5s;
            }

            img:hover {
                width: 7.2rem;
            }
        }
    }
}
</style>