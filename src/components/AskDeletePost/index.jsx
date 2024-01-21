import { useContext } from "react"
import { ButtonsContainer, QuestionContainer } from "./styles"
import { MessagesContext } from "../../contexts/MessagesContext"

const AskDeletePost = ({ id , handleDeletePost }) => {


    const { setMessages } = useContext(MessagesContext)

    const handleYes = () => {
        setMessages((prevMessages) => (
            prevMessages.filter((message) => message.id !== id)
        ))

        handleDeletePost()
    }

    const handleNo = () => {
        handleDeletePost()
    }


    return (

        <QuestionContainer>
            <p>Delete Post?</p>
            <ButtonsContainer>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNo}>No</button>
            </ButtonsContainer>
         
        </QuestionContainer>
    )
}

export default AskDeletePost