<template>
    <v-card :color="color">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>Sass Var: {{ sassVar }}</v-card-text>
        <v-card-text>Theme Var: {{ themeVar }}</v-card-text>
    </v-card>
</template> 
<script lang="ts" setup>
defineProps({
    color: String,
    name: String,
    sassVar: String,
    themeVar: String,
})
</script>