import styled from "styled-components";
import { Link } from "react-router-dom"

const MessagesContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: ${(props) => props.$pathname === '/login' ? 'column' : 'row'};
    gap: 0.5rem;
    justify-content: center;

    p {
        font-size: 1.2rem;
        text-align: center;

        @media screen and (max-width: 300px) {
            font-size: 1rem;
        }   
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    } 
`

const LinkMessage = styled(Link)`
    color: blue;
    font-size: 1.1rem;
    text-align: center;
    text-decoration: none;
`

export {
    MessagesContainer,
    LinkMessage,
}