<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700">
        Forms
    </h2>

    <div class="p-6 bg-white rounded-lg shadow-md space-y-4 mb-8">
        <div class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Username
            </div>

            <AppInput v-model="registrationForm.username" type="text" />
        </div>

        <div class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Email
            </div>

            <AppInput v-model="registrationForm.email" type="text" />
        </div>

        <div class="flex flex-col gap-4">
            <div class="text-gray-700 text-base font-semibold">
                Password
            </div>

            <AppPassword v-model="registrationForm.password" />
        </div>

        <AppButton @click="submitRegistrationForm" label="Submit" />
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
    import { required, email } from '@vuelidate/validators'

    const registrationForm = reactive({
        email: '',
        username: '',
        password: '',
    })

    let $externalResults = $ref({})

    const rules = {
        email:    { required, email },
        username: { required },
        password: { required },
    }

    const v$ = useVuelidate(rules, registrationForm, { $externalResults })

    const submitRegistrationForm = async () => {
        await v$.value.$validate()

        console.log(v$)

        const { data } = await axios.post('http://localhost:13100/api/test', {
            // username: 'aa',
            // email: 'aa',
            password: 'aa',
        })

        console.log(data)
    }
</script>
