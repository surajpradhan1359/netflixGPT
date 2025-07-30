import React from "react";
import { Signin } from "./Components/Signin";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { router } from "./Route";
import { RouterProvider } from "react-router";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};
