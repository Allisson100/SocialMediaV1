import styled from "styled-components";

const PostsContainer = styled.div `
    align-items: center;
    background-color: rgba(123 , 123 , 123 , 0.2);
    border: 1px solid white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    padding: 1rem;
    position: relative;
    width: 40%;
    
    @media screen and (max-width: 1380px) {
        width: 90%;
    }
`

const UserInfosContainer = styled.div `
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-start;
    margin-bottom: 1rem;
    width: 100%;
    
    h3 {
        font-weight: bold;
        word-break: break-word;
    }
`

const UserPhoto = styled.div `
    align-items: center;
    border: 5px solid white;
    border-radius: 50%;
    display: flex;
    height: 25px;
    justify-content: center;
    padding: 0.7rem;
    width: 25px;
`

const MessageContainer = styled.div`
    height: auto;
    overflow-wrap: break-word;
    padding: 1rem;
    white-space: pre-line;
    width: 100%;
`

const DeleteContainer = styled.div `
    align-items: center;
    border-radius: 1rem;
    bottom: 10px;
    display: flex;
    justify-content: center;
    padding: 0.4rem;
    position: absolute;
    right: 10px;
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

const DateText = styled.p `
    font-size: 0.8rem;
    margin-left: auto;
`

export {
    PostsContainer,
    UserInfosContainer,
    UserPhoto,
    MessageContainer,
    DeleteContainer,
    IconContainer,
    DateText,
}