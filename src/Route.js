import { createBrowserRouter, Route } from "react-router";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
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
        element: <h1>Browse page</h1>,
      },
      {
        path: "signin",
        element: <Form />,
      },
    ],
  },
]);
