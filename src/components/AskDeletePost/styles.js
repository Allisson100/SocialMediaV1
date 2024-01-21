import styled from "styled-components";

const QuestionContainer = styled.div `
    align-items: center;
    background-color: black;
    border: 2px solid red;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
`

const ButtonsContainer = styled.div `
    align-items: center;
    display: flex;
    gap: 0.8rem;
    justify-content: center;

    button {
        background-color: white;
        border: none;
        border-radius: 0.2rem;
        color: white;
        padding: 0.2rem 0.3rem;
        transition: 0.2s;
        
        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.95);
        }
    }

    button:nth-child(1) {
        background-color: green;
    }

    button:nth-child(2) {
        background-color: red;
    }
`

export {
    QuestionContainer,
    ButtonsContainer,
}