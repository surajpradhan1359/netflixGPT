import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center bg-black w-full h-screen">
      <div className="w-16 h-16 border-4 border-gray-800 border-t-red-500 rounded-full animate-spin"></div>
    </div>
  );
};
