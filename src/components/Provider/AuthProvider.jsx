import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../Firebase/firebase.config.jsx";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //User Create
    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //Login user
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    };


    //currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe;
        }
    }, []);

    //User Log Out
    const logOut = ()=>{
        return signOut(auth);
    };

    //Reset Password
    const passwordReset = (email)=>{
        return sendPasswordResetEmail(auth, email);
    };

    //google login
    const googleWithLogin = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo ={
        user,
        signUp,
        login,
        logOut,
        loading,
        passwordReset,
        googleWithLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;