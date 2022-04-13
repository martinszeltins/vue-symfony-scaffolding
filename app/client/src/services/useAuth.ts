import authApi from '@/api/authApi.ts'
import { useAppStore } from '@/stores/appStore'

export function useAuth() {
    const appStore = useAppStore()

    const restoreSession = () => {
        let user = localStorage['voting-platform_user']

        if (user) {
            appStore.user = user
        }
    }

    const login = async (username, password) => {
        const user = await authApi.login(username, password)

        setUserInStore(user)
        setUserInLocalStorage(user)
    }

    const setUserInStore = user => {
        appStore.user = user
    }

    const setUserInLocalStorage = user => {
        localStorage['voting-platform_user'] = JSON.stringify(user)
    }

    return { restoreSession, login }
}