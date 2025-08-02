import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { openPopup } from "../features/Popup/popupSlice.js";
import { login } from "../features/auth/authSlice.js";

export const SigninFormHelper = async (data, isSignin, dispatch) => {
  let { email, password } = data;
  try {
    if (isSignin) {
      //signin
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //getting the user
      const user = userCredential.user;
      //if user is signed in
      if (user) {
        dispatch(openPopup("successfully signed in"));
      }
    } else {
      // Step 1: Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //getting the user
      const user = userCredential.user;
      //sending verification email
      const verifyEmail = await sendEmailVerification(user);
      //popup redux state change
      if (user) {
        dispatch(openPopup("successfully signed up"));
      }
    }
  } catch (error) {
    dispatch(openPopup(error.code));
  }
};
