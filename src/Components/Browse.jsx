import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { EmailVerificationNotice } from "./EmailVerificationNotice";
import { Body } from "./Body";

export const Browse = () => {
  //navigate
  const navigate = useNavigate();
  //isVerified from redux
  const isVerified = useSelector((state) => state.auth.user?.isVerified);
  return (
    <div>
      {isVerified ? (
        <Body />
      ) : (
       <EmailVerificationNotice />
      )}
    </div>
  );
};
