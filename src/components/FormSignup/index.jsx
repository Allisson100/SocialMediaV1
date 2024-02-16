import { FormContainer } from "./styles"
import InputForm from "../Input"
import Button from "../Button"
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import signupValidation from "../../common/validations/signupValidation"
import storage from "../../services/sessionStorage"
import { useContext } from "react"
import { ErrorContext } from "../../contexts/ErrorContext"

const FormSignup = () => {

    const navigate = useNavigate()
    const { setErrorAlert } = useContext(ErrorContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            userName: '',
        },
        validationSchema: signupValidation(),
        onSubmit: (values, { resetForm }) => {

            storage.deleteUserAndDatas('userDataSignin')
            storage.setUserDatas(values, 'userDataSignin')

            setErrorAlert('')
            navigate('/login')
            resetForm()
        }
    })

    return (
        <FormContainer onSubmit={formik.handleSubmit}>
            <InputForm 
                name='userName'
                type='text'
                label='User name'
                required
                placeholder= 'User name'
                autoComplete='username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                errorMessage={formik.touched.userName && formik.errors.userName}
            />
            
            <InputForm 
                name='email'
                type='email'
                label='Email'
                required
                placeholder= 'E-mail'
                autoComplete='username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                errorMessage={formik.touched.email && formik.errors.email}
            />

            <InputForm 
                name='confirmEmail'
                type='email'
                label='Repeat email'
                required
                placeholder= 'Repeat email'
                autoComplete='username'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmEmail}
                errorMessage={formik.touched.confirmEmail && formik.errors.confirmEmail}
            />

            <InputForm 
                name='password'
                type='password'
                label='Password'
                required
                placeholder= 'Password'
                autoComplete='current-password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                errorMessage={formik.touched.password && formik.errors.password}
            />

            <InputForm 
                name='confirmPassword'
                type='password'
                label='Repeat password'
                required
                placeholder= 'Repeat password'
                autoComplete='current-password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                errorMessage={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
            <Button type="submit">Create account</Button>
        </FormContainer>
    )
}

export default FormSignup