<template>
    <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        More forms
    </h2>

    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 dark:bg-gray-700">
        <div v-for="n in 10" class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Name
            </div>

            <AppInput type="text" />
        </div>
    </div>
</template>