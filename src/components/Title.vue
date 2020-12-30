<template>
    <h1>{{text}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: [
        'text'
    ]
})
export default class Title extends Vue {}
</script>

<style lang="scss" scoped>
    h1 {
        margin-left: 5rem;
        margin-right: 5rem;
        display: inline;
        text-align: center;
        margin-top: 5rem;
        font-size: 4rem;
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
</style>