import Title from "../../components/Title"
import { CreatePostsContainer } from "./styles"
import FormMessages from "../../components/FormMessages"
import ShowPosts from "../../components/ShowPosts"
import { MessagesContext } from "../../contexts/MessagesContext"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const CreatePosts = () => {

    const { auth } = useContext(AuthContext)
    const { messages } = useContext(MessagesContext)

    const userMessages = messages.filter((message) => (
        message.user.userName === auth.userName
    ))

    console.log('messages', messages);
    console.log('userMessages', userMessages);
    console.log('auth', auth);

    return (
        <CreatePostsContainer>
            <Title underline>Tell us what you're thinking today!</Title>
            <FormMessages />
            <ShowPosts titleText='Your Posts' messages={userMessages}/>
        </CreatePostsContainer> 
    )
}

export default CreatePosts