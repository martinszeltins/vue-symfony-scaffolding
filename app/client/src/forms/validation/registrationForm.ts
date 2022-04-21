import { required, email } from '@vuelidate/validators'

const registrationFormRules = {
    email:    { required, email },
    username: { required },
    password: { required },
}

export default registrationFormRules