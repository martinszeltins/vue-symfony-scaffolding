import Menu from 'primevue/menu'
import Button from 'primevue/button'

export function useGlobalComponents() {
    const registerGlobalComponents = (app) => {
        app.component('AppMenu', Menu)
        app.component('AppButton', Button)
    }

    return { registerGlobalComponents }
}