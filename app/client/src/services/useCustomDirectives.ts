export function useCustomDirectives() {
    const registerCustomDirectives = (app) => {
        app.directive('focus', {
            mounted: (HTMLElement) => HTMLElement.focus()
        })
    }

    return { registerCustomDirectives }
}