import React, { use, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { emailVerified } from "../features/auth/authSlice";
import { useNavigate } from "react-router";

export const EmailVerificationNotice = () => {
  //dispatch
  const dispatch = useDispatch();
  //useEffect for checking email verification
  useEffect(() => {
    let timer = setInterval(async () => {
      let user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          console.log(true);
          dispatch(
            emailVerified({
              isVerified: true,
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
            })
          );
          clearInterval(timer);
        } else {
          console.log(false);
        }
      }
    }, 2000);
    //clear interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {console.log("emailVerified")}
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-6">
          A verification email has been sent to your registered email address.{" "}
          <br />
          Please check your inbox{" "}
          <span className="text-xl text-red-500 font-bold tracking-wide">
            (Check on the spam section)
          </span>{" "}
          and follow the instructions to verify your account.
        </p>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
