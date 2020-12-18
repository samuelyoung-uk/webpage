<template>
  <div>
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Header from "./components/Header.vue";
import Main from "./components/sections/Main.vue";

@Component({
  components: {
    HelloWorld,
    Header,
    Main
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap');

  * {
    margin: 0;
  }
  body {
    height: 100vh;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
</style>
