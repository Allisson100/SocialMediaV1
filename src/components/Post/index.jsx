import { MessageContainer, PostsContainer, UserInfosContainer, UserPhoto , IconContainer, DeleteContainer, DateText } from "./styles"
import DeletePost from "../DeletePost";

const Post = ({ user , message , date , id , onDelete }) => {

    return (
        <PostsContainer>
            <UserInfosContainer>
                <UserPhoto>{user.charAt(0).toUpperCase()}</UserPhoto>
                <h3>{user}</h3>
                <DateText>{date}</DateText>
            </UserInfosContainer>
            <MessageContainer>{message}</MessageContainer>
            {!onDelete && <DeletePost id={id}/>}           
        </PostsContainer>
    )
}

export default Post