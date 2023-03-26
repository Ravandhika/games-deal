import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
// ADD OTHER UTILITIES HERE

app.mount('#app')
