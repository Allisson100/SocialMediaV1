import * as Yup from 'yup'

const signupValidation = () => {

    const validationSignupSchema = Yup.object().shape({

        email: Yup.string()
            .required('Required field')
            .email('Invalid e-mail'),

        confirmEmail: Yup.string()
            .required('Confirm your e-mail')
            .oneOf([Yup.ref('email'), null], 'E-mails must match'),

        password: Yup.string()
            .required('Required field')
            .min(6, 'Password must be at least 6 characters')
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                'The password must contain:\n\n- An uppercase letter\n- A lowercase letter\n- A number\n- A special character'
            ),

        confirmPassword: Yup.string()
            .required('Required field')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),

        userName: Yup.string()
            .required('Required field')
            .test('no-space', 'The name must not contain whitespace', (value) => {
                return !value.includes(' ')
            }),
    })

    return validationSignupSchema
}

export default signupValidation