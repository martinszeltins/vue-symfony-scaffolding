<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
    import router from '@/routes'
    import { useAuth } from '@/services/useAuth'

    const { isUserLoggedIn  } = useAuth()

    if (isUserLoggedIn()) {
        router.push({ name: 'admin-dashboard' })
    }
</script>
