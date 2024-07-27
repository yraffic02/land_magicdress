import React from "react";

export const AnimatedButton = ({ title, ...props }) => {
  return (
    <button
      className="w-full relative p-2 font-semibold text-yellow-300 bg-primary-black rounded-lg overflow-hidden"
      {...props}
    >
      <span className="
          absolute 
          inset-0 
          border-2 
          border-transparent 
          rounded-lg 
          animate-lightBeam 
          bg-gradient-to-r 
          from-transparent 
          via-yellow-100 
          to-transparent"
      />
      <span className="relative">{title}</span>
    </button>
  );
};
