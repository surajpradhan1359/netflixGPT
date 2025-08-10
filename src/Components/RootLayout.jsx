import {  useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Header } from "./Header";
import { Outlet } from "react-router";
import { Popup } from "./popup";
import { use, useEffect } from "react";

export const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const user = useSelector((state) => state.auth.user);
  //uid
  const uid = useSelector((state) => state.auth.user?.uid);

  useEffect(() => {
    if (!uid) {
      navigate("/signin");
    } else {
      navigate("/browse");
    }

    return () => {
      console.log("❌ RootLayout unmounted");
    };
  }, [uid]);

  return (
    <div>
      <Header />
      <Outlet />
      <Popup />
    </div>
  );
};