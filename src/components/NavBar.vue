<script lang="ts">
import { ref } from "vue";

</script>

<template>
    <div class="navbar-space">
        <div class="nav-item">
            <span>Site logo</span>
            <span>Dropdowns</span>
        </div>
    </div>
</template>

<style scoped>
.navbar-space {
    margin: 2px;
    position: top ;
}

.nav-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 6px;
}
</style>