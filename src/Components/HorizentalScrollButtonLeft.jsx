import React from "react";

export const HorizentalScrollButtonLeft = ({ containerRef }) => {
  return (
    <div
      className="bg-slate-300 absolute top-1/2 transform -translate-y-1/2 xl:-left-6 p-2 rounded-full"
      onClick={() => {
        console.log("scrolling");
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft - 200,
          behavior: "smooth",
        });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4 sm:size-8 text-black cursor-pointer font-bold"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
