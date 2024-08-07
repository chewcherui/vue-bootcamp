<script setup lang="ts">
import { ref } from 'vue'
import ContactInfo from './ContactInfo.vue'
import PortfolioCard from './PortfolioCard.vue'

defineProps<{ pageTitle: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ pageTitle }}</h1>

  <!-- Self intro -->
  <div class="homepage-banner">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore non, dolorem error autem impedit culpa aliquid quis, minima repudiandae iste praesentium, deleniti dolores nisi est officiis dicta sit delectus quas!</p>
  </div>

  <!-- Portfolio -->
  <div class="homepage-banner">
    <portfolio-card></portfolio-card>
  </div>

  <!-- Contact information -->
  <div class="homepage-banner">
    <contact-info></contact-info>
  </div>

  
</template>

<style scoped>
.homepage-banner {
  height: 20rem;
  width: 80vw;
  padding: 2rem;
  text-wrap: pretty;
}
</style>
