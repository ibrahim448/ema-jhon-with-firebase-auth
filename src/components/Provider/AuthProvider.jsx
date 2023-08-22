import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../Firebase/firebase.config.jsx";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    //User Create
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //Login user
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    };


    //currently signed-in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe;
        }
    }, []);

    //User Log Out
    const logOut = ()=>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        signUp,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;