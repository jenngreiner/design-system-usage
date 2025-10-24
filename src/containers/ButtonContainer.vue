<template>
    <h1>Buttons</h1>
    <div class="d-flex ga-1">
        <v-btn color="primary">Primary</v-btn>
        <v-btn color="accent">Accent</v-btn>
        <v-btn color="light">Light</v-btn>
        <v-btn color="dark">Dark</v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped></style>
