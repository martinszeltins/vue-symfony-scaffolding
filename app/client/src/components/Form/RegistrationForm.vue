<template>
    <form @submit.prevent="submit" class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Forms
        </h2>

        <div class="p-6 bg-white rounded-lg shadow-md space-y-4 dark:bg-gray-700">
            <div>
                <div class="flex flex-col gap-4">
                    <div class="text-gray-700 text-base font-semibold dark:text-gray-200">
                        Username
                    </div>

                    <AppInput
                        :class="{ 'p-invalid': v$.username.$error }"
                        v-model="registrationForm.username"
                        type="text"
                    />
                </div>

                <div class="mt-2">
                    <FormFieldError :errors="v$.username.$errors" />
                </div>
            </div>

            <div>
                <div class="flex flex-col gap-4">
                    <div class="text-gray-700 text-base font-semibold dark:text-gray-200">
                        Email
                    </div>

                    <AppInput
                        :class="{ 'p-invalid': v$.email.$error }"
                        v-model="registrationForm.email"
                        type="text"
                    />
                </div>

                <div class="mt-2">
                    <FormFieldError :errors="v$.email.$errors" />
                </div>
            </div>

            <div>
                <div class="flex flex-col gap-4">
                    <div class="text-gray-700 text-base font-semibold dark:text-gray-200">
                        Password
                    </div>

                    <AppPassword
                        :class="{ 'p-invalid': v$.password.$error }"
                        v-model="registrationForm.password"
                        :feedback="false"
                    />
                </div>

                <div class="mt-2">
                    <FormFieldError :errors="v$.password.$errors" />
                </div>
            </div>

            <AppButton
                @click="submit"
                type="submit"
                :loading="isLoading"
                label="Submit"
            />
        </div>
    </form>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    import { useFormValidation } from '@/services/useFormValidation'
    import registrationFormRules from '@/forms/validation/registrationForm'

    let isLoading = $ref(false)

    const registrationForm = reactive({
        email: '',
        username: '',
        password: '',
    })

    const { v$, setExternalValidationResults } = useFormValidation(registrationForm, registrationFormRules)

    const submit = async () => {
        isLoading = true

        const validated = await v$.value.$validate()

        if (!validated) return isLoading = false

        // Let's make a fake request with missing data to test validation
        try {
            await axios.post('http://localhost:13100/api/test', { password: 'aa' })
        } catch (error) {
            setExternalValidationResults(error.response?.data?.violations)
        } finally {
            isLoading = false
        }
    }
</script>