<script setup lang="ts">
import HomePage  from './components/HomePage.vue'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

const lightMode = ref(true)

const toggleMode = () => {
    lightMode.value = !lightMode.value
    if (lightMode.value) {
      document.body.classList.add("light-mode") 
      document.body.classList.remove("dark-mode") 
    } else {
      document.body.classList.add("dark-mode")
      document.body.classList.remove("light-mode")
    }
}

</script>

<template>
  <NavBar @toggleClick="toggleMode" />
  <HomePage page-title="Welcome to my site" />
</template>

<style scoped>

</style>
