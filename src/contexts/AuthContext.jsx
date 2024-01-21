import { createContext, useState } from 'react'
import storage from '../services/sessionStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [ auth , setAuth ] = useState(() => {

        const getAuth = storage.getUserDatas('userDataSignin')

        if(getAuth) return getAuth
        
        return ''
    })

    return (
        <AuthContext.Provider value={{ auth , setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
