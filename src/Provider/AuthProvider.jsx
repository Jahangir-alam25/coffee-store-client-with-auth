import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {  useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        // Implement sign up logic
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logout = () => {
        // Implement logout logic
    };

    const UserInfo = {
        
        user,
        createUser,
        logout,
        setUser
    };

    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;