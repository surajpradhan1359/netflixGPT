import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { router } from "./Route";
import { RouterProvider } from "react-router";
import { Authlistner } from "./Components/Authlistner";

export const App = () => {
  return (
    <Provider store={store}>
      <Authlistner />
      <RouterProvider router={router} />
    </Provider>
  );
};
