import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import Components from 'unplugin-vue-components/vite'
// import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command }) => {
    return {
        plugins: [
            vue({ reactivityTransform: true }),
            Components({ 
                // resolvers: [ PrimeVueResolver ]
             }),
        ],
    
        base: (command === 'build') ? './' : '/',
    
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
            },
        },
    
        server: {
            host: true,
    
            hmr: {
                clientPort: 14365
            }
        }
    }
})
