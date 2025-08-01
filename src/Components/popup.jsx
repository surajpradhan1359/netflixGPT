import React, { useEffect } from "react";
import { closePopup } from "../features/Popup/popupSlice";
import { useDispatch, useSelector } from "react-redux";

export const Popup = () => {
  //getting the content from the redux store
  const content = useSelector((state) => state.popup.content);
  //getting the isOpen from the redux store
  const isOpen = useSelector((state) => state.popup.isOpen);
  //dispatch
  const dispatch = useDispatch();
  //useEffect for closing the popup
  useEffect(() => {
    setTimeout(() => {
      dispatch(closePopup());
    }, 2000);
  }, [isOpen]);

  return (
    <div className={`p-4 bg-red-500 poupup ${isOpen ?"":"poupup-hidden"}`}>
      <h1 className="text-xl text-center text-black tracking-wide">{content}</h1>
    </div>
  );
};
