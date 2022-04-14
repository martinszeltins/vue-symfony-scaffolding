<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SidebarAdmin />

        <div class="flex flex-col flex-1">
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container mx-auto grid">
                    <h1 class="text-center mt-8 mb-4 text-3xl font-semibold text-gray-800 dark:text-gray-300">
                        Dashboard
                    </h1>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    let isSideMenuOpen = $ref(false)
</script>