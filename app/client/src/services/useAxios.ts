import axios from 'axios'

export function useAxios() {
    const configureAxios = () => {
        axios.defaults.headers.common = {
            'Content-Type':     'application/json',
            'accept':           'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
        
        window['axios'] = axios
    }

    return { configureAxios }
}