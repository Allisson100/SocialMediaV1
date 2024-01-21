import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header `
    align-items: center;
    display: flex;
    height: auto;
    justify-content: center;
    padding: 2rem;
    width: 100%;
`

const UlStyled = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;
    justify-content: center;

    @media screen and (max-width: 360px) {
        gap: 0;
    }
`

const LinkStyled = styled(Link) `
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: ${(props) => props.to === props.$currentPath ? 'underline' : 'none'};

    @media screen and (max-width: 470px) {
        padding: 1rem;
    }
`

export {
    HeaderContainer,
    UlStyled,
    LinkStyled
}