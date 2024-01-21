import styled from "styled-components";

const BoxContainer = styled.div `
    align-items: center;
    border: 4px solid white;
    border-radius: 1rem;
    box-shadow:  0 0 40px white;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-evenly;
    margin: 1rem;
    min-height: calc(100vh * 0.75);
    min-width: 25%;
    padding: 0.8rem 0;

    @media screen and ((min-width: 651px) and (max-width: 1500px)) {
        min-height: calc(100vh * 0.50);
        width: 60%;
    }

    @media screen and (max-width: 650px) {
        min-height: calc(100vh * 0.50);
        width: 80%;
    }
`

export {
    BoxContainer,
}