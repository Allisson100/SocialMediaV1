import { useContext, useEffect } from "react"
import AskAccount from "../../components/AskAccount"
import Box from "../../components/Box"
import FormLogin from "../../components/FormLogin"
import Title from "../../components/Title"
import { ErrorAlertContainer, LoginContainer } from "./styles"
import { ErrorContext } from "../../contexts/ErrorContext"

const Login = () => {

    const { errorAlert , setErrorAlert } = useContext(ErrorContext)

    useEffect(() => {
        setErrorAlert('')

        return () => {
            setErrorAlert('')
        }
    }, [])

    return (
        <LoginContainer>
            <Box>
                <Title>Login</Title>
                {errorAlert && <ErrorAlertContainer>{errorAlert}</ErrorAlertContainer>}
                <FormLogin />
                <AskAccount 
                    description = "Don't have an account?"
                    linkText = 'create your account'
                    to = '/signup'
                />
            </Box>
        </LoginContainer>
    )
}

export default Login