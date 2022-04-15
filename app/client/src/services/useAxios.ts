import axios from 'axios'
import { useAxiosInterceptors } from '@/services/useAxiosInterceptor'

export function useAxios() {
    const { addAxiosInterceptors } = useAxiosInterceptors()

    const configureAxios = () => {
        axios.defaults.headers.common = {
            'Content-Type':     'application/json',
            'accept':           'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }

        addAxiosInterceptors()
        
        window['axios'] = axios
    }

    return { configureAxios }
}
