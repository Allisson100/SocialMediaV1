import styled from "styled-components";

const TitleStyled = styled.h2`
    border: ${(props) => props.$border ? '1px solid white' : 'none'};
    font-size: 2rem;
    padding: ${(props) => props.$padding ? props.$padding : 'none'};
    text-align: center;
    text-decoration: ${(props) => props.$underline ? 'underline' : 'none'};
    text-transform: uppercase;

    @media screen and (max-width: 300px) {
        font-size: 1.5rem;
    }   

    @media screen and (max-width: 550px) {
        padding: 0.7rem;
    } 
`

export {
    TitleStyled,
}