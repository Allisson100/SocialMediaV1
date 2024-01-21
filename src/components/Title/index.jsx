import { TitleStyled } from "./styles"

const Title = ({children , underline , border , padding}) => {
    return (
        <TitleStyled 
            $underline={underline} 
            $border={border}
            $padding={padding}
        >
            {children}
        </TitleStyled>
    )
}

export default Title