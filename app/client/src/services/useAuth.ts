import routes from '@/routes.ts'
import authApi from '@/api/authApi.ts'
import { useAppStore } from '@/stores/appStore'

export function useAuth() {
    const appStore = useAppStore()

    const restoreSession = () => {
        let user = localStorage['voting-platform_user']

        if (user) {
            user = JSON.parse(user)
            appStore.user = user
            axios.defaults.headers.common = { 'Authorization': `Bearer ${user.token}` }
        }
    }

    const login = async (username, password) => {
        const user = await authApi.login(username, password)

        setUserInStore(user)
        setUserInLocalStorage(user)
        goToRouteBeforeLogin()
    }

    const setUserInStore = user => {
        appStore.user = user
    }

    const setUserInLocalStorage = user => {
        localStorage['voting-platform_user'] = JSON.stringify(user)
    }

    const isUserLoggedIn = () => {
        return appStore.user !== null
    }

    const goToRouteBeforeLogin = () => {
        let route = localStorage['voting-platform_path_before_login']
        route = (!route || route == '/auth/login') ? '/' : route
        
        routes.push({ path: route })
    }

    return { restoreSession, login, isUserLoggedIn }
}