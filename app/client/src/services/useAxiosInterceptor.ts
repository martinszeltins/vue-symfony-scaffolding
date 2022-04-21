import axios from 'axios'
import router from '@/routes'
import { LOCALSTORAGE_USER } from '@/config'
import { useToast } from '@/services/useToast'

export function useAxiosInterceptors() {
    const addAxiosInterceptors = () => {
        addRequestInterceptors()
        addResponseInterceptors()
    }

    const addRequestInterceptors = () => {
        //
    }

    const addResponseInterceptors = () => {
        const { showErrorToast } = useToast()

        axios.interceptors.response.use(
            (response) => {
               return response
            },

            (error) => {
                /**
                 * 401 - Not logged in | Unauthorized | Session Expired
                 */
                if (error.response?.status == 401) {
                    /**
                     * Redirect to login unless 401 is the result of login action
                     * otherwise we'll get an infinite loop when trying to log in.
                     */
                    if (! error.response?.config?.url?.includes('/login_check')) {
                        showErrorToast('Session has expired. Please log in.')
                        localStorage.removeItem(LOCALSTORAGE_USER)
                        router.push({ name: 'auth-login' })
                    }

                    return Promise.reject(error)
                }

                /**
                 * 403 - Access denied | Forbidden
                 */
                if (error.response?.status == 403) {
                    showErrorToast('You do not have sufficient permissions to perform this action.')

                    return Promise.reject(error)
                }

                /**
                 * 422 - Unprocessable Entity | Form Validation Errors
                 *
                 * Do not show an unknown error for form violation errors
                 */
                if (error.response?.status == 422 && error.response?.data?.violations) {
                    return Promise.reject(error)
                }

                /**
                 * Unknown error
                 */
                if (error.response?.data?._flashMessages?.[0]) {
                    error.response.data._flashMessages.forEach(message => {
                        showErrorToast(message.message)
                    })
                } else {
                    showErrorToast('An unknown error has occurred. Please try again.')
                }

                return Promise.reject(error)
            }
        )
    }

    return { addAxiosInterceptors }
}