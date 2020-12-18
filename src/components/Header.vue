<template>
  <header>
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
    <section class="start">
      <p class="title">You Name It</p>
      <p class="subtitle">Samuel Young - Full Stack Uni Student</p>
    </section>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  @import '../variables';

  header {
    height: 63px;
    margin: 0;
    font-family: 'Montserrat Alternates', sans-serif;
    text-align: center;
    display: grid;
    justify-content: stretch;

    .main-header {
      padding: 1em;
      display: flex;
      width: auto;
      background-image: url("../assets/header.png");
      justify-content: space-between;

      .title {
        font-weight: bold;
        font-size: 18px;
        color: $accent-dark;
      }

      ul {
        display: flex;
        gap: 1em;
        font-size: 16px;
        color: $accent-dark;
      }
    }

    .social-header {
      display: none;
      background-image: url("../assets/header-dark.png");
    }
  }

  .start {
    height: 800px;
    background-color: $main-dark;
  }

  @media only screen and (min-width: 800px) {
    header {
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