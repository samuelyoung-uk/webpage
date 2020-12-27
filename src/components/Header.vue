<template>
  <header>
    <div class="header-spacer"></div>
    <div class="header-fixer">
      <div class="main-header">
        <p class="title">Samuel Young</p>
        <nav>
          <ul>
            <li>My Work</li>
            <li>My Skills</li>
          </ul>
        </nav>
      </div>
      <div class="social-header">
        <ul>
          <li>#</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  @import '../variables';

  header {
    height: 6.3rem;
    position: relative;

    .header-fixer {
      position: fixed;
      width: 100%;
      height: 6.7rem;
      margin: 0;
      text-align: center;
      display: grid;
      justify-content: stretch;
      z-index: 1;
    }
    
    .main-header {
      padding: 1.6rem;
      display: flex;
      width: auto;
      background-image: url("../assets/header.svg");
      background-size: auto 100%;
      justify-content: space-between;
      align-items: center;

      .title {
        font-weight: bold;
        font-size: 1.5rem;
        color: $accent-dark;
        padding-bottom: 0.5rem;
      }

      ul {
        display: flex;
        gap: 1.6rem;
        font-size: 1.5rem;
        color: $accent-dark;
        padding-bottom: 0.5rem;
      }
    }

    .social-header {
      display: none;
      background-image: url("../assets/header-dark.svg");
      background-size: auto 100%;
    }
  }

  @media only screen and (min-width: 800px) {
    .header-fixer {
      grid-template-columns: 66% 33%;
      grid-template-rows: 1;
      
      .main-header {
        grid-column: 1;
        grid-row: 1;
      }

      .social-header {
        grid-column: 2;
        grid-row: 1;
        display: initial;
      }
    }
  }
</style>