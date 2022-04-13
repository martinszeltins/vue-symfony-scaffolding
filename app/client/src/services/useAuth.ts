import { useAppStore } from '@/stores/appStore'

export function useAuth() {
    const restoreSession = () => {
        const appStore = useAppStore()

        let user = localStorage.getItem('voting-platform_user')

        if (user) {
            appStore.user = user
        }
    }

    return { restoreSession }
}