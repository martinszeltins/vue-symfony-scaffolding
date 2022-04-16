<template>
    <router-view></router-view>
</template>

<script setup lang="ts">
    import routes from '@/routes'
    import { useAuth } from '@/services/useAuth'

    const { isUserLoggedIn  } = useAuth()

    if (isUserLoggedIn()) {
        routes.push({ name: 'admin-dashboard' })
    }
</script>
