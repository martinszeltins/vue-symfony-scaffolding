import './utils/helpers'
import App from './App.vue'
import '@/assets/css/app.css'
import { createApp } from 'vue'
import routes from '@/routes.ts'
import { createPinia } from 'pinia'
import { useAxios } from '@/services/useAxios'
import VueProgressBar from "@aacassandra/vue3-progressbar"
import { useProgressBar } from '@/services/useProgressBar'

const { configureAxios } = useAxios()
const { progressBarConfig } = useProgressBar()

configureAxios()

const app = createApp(App)

app.use(routes)
   .use(createPinia())
   .use(VueProgressBar, progressBarConfig)
   .provide(
       'progressBar',
       app.config.globalProperties.$Progress
   )
   .mount('#app')