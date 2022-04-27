import { watch } from 'vue'
import useVuelidate from '@vuelidate/core'

export function useFormValidation(form, formRules) {
    let $externalResults = $ref({})
    const v$ = useVuelidate(formRules, form, { $externalResults: $$($externalResults) })

    const setExternalValidationResults = (violations) => {
        if (violations) $externalResults = violations
    }

    watch(form, () => {
        v$.value.$clearExternalResults()
        v$.value.$reset()
    })

    return { v$, setExternalValidationResults }
}
