<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="header">
    <video src="/meowW.mp4" autoplay loop muted></video>
    <h1>{{ msg }}</h1>
  </div>

  <!--<div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
</template>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header video {
  height:80%;
  position: absolute;
  bottom: 0;
  left: -200px;
}
.header h1 {
  font-size: 5rem;
  font-weight: 900;
  text-shadow: 0 0 10px #000;
  position: absolute;
  right: 300px;
  top: 30%;
  transform: rotate(10deg);
}
</style>
