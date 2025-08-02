import { createBrowserRouter } from "react-router";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Popup } from "./Components/popup";
import { EmailVerificationNotice } from "./Components/EmailVerificationNotice";
import  { Browse } from "./Components/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.js";
import { login } from "./features/auth/authSlice";

const Root = () => {
  //getting the auth
  let authFlag = useSelector((state) => state.auth.user);
  //navigate
  const navigate = useNavigate();
  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signin");
        
      }else{
        dispatch(login({
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          isVerified: user.emailVerified
        }));
        navigate("/browse");
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Popup />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "signin",
        element: <Form />,
      },
    ],
  },
  {
    path: "verifyemail",
    element: <EmailVerificationNotice />,
  },
]);
