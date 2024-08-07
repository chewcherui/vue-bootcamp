<script lang="ts">

import { ref, defineEmits } from 'vue'

</script>

<template>
    <div class="navbar-space">
        <div class="nav-item">
            <span>Site logo</span>
            <button @click="$emit(toggleClick)" type="button"> Dark | Light mode toggle </button>
        </div>
    </div>
</template>

<style scoped>
.navbar-space {
    margin: 2px;
    position: top;
}

.nav-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 6px;
}

</style>