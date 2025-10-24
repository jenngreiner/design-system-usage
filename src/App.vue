<template>
  <v-app>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Design System Usage Guide</v-app-bar-title>
    <v-icon icon="mdi-weather-sunny" color="primary"></v-icon>
    <v-switch color="primary" v-model="darkTheme" hide-details></v-switch>
    <v-icon icon="mdi-weather-night" color="primary"></v-icon>
  </v-app-bar>
  <v-main>
    <AlertContainer></AlertContainer>
    <ButtonContainer></ButtonContainer>
    <ColorGuide></ColorGuide>
  </v-main>
  </v-app>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify';
import AlertContainer from './components/AlertContainer.vue';
import ButtonContainer from './components/ButtonContainer.vue';
import ColorGuide from './components/ColorGuide.vue';

const theme = useTheme();
const darkTheme = ref(true);

watch(darkTheme, (newVal) => {
  theme.change(newVal ? 'dark' : 'light');
})

</script>

<style scoped>
</style>
