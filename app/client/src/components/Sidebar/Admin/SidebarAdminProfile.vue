<template>
    <div class="flex justify-center">
        <div
            @click="openMenu"
            class="inline-block cursor-pointer hover:bg-gray-100 rounded-md dark:hover:bg-gray-600">

            <div class="flex gap-4 items-center p-4">
                <div>
                    <img
                        class="w-14"
                        src="@img/profile-picture.png"
                    />
                </div>

                <div>
                    <div class="font-semibold text-black dark:text-gray-200">
                        {{ appStore.user.fullName }}
                    </div>

                    <div class="text-sm dark:text-gray-400">
                        Admin
                    </div>
                </div>
            </div>
        </div>
    </div>

    <AppMenu
        ref="menu"
        :model="sidebarProfileMenuItems"
        :popup="true"
    />
</template>

<script setup lang="ts">
    import { useAppStore } from '@/stores/appStore'
    import { sidebarProfileMenuItems } from '@/menu/sidebarProfileMenu'

    let menu = $ref(null)
    const appStore = useAppStore()

    const openMenu = event => {
        menu.toggle(event)
    }
</script>
