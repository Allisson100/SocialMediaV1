import AskAccount from "../../components/AskAccount"
import Box from "../../components/Box"
import FormSignup from "../../components/FormSignup"
import Title from "../../components/Title"
import { SignupContainer } from "./styles"

const Singup = () => {

    return (
        <SignupContainer>
            <Box>
                <Title>Signup</Title>
                <FormSignup />
                <AskAccount 
                    description = "Already have an account?"
                    linkText = 'login'
                    to = '/login'
                />
            </Box>
        </SignupContainer>
    )
}

export default Singup