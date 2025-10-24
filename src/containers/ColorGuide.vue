<template>
    <h1>Color Guide</h1>
    <div class="d-flex ga-1">
        <ColorCard color="primary" name="Primary" :sassVar="'$' + themePrefix + 'Primary'" themeVar="v-theme-primary">
        </ColorCard>
        <ColorCard color="accent" name="Accent" :sassVar="'$' + themePrefix + 'Accent'" themeVar="v-theme-accent">
        </ColorCard>
        <ColorCard color="dark" name="Dark" :sassVar="'$' + themePrefix + 'Dark'" themeVar="v-theme-dark"></ColorCard>
        <ColorCard color="light" name="Light" :sassVar="'$' + themePrefix + 'Light'" themeVar="v-theme-light">
        </ColorCard>
        <ColorCard color="background" name="Background" :sassVar="'$' + themePrefix + 'Background'"
            themeVar="v-theme-background"></ColorCard>
    </div>
</template>

<script setup lang="ts">
import ColorCard from '../components/ColorCard.vue';
import { useTheme } from 'vuetify';
import { computed } from 'vue';

defineProps<{ msg: string }>()

const theme = useTheme();
const themePrefix = computed(() => theme.name.value === 'dark' ? 'dk' : 'lt');
</script>

<style scoped></style>
