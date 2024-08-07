<script setup lang="ts">

import { intProject } from './ProjectList'

defineProps<{ projects: intProject[]}>()

</script>

<template>
    <div>
        <ul>
            <li v-for="project in projects" :key="project.projectID"> 
                <h1>{{ project.projectTitle }}</h1>
                <img :src=project.projectImg />
                <p>Project description: {{ project.projectDescription }}</p>
                <p>Completion date: {{ project.completionDate }}</p>
                <p>Labels: {{ project.projectLabels }} </p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

li{
    list-style: none;
    padding: 1rem;
    margin: 1rem;
    width: 25%;
    height: auto;
    border: 1px solid;
    border-radius: 25px;
    background-color: #3d3d3d;
    color: #fff;
}

img{
    width: 40%;
    height: auto;
}
</style>
