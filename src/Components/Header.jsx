import React from "react";
import { netflixLogo } from "../utils/formUtils";

export const Header = () => {
  //state for dropdown
  const [isClick, setIsClick] = React.useState(false);

  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto fixed top-0 left-0 right-0 z-50 w-full">
      <img className="w-42" src={netflixLogo} alt="noImage" />
      <div className="cursor-pointer relative">
        <h1
        onClick={() => setIsClick(!isClick)} 
        className="text-2xl text-red-600 tracking-wide cursor-pointer font-bold">Account</h1>
        <Dropdown isClick={isClick}/>
      </div>
    </div>
  );
};

const Dropdown = ({isClick}) => {
  return (
    <div className={`bg-black p-4 absolute w-[200px] right-0 ${isClick ? "block" : "hidden"}`}>
      <p className="text-xl text-center mb-2 text-white">Name of the user</p>
      <p className="text-xl text-center mb-2 text-white">Logout</p>
    </div>
  );
};
