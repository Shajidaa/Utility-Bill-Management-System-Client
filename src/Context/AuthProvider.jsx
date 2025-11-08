import { AuthContext } from "./AuthContext";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  //google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const value = {
    signInWithGoogle,
    user,
    setUser,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
