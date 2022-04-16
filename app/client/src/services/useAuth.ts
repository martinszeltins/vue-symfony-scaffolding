import routes from '@/routes'
import authApi from '@/api/authApi'
import { useToast } from '@/services/useToast'
import { useAppStore } from '@/stores/appStore'

export function useAuth() {
    const appStore = useAppStore()

    let isLoading = $ref(false)
    let isInvalidCredentials = $ref(false)

    const restoreSession = () => {
        let user = localStorage['voting-platform_user']

        if (user) {
            user = JSON.parse(user)
            appStore.user = user
            setToken(user.token)
        }
    }

    const login = async (username, password) => {
        const { showErrorToast } = useToast()

        isLoading = true
        isInvalidCredentials = false

        try {
            const user = await authApi.login(username, password)

            isLoading = false

            setUserInStore(user)
            setToken(user.token)
            setUserInLocalStorage(user)
            goToRouteBeforeLogin()
        } catch (error) {
            if (error.response.status === 401) {
                isInvalidCredentials = true
                showErrorToast('Incorrect username or password. Please try again!')
            }

            isLoading = false
        }
    }

    const logout = async () => {
        await authApi.logout()

        localStorage.removeItem('voting-platform_user')

        routes.push({ name: 'auth-login' })
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

    const setToken = token => {
        axios.defaults.headers.common = {
            ...axios.defaults.headers.common,
            'Authorization': `Bearer ${token}`
        }
    }

    return $$({
        restoreSession,
        login,
        logout,
        isUserLoggedIn,
        isLoading,
        isInvalidCredentials
    })
}
