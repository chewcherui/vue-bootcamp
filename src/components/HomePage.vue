<script setup lang="ts">
import { ref, computed } from 'vue'
import { ProjectList } from './ProjectList'
import ContactInfo from './ContactInfo.vue'
import PortfolioCard from './PortfolioCard.vue'

defineProps<{ pageTitle: string }>()

const experienceLevel = computed(() => {
  if (ProjectList.length > 10) {
    return "an experienced";
  } else {
    return "a budding"
  }
}
)

</script>

<template>
  <h1>{{ pageTitle }}</h1>

  <!-- Self intro -->
  <div class="homepage-banner">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore non, dolorem error autem impedit culpa aliquid quis, minima repudiandae iste praesentium, deleniti dolores nisi est officiis dicta sit delectus quas!</p>
  </div>

  <!-- Portfolio -->
  <div class="homepage-banner">
    <h2> I am {{ experienceLevel }} developer </h2>
    <portfolio-card :projects="ProjectList"></portfolio-card>
  </div>

  <!-- Contact information -->
  <div class="homepage-banner">
    <contact-info></contact-info>
  </div>

  
</template>

<style scoped>
.homepage-banner {
  height: 35rem;
  width: 60vw;
  margin: 1rem;
  padding: 2rem;
  text-wrap: pretty;
  overflow: hidden;
  border: 1px solid black
}

</style>
