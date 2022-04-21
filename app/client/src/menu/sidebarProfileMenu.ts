import { useAuth } from '@/services/useAuth'

let logoutAction = () => {}

waitUntil(() => appIsReady()).then(() => {
    const { logout } = useAuth()
    logoutAction = logout
})

let sidebarProfileMenuItems = $ref([
    {
        label: 'Settings',
        command: () => {
            alert('Open Settings!')
        }
    },

    {
        label: 'Log out',
        command: () => {
            logoutAction()
        }
    },
])

const _itemsRef = $$(sidebarProfileMenuItems)
export { _itemsRef as sidebarProfileMenuItems }