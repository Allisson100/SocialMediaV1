import { BoxContainer } from "./styles"
import { useLocation } from 'react-router-dom'

const Box = ({children}) => {

    const { pathname } = useLocation()

    return (
        <BoxContainer $pathname={pathname}>
            {children}
        </BoxContainer>
    )
}

export default Box