import axios from 'axios'
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
                 * 401 - Not logged in | Unauthorized
                 */
                if (error.response?.status == 401) {
                    showErrorToast('It looks like you do not have a valid access token.')

                    return Promise.reject(error)
                }

                /**
                 * 403 - Access denied | Forbidden
                 */
                if (error.response?.status == 403) {
                    showErrorToast('You do not have sufficient permissions to perform this operation')

                    return Promise.reject(error)
                }

                /**
                 * Unknown error
                 */
                if (error.response?.data?._flashMessages?.[0]) {
                    error.response.data._flashMessages.forEach(message => {
                        showErrorToast('Error', message.message)
                    })
                } else {
                    showErrorToast('An unknown error has occurred')
                }

                return Promise.reject(error)
            }
        )
    }

    return { addAxiosInterceptors }
}
