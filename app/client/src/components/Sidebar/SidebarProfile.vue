<template>
    <div
        @click="openMenu"
        class="flex gap-4 items-center p-4 rounded-md cursor-pointer hover:bg-gray-100">

        <div>
            <img
                class="w-14"
                src="@img/profile-picture.png"
            />
        </div>

        <div>
            <div class="font-semibold text-black">
                {{ appStore.user.fullName }}
            </div>

            <div class="text-sm">
                Admin
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