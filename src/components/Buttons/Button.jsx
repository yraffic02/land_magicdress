import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full p-1 font-semibold bg-yellow-300 rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
};
