<template>
    <li class="relative py-4 bg-gray-50 lg:bg-transparent rounded-md dark:bg-gray-600 dark:lg:bg-transparent">
        <a
            v-if="isExternalLink"
            :href="route"
            target="_blank"
            :class="linkClasses">

            <div class="flex items-center">
                <i
                    class="pi text-xl"
                    :class="[ `pi-${icon}` ]">
                </i>

                <span class="ml-4">
                    {{ text }}
                </span>
            </div>
        </a>

        <router-link
            v-else
            :to="{ name: route }"
            v-slot="{ isActive }"
            :class="linkClasses">

            <div
                class="flex items-center"
                :class="{ 'text-black dark:text-gray-200': isActive }">

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
    import { computed } from 'vue'
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

    const isExternalLink = computed(() => {
        return route.startsWith('http') || route.startsWith('/')
    })

    const linkClasses = 'inline-flex text-gray-400 justify-center lg:justify-start items-center w-full font-medium transition-colors duration-150 hover:text-gray-800 cursor-pointer dark:hover:text-gray-200'
</script>
