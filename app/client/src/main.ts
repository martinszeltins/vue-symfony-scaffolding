import './utils/helpers'
import App from './App.vue'
import '@/assets/css/app.css'
import { createApp } from 'vue'
import routes from '@/routes.ts'
import { createPinia } from 'pinia'
import { useAxios } from '@/services/useAxios'
import VueProgressBar from "@aacassandra/vue3-progressbar"

const { configureAxios } = useAxios()

configureAxios()

const app = createApp(App)

app.use(routes)
   .use(createPinia())
   .use(VueProgressBar, {
       color: "#57b9dc",
       failedColor: "#874b4b",
       thickness: "5px",
       autoFinish: false,
   })
   .provide(
       'progressBar',
       app.config.globalProperties.$Progress
   )
   .mount('#app')