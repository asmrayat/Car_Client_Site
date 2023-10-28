import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {

        return signInWithPopup(auth,googleProvider);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            if(currentUser.email&& currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('https://y-4kkuy085u-rayats-projects.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('jwt response',data);
                    localStorage.setItem('car-access-token',data.token);
                    
                })
            }
            else{
                localStorage.removeItem('car-access-token');
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const autoInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut

    }


    return (
        <AuthContext.Provider value={autoInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;