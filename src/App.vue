<template>
  <v-app>
  <v-app-bar>
    <v-icon icon="mdi-weather-sunny" color="primary"></v-icon>
    <v-switch color="primary" v-model="darkTheme" hide-details></v-switch>
    <v-icon icon="mdi-weather-night" color="primary"></v-icon>
  </v-app-bar>
  <v-main></v-main>
  </v-app>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const darkTheme = ref(true);

watch(darkTheme, (newVal) => {
  theme.change(newVal ? 'dark' : 'light');
})

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
