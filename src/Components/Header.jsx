import React from "react";
import { netflixLogo } from "../utils/formUtils";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { Account } from "./Account.jsx";
import { logout } from "../features/auth/authSlice.js";
import { Link } from "react-router";

export const Header = () => {
  //state for dropdown
  const [isClick, setIsClick] = React.useState(false);
  //dispatch
  const dispatch = useDispatch();
  //email from redux
  const email = useSelector((state) => state.auth.user?.email);

  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto fixed top-0 left-0 right-0 z-50">
      <img className="w-32 sm:w-42" src={netflixLogo} alt="noImage" />
      <div className="cursor-pointer relative">
        <Account setClick={setIsClick}/>
        <Dropdown isClick={isClick} dispatch={dispatch} email={email} />
      </div>
    </div>
  );
};

const Dropdown = ({ isClick, dispatch, email }) => {

  const name = useSelector((state) => state.auth.user?.name);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (err) {
      console.error("Failed to sign out", err);
    }
  };
  return (
    <div
      className={`bg-red-600 p-4 absolute w-[200px] right-0 ${
        isClick ? "block" : "hidden"
      }`}
    >
      <p className="text-xl text-center mb-2 text-white">
        {email ? email.slice(0, 15) : "Guest"}
      </p>
      <p className="text-xl text-center mb-2 text-white">
        {name ? name.slice(0, 15) : "Username"}
      </p>
      <p className="text-xl text-center mb-2 text-white">
        <Link to="/userinfo">Update User</Link>
      </p>
      <p
        className="text-xl text-center mb-2 text-white"
        onClick={handleLogout}
      >
        Logout
      </p>
    </div>
  );
};
