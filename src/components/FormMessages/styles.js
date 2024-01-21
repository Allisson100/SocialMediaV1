import styled from "styled-components"

const FormStyled = styled.form `
    align-items: center;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin-bottom: 2rem;
    width: 100%;

    button {
        width: 30%;
    }
    
    div {
        color: red;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        white-space: pre-line;
    }
`

const InfoText = styled.p `
    align-items: center;
    color: yellow;
    display: flex;
    justify-content: flex-end;
    max-width: 75%;
    min-width: 45%;
    padding: 0.2rem;
    text-align: center;

    @media screen and (max-width: 1380px) {
        width: 65%;
    }
`

const TextareaStyled = styled.textarea`
    border-radius: 1rem;
    color: black;
    max-height: 360px;
    min-height: 200px;
    max-width: 80%;
    min-width: 50%;
    padding: 0.5rem;

    @media screen and (max-width: 1380px) {
        min-height: 250px;
        min-width: 70%;
    }
`
export {
    FormStyled,
    InfoText,
    TextareaStyled,
}
