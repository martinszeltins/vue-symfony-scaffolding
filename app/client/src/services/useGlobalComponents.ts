import Button from 'primevue/button'

export function useGlobalComponents() {
    const registerGlobalComponents = (app) => {
        app.component('AppButton', Button)
    }

    return { registerGlobalComponents }
}