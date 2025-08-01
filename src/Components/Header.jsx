import React from "react";
import { netflixLogo } from "../utils/formUtils";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  //state for dropdown
  const [isClick, setIsClick] = React.useState(false);
  //dispatch
  const dispatch = useDispatch();
  //email from redux
  const email = useSelector((state) => state.auth.user?.email);

  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto fixed top-0 left-0 right-0 z-50 w-full">
      <img className="w-42" src={netflixLogo} alt="noImage" />
      <div className="cursor-pointer relative">
        <h1
        onClick={() => setIsClick(!isClick)} 
        className="text-2xl text-red-600 tracking-wide cursor-pointer font-bold">Account</h1>
        <Dropdown isClick={isClick} dispatch={dispatch} email={email}/>
      </div>
    </div>
  );
};

const Dropdown = ({isClick,dispatch,email}) => {
  return (
    <div className={`bg-black p-4 absolute w-[200px] right-0 ${isClick ? "block" : "hidden"}`}>
      <p className="text-xl text-center mb-2 text-white">{email?email.slice(0,15):"Guest"}</p>
      <p className="text-xl text-center mb-2 text-white"
      onClick={() => dispatch(logout())}>Logout</p>
    </div>
  );
};
