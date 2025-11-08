import { AuthContext } from "./AuthContext";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const value = {
    signInWithGoogle,
    user,
    setUser,
    loading,
    setLoading,
    logOut,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
