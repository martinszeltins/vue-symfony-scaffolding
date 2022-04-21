<template>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useAuth } from '@/services/useAuth'
    import { useProgressBar } from '@/services/useProgressBar'

    const { restoreSession } = useAuth()
    const { initProgressBar } = useProgressBar()

    restoreSession()
    initProgressBar()

    onMounted(() => {
        window['appMounted'] = true
    })
</script>