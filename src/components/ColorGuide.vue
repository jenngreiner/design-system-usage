<template>
    <h1>Color Guide</h1>
    <v-card color="primary">
        <v-card-title>Primary</v-card-title>
    </v-card>
    <v-card color="accent">
        <v-card-title>Accent</v-card-title>
    </v-card>
    <v-card color="dark">
        <v-card-title>Dark</v-card-title>
    </v-card>
    <v-card color="light">
        <v-card-title>Light</v-card-title>
    </v-card>
    <v-card color="background">
        <v-card-title>Background</v-card-title>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
</style>
