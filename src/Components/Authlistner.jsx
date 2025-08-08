import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export const Authlistner = () => {
  const dispatch = useDispatch();
  //check if user is signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return;
      } else {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            isVerified: user.emailVerified,
            name: user.displayName,
          })
        );
      }
    });

    return () => unsubscribe();
  }, []);
  return <div></div>;
};
