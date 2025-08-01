import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Browse = () => {
  //navigate
  const navigate = useNavigate();
  //uid from redux
  const uid = useSelector((state) => state.auth.user?.uid);
  //isVerified from redux
  const isVerified = useSelector((state) => state.auth.user?.isVerified);
  //useEffect for checking uid and routing
  useEffect(() => {
    if (!uid) {
      navigate("/signin");
    }else{
        return;
    }
  }, []);
  //useEffect for checking email verification
  useEffect(() => {
    if (!isVerified) {
      navigate("/verifyemail");
    }
  },[isVerified])
  return (
    <div className="w-full h-screen bg-black text-red text-2xl text-center">
      Browse
      {console.log(isVerified)}
    </div>
  );
};
