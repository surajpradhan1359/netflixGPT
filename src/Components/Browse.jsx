import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { EmailVerificationNotice } from "./EmailVerificationNotice";

export const Browse = () => {
  //navigate
  const navigate = useNavigate();
  //isVerified from redux
  const isVerified = useSelector((state) => state.auth.user?.isVerified);
  return (
    <div>
      {isVerified ? (
        <div className="w-full h-screen bg-black text-red text-2xl text-center">
          Browse
        </div>
      ) : (
       <EmailVerificationNotice />
      )}
    </div>
  );
};
