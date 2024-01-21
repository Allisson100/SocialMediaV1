import { useLocation } from "react-router-dom"
import { HeaderContainer, LinkStyled, UlStyled } from "./styles"

const Navbar = () => {

    const { pathname } = useLocation()

    return (
        <HeaderContainer>
            <nav>
                <UlStyled>
                    <LinkStyled to='/createposts' $currentPath={pathname}>Create Post</LinkStyled>
                    <LinkStyled to='/seeposts' $currentPath={pathname}>View Posts</LinkStyled>
                </UlStyled>
            </nav>
        </HeaderContainer>
    )
}

export default Navbar