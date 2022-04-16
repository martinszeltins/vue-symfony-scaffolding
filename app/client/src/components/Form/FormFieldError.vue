<template>
    <div
        class="text-red-500 text-sm"
        v-for="error of errors"
        :key="error.$uid">

        {{ error.$message }}
    </div>
</template>

<script setup lang="ts">
    interface Props {
        errors: Array,
    }

    const {
        errors = [],
    } = defineProps<Props>()
</script>
