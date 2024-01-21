import styled from "styled-components";

const LoginContainer = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;
`

const ErrorAlertContainer = styled.div `
    color: red;
    width: 80%;
    padding: 0.5rem;
    text-align: center;
`
export {
    LoginContainer,
    ErrorAlertContainer,
}