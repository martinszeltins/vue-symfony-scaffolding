<template>
    <router-view></router-view>
</template>

<script setup>
    import { inject } from 'vue'
    import router from '@/routes.ts'

    // const { restoreSession } = useAuth()
    const progressBar = inject('progressBar')

    router.beforeEach((to, from, next) => {
        progressBar.start()
        return next()
    })

    router.afterEach((to, from) => {
        progressBar.finish()
    })
</script>
