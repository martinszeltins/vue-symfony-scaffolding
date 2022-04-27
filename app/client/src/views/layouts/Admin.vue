<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-800">
        <SidebarAdmin />

        <div class="flex flex-col flex-1">
            <main class="h-full pb-4 overflow-y-auto scrollbar-dark-only px-6 mt-[4.4rem] lg:mt-0">
                <div>
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>
