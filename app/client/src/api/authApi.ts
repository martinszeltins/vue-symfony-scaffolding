import { useEnv } from '@/services/useEnv'

const { env } = useEnv()

const serverUrl: string = env('VITE_SERVER_URL')

export default class {
   static async login(username, password): Promise<any> {
        let result = await axios.post(`${serverUrl}/api/login_check`, { username, password })
        let token = result.data.token
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}`}

        result = await axios.get(`${serverUrl}/api/auth/user`)

        return {
            token: token,
            ...result.data
        }
    }
}