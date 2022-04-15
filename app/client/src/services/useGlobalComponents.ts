import Menu from 'primevue/menu'
import Button from 'primevue/button'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'

export function useGlobalComponents() {
    const registerGlobalComponents = (app) => {
        app.component('AppMenu', Menu)
        app.component('AppButton', Button)
        app.component('AppInput', InputText)
        app.component('AppPassword', Password)
    }

    return { registerGlobalComponents }
}
