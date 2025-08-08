import { updateProfile } from "firebase/auth";
import { updateProfileOfUser } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase.js";

export const updateProfile = async (authUser, name, photoURL, dispatch) => {
  console.log(name, photoURL);
  try {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
    dispatch(updateProfileOfUser({ name: name, photoURL: photoURL }));
  } catch (error) {
    console.log("Error updating profile:");
    console.log(error);
  }
};
