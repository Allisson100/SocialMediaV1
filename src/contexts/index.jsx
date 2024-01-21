import React from 'react';
import { AuthProvider } from "./AuthContext"
import { MessagesProvider } from './MessagesContext';
import { ErrorProvider } from './ErrorContext';

const AllContextProviders = ({ children }) => {
    return (
        <AuthProvider>
            <MessagesProvider>
                <ErrorProvider>
                    {children}
                </ErrorProvider>
            </MessagesProvider>
        </AuthProvider>
    )
}

export default AllContextProviders