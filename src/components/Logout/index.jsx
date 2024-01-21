import { IoExitOutline } from "react-icons/io5";
import { LinkStyled, LogoutContainer, PStyled } from "./styles"
import storage from '../../services/sessionStorage';

const Logout = () => {
    
    const handleDeleteUserAndDatas = () => {
        storage.deleteUserAndDatas('userDataSignin')
        storage.deleteUserAndDatas('messagesDatas')
    }

    return (
        <LogoutContainer onClick={handleDeleteUserAndDatas}>
            <LinkStyled to='/login'>
                <IoExitOutline />
                <PStyled>
                    Logout
                </PStyled>
            </LinkStyled>
        </LogoutContainer>
    )
}

export default Logout