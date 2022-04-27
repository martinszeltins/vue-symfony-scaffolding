export default function cssContainerQueriesPolyfillVitePlugin() {
    return {
        name: 'css-container-queries-polyfill',

        handleHotUpdate({ server }) {
            server.ws.send({
                type: 'custom',
                event: 'hmr-hot-updated',
                data: {}
            })
        }
    }
}