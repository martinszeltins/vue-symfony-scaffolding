export default function auth({ to, next, router }) {
    let user = localStorage.getItem('voting-platform_user')

    if (!user) {
        localStorage.setItem('voting-platform_path_before_login', to.path)

        return next('/auth/login')
    }

    return next()
}