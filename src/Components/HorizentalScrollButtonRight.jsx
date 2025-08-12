import React from "react";

export const HorizentalScrollButtonRight = ({ containerRef }) => {
  return (
    <div
      className="bg-slate-300 absolute top-1/2 transform -translate-y-1/2 right-0 xl:-right-6 p-2 rounded-full"
      onClick={() => {
        console.log("scrolling");
        containerRef.current.scrollTo({
          left: containerRef.current.scrollLeft + 200,
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
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
