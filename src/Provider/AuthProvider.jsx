import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, {  useState } from 'react';
import { auth } from '../Firebase/firebase.init';
import { AuthContext } from './AuthContext';



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        // Implement sign up logic
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // Implement sign in logic
    };

    const logout = () => {
        // Implement logout logic
    };

    const UserInfo = {
        
        user,
        createUser,
        logout,
        setUser,
        signInUser,
    };

    return (
        <AuthContext value={UserInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;