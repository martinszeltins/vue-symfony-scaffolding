<template>
    <div class="flex h-screen bg-gray-50">
        <SidebarAdmin />

        <div class="flex flex-col flex-1">
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container mx-auto">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>