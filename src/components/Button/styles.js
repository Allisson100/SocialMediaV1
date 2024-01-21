import styled from "styled-components";

const ButtonStyled = styled.button `
    background-color: transparent;
    border: 2px solid white;
    border-radius: 999999px;
    color: white;
    font-size: 1rem;
    margin-top: ${(props) => props.$pathname === '/login' ? '2rem' : '1rem'};
    padding: 0.5rem;
    text-transform: uppercase;
    transition: .2s;
    width: 85%;

    &:hover {
        box-shadow: 0 0 10px white;
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.97);
    }

    @media screen and (max-width: 300px) {
        font-size: 0.7rem;
    }   
`

export {
    ButtonStyled,
}