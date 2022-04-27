<template>
    <!-- Desktop menu-->
    <aside class="hidden lg:block z-10 w-72 overflow-hidden bg-white flex-shrink-0 shadow dark:bg-gray-700">
        <div class="py-4 text-gray-500">
            <div class="mt-2">
                <SidebarAdminProfile />
            </div>

            <ul class="mt-4 space-y-2 lg:space-y-0 overflow-y-auto px-8 h-sidebar-items scrollbar-overlay-thin">
                <SidebarAdminItems />
            </ul>
        </div>
    </aside>


    <!-- Mobile menu-->
    <div
        class="lg:hidden px-8 z-10 fixed w-full bg-white flex items-center py-5 justify-between shadow dark:bg-gray-700 dark:text-gray-200"
        :class="{ 'pr-8': showMobileMenu }">

        <div class="font-semibold">
            App Scaffolding
        </div>

        <div>
            <i
                @click="toggleMobileMenu"
                class="cursor-pointer pi pi-bars text-xl">
            </i>
        </div>
    </div>

    <aside
        v-if="showMobileMenu"
        class="lg:hidden fixed top-16 px-8 z-10 w-full h-mobile-sidebar overflow-y-auto bg-white flex-shrink-0 scrollbar-overlay-thin dark:bg-gray-700">

        <div>
            <div class="py-4 text-gray-500">
                <div class="mt-2">
                    <SidebarAdminProfile />
                </div>

                <ul class="mt-4 space-y-2">
                    <SidebarAdminItems />
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
    let showMobileMenu = $ref(false)

    const toggleMobileMenu = () => {
        showMobileMenu = !showMobileMenu
        
        document.querySelector('html').style.overflow = (showMobileMenu)
            ? 'hidden'
            : 'auto'
    }
</script>
