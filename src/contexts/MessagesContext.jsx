import { createContext, useEffect, useState } from "react";
import storage from "../services/sessionStorage";

export const MessagesContext = createContext()

export const MessagesProvider = ({ children }) => {

    const [ messages , setMessages ] = useState(() => {

        const getUserMessage = storage.getUserDatas('messagesDatas')

        if (getUserMessage) return getUserMessage

        return []

    })

    useEffect(() => {

        storage.setUserDatas(messages, 'messagesDatas')

    }, [messages])

    return (
        <MessagesContext.Provider value={{ messages , setMessages }}>
            {children}
        </MessagesContext.Provider>
    )

}