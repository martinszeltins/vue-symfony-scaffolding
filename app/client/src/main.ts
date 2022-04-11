import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useAxios } from '@/services/useAxios'
import './utils/helpers'
import '@/assets/css/app.css'

const { configureAxios } = useAxios()

configureAxios()

const app = createApp(App)

app.use(createPinia())

app.mount('#app')