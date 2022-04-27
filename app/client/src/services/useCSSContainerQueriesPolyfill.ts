import { init } from '@/services/css-container-queries-polyfill/cssContainerQueriesPolyfill'

export function useCSSContainerQueriesPolyfill() {
    const initCSSContainerQueriesPolyfill = () => {
        init()

        // Re-init CSS Container Queries Polyfill after HMR update
        if (import.meta.hot) {
            import.meta.hot.on('hmr-hot-updated', () => {
                setTimeout(() => {
                    init()
                }, 200)
            })
        }
    }

    return { initCSSContainerQueriesPolyfill }
}
