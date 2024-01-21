import styled from "styled-components";

const UserPostsContainer = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: auto;
    justify-content: center;
    width: 100%;
`

const TitleContainer = styled.div `
    align-items: center;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    display: flex;
    justify-content: center;
    width: 100%;
`

const EmptyMessage = styled.div `
    font-size: 1.2rem;
`

export {
    UserPostsContainer,
    TitleContainer,
    EmptyMessage,
}