<template>
  <div>
    <Header/>
    <Hero/>
    <Work/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from "./components/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Work from "./components/sections/Work.vue";

@Component({
  components: {
    Header,
    Hero,
    Work
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap');

  * {
    margin: 0;
  }
  html {
    font-size: 10px;
  }
  body {
    height: 100vh;
    font-family: 'Montserrat Alternates', sans-serif;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }

  
  @media only screen and (min-width: 800px) {
    html {
      font-size: 10px;
    }
  }

  @media only screen and (min-width: 1400px) {
    html {
      font-size: 20px;
    }
  }
</style>
