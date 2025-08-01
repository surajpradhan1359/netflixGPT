import { auth } from "../firebase/firebase"

export const isEmailVerified = () => {
    const user = auth.currentUser;
    if (user) {
       console.log(user.uid)
    }
}