import styled from "styled-components";

const DeleteContainer = styled.div `
    align-items: center;
    border-radius: 1rem;
    bottom: 6px;
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    position: absolute;
    right: 6px;
    z-index: 99;
`

const IconContainer = styled.div `
    cursor: pointer;
    height: 20px;
    width: 20px;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

export {
    DeleteContainer,
    IconContainer,
}