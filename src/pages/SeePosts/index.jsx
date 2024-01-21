import { useContext, useEffect, useState } from 'react'
import staticPosts from '../../DB/mock.js'
import { AllPostsContainer } from "./styles"
import { MessagesContext } from '../../contexts/MessagesContext.jsx'
import ShowPosts from '../../components/ShowPosts/index.jsx'

const SeePosts = () => {

    const [ allMessages , setAllMessages ] = useState([])

    const { messages } = useContext(MessagesContext)

    useEffect(() => {
        
        setAllMessages(() => {
            return [...messages, ...staticPosts]
        })

    }, [messages])

    return (
        <AllPostsContainer>
            <ShowPosts messages={allMessages} onDelete={true}/>
        </AllPostsContainer>
    )
}

export default SeePosts