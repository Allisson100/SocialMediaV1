import AskAccount from "../../components/AskAccount"
import Box from "../../components/Box"
import FormSignin from "../../components/FormSignup"
import Title from "../../components/Title"
import { SigninContainer } from "./styles"

const Signin = () => {

    return (
        <SigninContainer>
            <Box>
                <Title>Signup</Title>
                <FormSignin />
                <AskAccount 
                    description = "Already have an account?"
                    linkText = 'login'
                    to = '/login'
                />
            </Box>
        </SigninContainer>
    )
}

export default Signin