<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Design System Usage Guide</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-icon icon="mdi-weather-sunny" color="primary"></v-icon>
      <v-switch color="primary" v-model="darkTheme" hide-details></v-switch>
      <v-icon icon="mdi-weather-night" color="primary"></v-icon>
    </v-app-bar>

    <!-- Left Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app permanent width="220">
      <v-list nav density="compact">
        <v-list-item v-for="(item, i) in navItems" :key="i" :title="item.title" :prepend-icon="item.icon"
          @click="scrollToSection(item.target)"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Page Content -->
    <v-main>
      <div class="content">
        <section id="alerts">
          <AlertContainer />
        </section>

        <section id="buttons">
          <ButtonContainer />
        </section>

        <section id="colors">
          <ColorGuide />
        </section>

        <section id="cards">
          <CardContainer />
        </section>
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import AlertContainer from './containers/AlertContainer.vue'
import ButtonContainer from './containers/ButtonContainer.vue'
import ColorGuide from './containers/ColorGuide.vue'
import CardContainer from './containers/CardContainer.vue'

const theme = useTheme()
const darkTheme = ref(true)
const drawer = ref(true)

watch(darkTheme, (newVal) => {
  theme.global.name.value = newVal ? 'dark' : 'light'
})

const navItems = [
  { title: 'Alerts', icon: 'mdi-alert', target: 'alerts' },
  { title: 'Buttons', icon: 'mdi-gesture-tap-button', target: 'buttons' },
  { title: 'Colors', icon: 'mdi-palette', target: 'colors' },
  { title: 'Cards', icon: 'mdi-card-outline', target: 'cards' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.content {
  padding: 1rem;
}

section {
  margin-bottom: 3rem;
}
</style>
