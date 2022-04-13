export function useAuth() {
    const restoreSession = () => {
        localStorage['voting_platform_user'] = 'x'
        let user = localStorage.getItem('voting_platform_user')

        if (user) {
            console.log(user)
            // store.dispatch('user/setUser', JSON.parse(user))
        }
    }

    return { restoreSession }
}