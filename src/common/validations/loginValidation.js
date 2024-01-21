import * as Yup from 'yup'

const loginValidation = () => {

    const validationLoginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Required field')
            .email('Invalid e-mail'),
        password: Yup.string()
            .required('Required field')
    })

    return validationLoginSchema
}

export default loginValidation