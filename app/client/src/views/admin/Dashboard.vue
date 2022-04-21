<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
        Forms
    </h2>

    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 mb-8">
        <div>
            <div class="flex flex-col gap-4">
                <div class="text-gray-700 text-base font-semibold">
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
                <div class="text-gray-700 text-base font-semibold">
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
                <div class="text-gray-700 text-base font-semibold">
                    Password
                </div>

                <AppPassword
                    :class="{ 'p-invalid': v$.password.$error }"
                    v-model="registrationForm.password"
                />
            </div>

            <div class="mt-2">
                <FormFieldError :errors="v$.password.$errors" />
            </div>
        </div>

        <AppButton
            @click="submitRegistrationForm"
            label="Submit"
        />
    </div>

    <div class="p-6 bg-white rounded-lg shadow-md space-y-4">
        <div v-for="n in 10" class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Name
            </div>

            <AppInput type="text" />
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import useVuelidate from '@vuelidate/core'
    import registrationFormRules from '@/forms/validation/registrationForm'

    const registrationForm = reactive({
        email: '',
        username: '',
        password: '',
    })

    let $externalResults = $ref({})
    const v$ = useVuelidate(registrationFormRules, registrationForm, { $externalResults: $$($externalResults) })

    const submitRegistrationForm = async () => {
        await v$.value.$validate()

        // Let's make a fake request with missing data to test validation
        try {
            await axios.post('http://localhost:13100/api/test', {
                password: 'aa',
            })
        } catch (error) {
            if (error.response?.data?.violations) {
                $externalResults = error.response.data.violations
            }
        }
    }
</script>