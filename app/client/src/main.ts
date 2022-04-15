import './utils/helpers'
import App from './App.vue'
import { createApp } from 'vue'
import routes from '@/routes.ts'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { useAxios } from '@/services/useAxios'
import VueProgressBar from "@aacassandra/vue3-progressbar"
import { useProgressBar } from '@/services/useProgressBar'
import '@/assets/css/app.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import '@/assets/css/vendor/prime-vue/theme.css'
import { useGlobalComponents } from '@/services/useGlobalComponents.ts'
import { useCustomDirectives } from '@/services/useCustomDirectives.ts'

const { configureAxios } = useAxios()
const { progressBarConfig } = useProgressBar()
const { registerGlobalComponents } = useGlobalComponents()
const { registerCustomDirectives } = useCustomDirectives()

const app = createApp(App)

configureAxios()
registerGlobalComponents(app)
registerCustomDirectives(app)

app.use(routes)
   .use(createPinia())
   .use(VueProgressBar, progressBarConfig)
   .use(PrimeVue)
   .provide(
       'progressBar',
       app.config.globalProperties.$Progress
   )
   .mount('#app')