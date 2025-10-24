<template>
    <h1>Cards</h1>
    <div class="d-flex ga-1">
        <ProjectCard title="Project" description="description text"
            image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></ProjectCard>
        <HProjectCard title="Project" description="description text"
            image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></HProjectCard>
    </div>

</template>

<script setup lang="ts">
import ProjectCard from "vuetify-design-system/components/ProjectCard.vue"
import HProjectCard from "vuetify-design-system/components/HProjectCard.vue"
</script>