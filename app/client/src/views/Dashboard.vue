<template>
    <div
        class="flex h-screen bg-gray-50 dark:bg-gray-900"
        :class="{ 'overflow-hidden': isSideMenuOpen}">

        <SidebarAdmin />

        <div class="flex flex-col flex-1">
            <header class="z-10 py-4 bg-white dark:bg-gray-800 shadow-header">
                <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                    <div class="flex-1"></div>

                    <ul class="flex items-center flex-shrink-0 space-x-6">
                        <li class="flex items-center gap-4 relative">
                            <div class="font-semibold">
                                John Doe
                            </div>

                            <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
                                <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=aa3a807e1bbdfd4364d1f449eaa96d82" />
                            </button>
                        </li>
                    </ul>
                </div>
            </header>

            <main class="h-full pb-16 overflow-y-auto">
                <div class="container mx-auto grid">
                    <h1 class="text-center mt-8 mb-4 text-3xl font-semibold text-gray-600 dark:text-gray-300">
                        Dashboard

                        <AppButton label="Submit" />
                    </h1>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    let isSideMenuOpen = $ref(false)
</script>