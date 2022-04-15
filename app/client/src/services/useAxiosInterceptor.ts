import axios from 'axios'
import { useToast } from 'primevue/usetoast'

export function useAxiosInterceptors() {
    const addAxiosInterceptors = () => {
        addRequestInterceptors()
        addResponseInterceptors()
    }

    const addRequestInterceptors = () => {
        //
    }

    const addResponseInterceptors = () => {
        axios.interceptors.response.use(
            (response) => {
               return response
            },

            (error) => {
                /**
                 * 401 - Not logged in | Unauthorized
                 */
                if (error.response?.status == 401) {
                    showErrorToast(
                        'Session expired',
                        'It looks like you do not have a valid access token.'
                    )

                    return Promise.reject(error)
                }

                /**
                 * 403 - Access denied | Forbidden
                 */
                if (error.response?.status == 403) {
                    showErrorToast(
                        'Access denied',
                        'You do not have sufficient permissions to perform this operation'
                    )

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
                    showErrorToast('Error', 'An unknown error has occurred')
                }

                return Promise.reject(error)
            }
        )
    }

    const showErrorToast = (summary, detail) => {
        // const toast = useToast()

        console.log(summary, detail)

        // toast.add({
        //     severity: 'error',
        //     summary: summary,
        //     detail: detail,
        //     life: 3000
        // })
    }

    return { addAxiosInterceptors }
}
