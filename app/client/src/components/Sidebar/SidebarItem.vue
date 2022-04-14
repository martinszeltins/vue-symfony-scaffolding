<template>
    <li class="relative py-4">
        <router-link
            :to="{ name: route }"
            v-slot="{ isActive }"
            class="inline-flex items-center w-full font-medium transition-colors duration-150 hover:text-gray-800 cursor-pointer">

            <div :class="{ 'text-black': isActive }">
                <i
                    class="pi text-xl"
                    :class="[ `pi-${icon}` ]">
                </i>
    
                <span class="ml-4">
                    {{ text }}
                </span>
            </div>
        </router-link>
    </li> 
</template>

<script setup lang="ts">
    interface Props {
        text: string,
        icon?: string,
        route?: string,
    }

    const {
        text,
        icon,
        route,
    } = defineProps<Props>()
</script>
