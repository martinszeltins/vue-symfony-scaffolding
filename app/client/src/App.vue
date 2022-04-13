<template>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
</template>

<script setup>
    import { useProgressBar } from '@/services/useProgressBar'

    const { initProgressBar } = useProgressBar()

    initProgressBar()

    // const { restoreSession } = useAuth()
</script>
