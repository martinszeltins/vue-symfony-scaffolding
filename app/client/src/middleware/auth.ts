import { LOCALSTORAGE_USER, LOCALSTORAGE_PATH_BEFORE_LOGIN } from '@/config'

export default function auth({ to, next, router }) {
    let user = localStorage.getItem(LOCALSTORAGE_USER)

    if (!user) {
        localStorage.setItem(LOCALSTORAGE_PATH_BEFORE_LOGIN, to.path)

        return next('/auth/login')
    }

    return next()
}