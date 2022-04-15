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
        :model="items"
        :popup="true"
    />
</template>

<script setup lang="ts">
    import { useAppStore } from '@/stores/appStore'

    let menu = $ref(null)

    const appStore = useAppStore()

    let items = $ref([
        {
            label: 'Settings',
            command: () => {
                alert('Open Settings!')
            }
        },

        {
            label: 'Log out',
            command: () => {
                alert('Log out!')
            }
        },
    ])

    const openMenu = event => {
        menu.toggle(event)
    }
</script>
