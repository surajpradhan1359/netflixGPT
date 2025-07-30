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
      console.log("Signing in user...");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if(user){
        dispatch(login(user.uid));
        dispatch(openPopup("successfully signed in"));
      }

      console.log("Signed in user:", user.uid);
      console.log("Email verified:", user.emailVerified);
    } else {
      // Step 1: Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if(user){
        dispatch(openPopup("successfully signed up"));
      }
      console.log(user);
    }
  } catch (error) {
    console.log(error.code);
    dispatch(openPopup(error.code));
  }
};
