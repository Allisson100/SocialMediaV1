import { Link } from "react-router-dom"
import styled from "styled-components"

const LogoutContainer = styled.div `
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    position: absolute;

    svg {
        height: 20px;
        width: 20px;
    }
`

const LinkStyled = styled(Link) `
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: flex;
    gap: 0.2rem;
    justify-content: center;
    text-decoration: none;
`

const PStyled = styled.p `
    font-size: 1rem;
    text-decoration: none;
`

export {
    LogoutContainer,
    LinkStyled,
    PStyled,
}