<template>
    <li class="relative py-4">
        <a
            class="inline-flex items-center w-full font-medium transition-colors duration-150 hover:text-gray-800 cursor-pointer"
            :class="{ 'text-black': active }">

            <i
                class="pi text-xl"
                :class="[ `pi-${icon}` ]">
            </i>

            <span class="ml-4">
                {{ text }}
            </span>
        </a>
    </li> 
</template>

<script setup lang="ts">
    interface Props {
        text: string,
        icon?: string,
        link?: string,
        active: boolean,
    }

    const {
        text,
        icon,
        link,
        active,
    } = defineProps<Props>()
</script>
