import { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../Firebase/firebase.config.jsx";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState();

    //User Create
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        user,
        signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;