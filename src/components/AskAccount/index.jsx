import { useLocation } from "react-router-dom"
import { LinkMessage, MessagesContainer } from "./styles"

const AskAccount = ({ description , linkText , to }) => {

    const { pathname } = useLocation()

    return (
        <MessagesContainer $pathname={pathname}>
            <p>{description}</p>
            <LinkMessage to={to}>
                {linkText}
            </LinkMessage>
        </MessagesContainer>
        
    )
}

export default AskAccount