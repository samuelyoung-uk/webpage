<template>
    <h1 ref="title" class="animtitle">{{text}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
    props: [
        'text'
    ],
})
export default class Title extends Vue {
    mounted() {
        const title = this.$refs.title as Element;
        gsap.from(title,{
            scrollTrigger: {
                trigger: title,
                toggleActions: "restart none restart none"
            },
            opacity: 0,
            duration: 1
        });
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        display: inline;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        display: flex;
        justify-content: space-between;
    }

    h1::before {
        content: "";
        background-image: url("../assets/graphic-small.svg");
        display: inline-block;
        height: 4.8rem;
        width: 4.8rem;
        background-size: 100% 100%;
    }

    h1::after {
        content: "";
        background-image: url("../assets/graphic-small.svg");
        display: inline-block;
        height: 4.8rem;
        width: 4.8rem;
        background-size: 100% 100%;
    }

    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
</style>