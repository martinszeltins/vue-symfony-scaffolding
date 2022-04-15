import Menu from 'primevue/menu'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export function useGlobalComponents() {
    const registerGlobalComponents = (app) => {
        app.component('AppMenu', Menu)
        app.component('AppButton', Button)
        app.component('AppInput', InputText)
    }

    return { registerGlobalComponents }
}