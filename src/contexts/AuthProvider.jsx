import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,setLoading]=useState(true)

  // 1.create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 2. sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser=(userInfo)=>{
    return updateProfile(user, userInfo)
  }

  // 3. sign out user
  const logOutUser = () => {
    return signOut(auth);
  };

  // 3.1 set an observer to track user
  useState(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user observing");
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { createUser, signInUser, user, logOutUser, updateUser, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
