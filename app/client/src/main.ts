import './utils/helpers'
import App from './App.vue'
import { createApp } from 'vue'
import router from '@/routes'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { useAxios } from '@/services/useAxios'
import VueProgressBar from "@aacassandra/vue3-progressbar"
import { useProgressBar } from '@/services/useProgressBar'
import '@/assets/css/app.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import '@/assets/css/vendor/prime-vue/theme.css'
import 'toastify-js/src/toastify.css'
import { useGlobalComponents } from '@/services/useGlobalComponents'
import { useCustomDirectives } from '@/services/useCustomDirectives'

const { configureAxios } = useAxios()
const { progressBarConfig } = useProgressBar()
const { registerGlobalComponents } = useGlobalComponents()
const { registerCustomDirectives } = useCustomDirectives()

const app = createApp(App)

configureAxios()
registerGlobalComponents(app)
registerCustomDirectives(app)

app.use(router)
   .use(createPinia())
   .use(VueProgressBar, progressBarConfig)
   .use(PrimeVue)
   .provide(
       'progressBar',
       app.config.globalProperties.$Progress
   )
   .mount('#app')