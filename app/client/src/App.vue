<template>
    <vue-progress-bar></vue-progress-bar>
    <AppToast position="top-center" />
    <router-view></router-view>
</template>

<script setup>
    import { useAuth } from '@/services/useAuth'
    import { useProgressBar } from '@/services/useProgressBar'

    const { restoreSession } = useAuth()
    const { initProgressBar } = useProgressBar()

    restoreSession()
    initProgressBar()
</script>
