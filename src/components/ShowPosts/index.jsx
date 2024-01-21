import { EmptyMessage, TitleContainer, UserPostsContainer } from "./styles";
import Post from "../Post";
import Title from "../Title";

const ShowPosts = ({ titleText , messages , onDelete = false }) => {

    return (
        <UserPostsContainer>
            {titleText &&
                <TitleContainer>
                    <Title padding='1rem'>{titleText}</Title>
                </TitleContainer>
            }

            {messages?.length === 0 &&
                <EmptyMessage>
                    You haven't created any posts yet   
                </EmptyMessage>
            }
            
            {messages.map((message) => (

                <Post 
                    key={message.id}
                    user={message.user.userName}
                    message={message.message}
                    date={message.date}
                    id={message.id}
                    onDelete={onDelete}
                />
                
            ))}
        </UserPostsContainer>
    )
}

export default ShowPosts