<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
        Forms
    </h2>

    <div class="p-6 bg-white rounded-lg shadow-md space-y-4">
        <div v-for="n in 20" class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Name
            </div>

            <AppInput type="text" />
        </div>
    </div>
</template>
