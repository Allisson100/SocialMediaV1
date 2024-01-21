import { FormContainer } from "./styles"
import InputForm from "../Input"
import Button from "../Button"

import { useFormik } from 'formik'
import loginValidation from "../../common/validations/loginValidation"
import storage from "../../services/sessionStorage"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { ErrorContext } from "../../contexts/ErrorContext"

const FormLogin = () => {

    const navigate = useNavigate()

    const { auth , setAuth } = useContext(AuthContext)
    const { setErrorAlert } = useContext(ErrorContext)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidation(),
        onSubmit: (values, { resetForm }) => {

            const userLogin = storage.getUserDatas('userDataSignin')

            if (!!userLogin) {

                //Validation
                if(values.password === userLogin.password && values.email === userLogin.email) {

                    const getData = storage.getUserDatas('userDataSignin')
                    const addToken = {...getData, token: 'tokenQualquer123'}
                    storage.setUserDatas(addToken,'userDataSignin')
                    setAuth(addToken)

                    resetForm()
                    navigate('/createposts')
                } else {
                    setErrorAlert('User not found in database, please check your e-mail and password!')
                }

            } else {
                setErrorAlert('User not found, please check your e-mail and password!')
            }
        }
    })

    return (
        <FormContainer onSubmit={formik.handleSubmit}>
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

            <Button type="submit">login</Button>
        </FormContainer>
    )
}

export default FormLogin