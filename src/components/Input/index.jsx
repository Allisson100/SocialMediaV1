import { InputContainer, Label , InputStyled , ErrorMessage } from "./styles"

const InputForm = ({ 
    type, 
    label, 
    required,
    name, 
    placeholder, 
    errorMessage = '', 
    autoComplete = undefined, 
    ...props 
}) => {
    
    return (
        <InputContainer>
            {/* <Label htmlFor={name}>{label}{required ? <span>*</span> : ''}</Label> */}
            <InputStyled 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                id={name} 
                autoComplete={autoComplete} 
                $errorMessage={errorMessage}
                {...props}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
    )
}

export default InputForm