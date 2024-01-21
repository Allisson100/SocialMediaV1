import { useLocation } from "react-router-dom"
import { ButtonStyled } from "./styles"

const Button = ({children , type = ''}) => {

    const { pathname } = useLocation()

    return (
        <ButtonStyled type={type} $pathname={pathname}>{children}</ButtonStyled>
    )
}

export default Button