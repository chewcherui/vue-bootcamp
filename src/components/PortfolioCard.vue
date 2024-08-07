<script lang="ts">

const projectList: {
    projectID: number,
    projectImg: string,
    projectTitle: string,
    projectDescription: string,
    completionDate: string,
    projectLabels: string[]
}[] = [ 
    {
        projectID: 3,
        projectImg: "",
        projectTitle: "Todo List Project",
        projectDescription: "placeholder 1",
        completionDate: "02/03/2024",
        projectLabels: ["React.js", "Javascript", "HTML", "CSS"]
    },
    {
        projectID: 2,
        projectImg: "",
        projectTitle: "Title Generator Project",
        projectDescription: "placeholder 2",
        completionDate: "02/01/2024",
        projectLabels: ["Javascript", "HTML", "CSS"]
    },
    {
        projectID: 1,
        projectImg: "",
        projectTitle: "Apple Homepage Clone Project",
        projectDescription: "placeholder 3",
        completionDate: "02/03/2024",
        projectLabels: ["React.js", "Javascript", "HTML", "CSS"]
    }
    ]
</script>

<template>
    <div class="project-card">
        <h1>{{ projectTitle }}</h1>
        <p>Project description: {{ projectDescription }}</p>
        <p>Completion date: {{ completionDate }}</p>
        <p>Labels: {{ projectLabels }} </p>
    </div>
</template>

<style scoped>
.project-card {
    width: 20vw;
    border: 1px solid;
    border-radius: 25px;
    background-color: #3d3d3d;
    color: #fff;
}
</style>
