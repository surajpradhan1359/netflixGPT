import { createBrowserRouter } from "react-router";
import { Form } from "./Components/Form";
import { EmailVerificationNotice } from "./Components/EmailVerificationNotice";
import { Browse } from "./Components/Browse";
import { Userinfo } from "./Components/Userinfo.jsx";
import { RootLayout } from "./Components/RootLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "signin",
        element: <Form />,
      },
      {
        path: "userinfo",
        element: <Userinfo />,
      },
    ],
  }
]);
