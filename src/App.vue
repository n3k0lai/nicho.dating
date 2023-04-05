<script setup lang="ts">
import HelloWorld from './components/Header.vue'
import Socials from './components/Socials.vue'
</script>

<template>
  <!--<div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>-->
  <HelloWorld msg="GAMER" />
  <div class="main">
    <Socials />
  </div>
</template>

<style>
.main {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
