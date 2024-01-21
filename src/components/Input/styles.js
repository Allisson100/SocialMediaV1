import styled from "styled-components"

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`
const Label = styled.label`
    display: flex;
    font-size: 1.1rem;
    gap: 0.2rem;

    span {
        color: red;
        font-size: 1rem;
    }

    @media screen and (max-width: 300px) {
        font-size: 1rem;
    }   
`

const InputStyled = styled.input `
    border: white;
    border-radius: 0.5rem;
    font-size: 1rem;
    height: 2.5rem;
    outline: ${(props) => props.$errorMessage ? '3px solid red' : 'none'};
    padding: 0.5rem;

    &::placeholder {
        font-size: 1rem;
        line-height: 2.5rem;
    }
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    padding-left: 0.1rem;
    white-space: pre-line;
`

export {
    InputContainer,
    Label,
    InputStyled,
    ErrorMessage
}