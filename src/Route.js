import { createBrowserRouter, Route } from "react-router";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Popup } from "./Components/popup";
import { EmailVerificationNotice } from "./Components/EmailVerificationNotice";
import Brwose, { Browse } from "./Components/Browse";

const Root = () => {
  //getting the auth
  let authFlag = useSelector((state) => state.auth.user);
  //navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (authFlag) {
      navigate("/browse");
    } else {
      navigate("/signin");
    }
  }, [authFlag]);

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
