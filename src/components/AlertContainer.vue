<template>
    <h1>Alerts</h1>
    <v-alert color="success" title="Success" text="I am a success alert!"></v-alert>
    <v-alert color="info" title="Info" text="I am an info alert!"></v-alert>
    <v-alert color="error" title="Error" text="I am an error alert!"></v-alert>
    <v-alert color="warning" title="Warning" text="I am a warning alert!"></v-alert>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
</style>
