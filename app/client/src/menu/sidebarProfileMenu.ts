import { useAuth } from '@/services/useAuth'
import { useDark, useToggle } from '@vueuse/core'

let logoutAction = () => {}

const isDark = useDark()
const toggleDark = useToggle(isDark)

waitUntil(() => appIsReady()).then(() => {
    const { logout } = useAuth()
    logoutAction = logout
})

let sidebarProfileMenuItems = $computed(() => [
    {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
            alert('Open Settings!')
        }
    },

    {
        label: isDark.value ? 'Light Mode' : 'Dark Mode',
        icon: isDark.value ? 'pi pi-sun' : 'pi pi-moon',
        command: () => {
            toggleDark()
        }
    },

    {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: () => {
            logoutAction()
        }
    },
])

const _itemsRef = $$(sidebarProfileMenuItems)
export { _itemsRef as sidebarProfileMenuItems }
