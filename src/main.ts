import { createApp } from 'vue'
import 'vuetify/styles' // ✅ required for utility classes & resets
import './app.scss'
import App from './App.vue'
import vuetify from "vuetify-design-system/plugins/vuetify"
import '@mdi/font/css/materialdesignicons.css'

createApp(App).use(vuetify).mount('#app')
