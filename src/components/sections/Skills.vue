<template>
    <div class="skills">
        <Title text="My Skills"/>
        <div class="skills-holder">
            <div class="skill-card" v-for="link in links" :key="link.src">
                <a :href="link.href" target="_blank"><img :src="require(`../../assets/logos/${link.src}.svg`)" :alt="link.src"/></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '../Title.vue';

@Component({
    components: {
        Title
    }
})
export default class Skills extends Vue {
    links: {href?: string; src: string}[] = [
        {
            href: "https://www.java.com",
            src: "java"
        },
        {
            href: "https://www.javascript.com",
            src: "javascript"
        },
        {
            href: "https://www.typescriptlang.org/",
            src: "typescript"
        },
        {
            src: "c"
        },
        {
            href: "https://isocpp.org/",
            src: "c++"
        },
        {
            href: "http://www.csharp.net",
            src: "csharp"
        },
        {
            href: "https://www.python.org/",
            src: "python"
        },
        {
            href: "https://www.gnu.org/software/bash/",
            src: "bash"
        },
        {
            href: "https://dotnet.microsoft.com/",
            src: "dotnet"
        },
        {
            href: "https://gradle.org/",
            src: "gradle"
        },
        {
            href: "https://www.electronjs.org/",
            src: "electron"
        },
        {
            href: "https://angular.io/",
            src: "angular"
        },
        {
            href: "https://vuejs.org/",
            src: "vue"
        },
        {
            href: "https://git-scm.com/",
            src: "git"
        },
        {
            href: "https://www.opengl.org",
            src: "opengl"
        },
        {
            href: "https://cmake.org/",
            src: "cmake"
        }
    ]
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