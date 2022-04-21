<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img
                        aria-hidden="true"
                        class="object-cover w-full h-full"
                        src="@img/login-office.jpeg"
                        alt="Office"
                    />
                </div>

                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-700">
                            Login
                        </h1>

                        <div class="flex flex-col text-sm space-y-2 mb-3">
                            <div class="text-gray-700 font-semibold">
                                Username
                            </div>

                            <AppInput
                                @keydown="isInvalidCredentials = false"
                                @keydown.enter="login(username, password)"
                                :class="{ 'p-invalid': isInvalidCredentials }"
                                v-focus
                                type="text"
                                v-model="username"
                            />
                        </div>

                        <div class="flex flex-col text-sm space-y-2">
                            <div class="text-gray-700 font-semibold">
                                Password
                            </div>

                            <AppPassword
                                @keydown="isInvalidCredentials = false"
                                @keydown.enter="login(username, password)"
                                class="p-password-block"
                                :class="{ 'p-invalid': isInvalidCredentials }"
                                v-model="password"
                                :feedback="false"
                            />
                        </div>

                        <div class="flex flex-col mt-4">
                            <AppButton
                                @click="login(username, password)"
                                class="p-button-compact"
                                label="Log in"
                                :loading="isLoading"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAuth } from '@/services/useAuth'

    let username = $ref('')
    let password = $ref('')

    if (location.hostname === 'localhost') {
        username = 'admin'
        password = 'admin'
    }

    const { login, isLoading, isInvalidCredentials } = useAuth()
</script>
