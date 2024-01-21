import { createContext, useState } from 'react'

export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {

    const [ errorAlert , setErrorAlert ] = useState('')

    return (
        <ErrorContext.Provider value={{ errorAlert , setErrorAlert }}>
            {children}
        </ErrorContext.Provider>
    )
}
