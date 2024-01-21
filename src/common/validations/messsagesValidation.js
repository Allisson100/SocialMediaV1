import * as Yup from 'yup'

const messageValidation = () => {

    const validationMessageSchema = Yup.object().shape({
        message: Yup.string()
            .max(1000)
            .test('is-non-empty', 'Please type some text!', (value) => {
                return value && value.trim().length > 0;
            }),
    })

    return validationMessageSchema
}

export default messageValidation