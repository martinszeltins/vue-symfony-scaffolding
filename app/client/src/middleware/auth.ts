export default function auth({ to, next, router }) {
    let user = localStorage.getItem('voting_platform_user')

    if (!user) {
        localStorage.setItem('voting_platform_path_before_login', to.path)

        return next('/login')
    }

    return next();
}