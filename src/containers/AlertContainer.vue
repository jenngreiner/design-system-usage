<template>
    <h1>Alerts</h1>
    <div class="d-flex ga-1 flex-column">
        <v-alert color="success" type="success" title="Success" text="I am a success alert!"></v-alert>
        <v-alert color="info" type="info" title="Info" text="I am an info alert!"></v-alert>
        <v-alert color="error" type="error" title="Error" text="I am an error alert!"></v-alert>
        <v-alert color="warning" type="warning" title="Warning" text="I am a warning alert!"></v-alert>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped></style>
