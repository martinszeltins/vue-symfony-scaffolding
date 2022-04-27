import { inject } from 'vue'
import router from '@/routes'

export function useProgressBar() {
    const progressBarConfig = {
        color: "#8B5CF6",
        failedColor: "#874b4b",
        thickness: "8px",
        autoFinish: false,
    }

    const initProgressBar = () => {
        const progressBar = inject('progressBar')

        router.beforeEach((to, from, next) => {
            progressBar.start()
            return next()
        })

        router.afterEach((to, from) => {
            progressBar.finish()
        })
    }

    return { progressBarConfig, initProgressBar }
}
